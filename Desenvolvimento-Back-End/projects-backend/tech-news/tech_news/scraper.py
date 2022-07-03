import parsel
import requests
import time
from tech_news.database import create_news


# Requisito 1
def fetch(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        time.sleep(1)
    except (requests.HTTPError, requests.ReadTimeout):
        return None

    return response.text


# Requisito 2
def scrape_novidades(html_content):
    selector = parsel.Selector(html_content)
    news = []
    if "<!DOCTYPE html>" in html_content:
        for item in selector.css("div.tec--list__item"):
            ulr_new = item.css("h3.tec--card__title a::attr(href)").get()
            news.append(ulr_new)
        return news
    return news


# Requisito 3
def scrape_next_page_link(html_content):
    if "<!DOCTYPE html>" in html_content:
        selector = parsel.Selector(html_content)
        url_next = selector.css("div.tec--list > a::attr(href)").get()
        return url_next
    return None


def search_writer(selector):
    try:
        writer = (
            selector.css(
                "div.tec--author__info p.z--m-none:first-child *::text"
            ).get()
            or selector.css(
                "div.tec--timestamp div.tec--timestamp__item a::text"
            ).get()
        )
        if type(writer) == str:
            return writer.strip()
    except TypeError:
        return None


# Requisito 4
def scrape_noticia(html_content):
    selector = parsel.Selector(html_content)

    url = selector.xpath("//link[@rel='canonical']/@href").get()
    title = selector.css("#js-article-title::text").get()
    timestamp = selector.css("#js-article-date::attr(datetime)").get()
    writer = search_writer(selector)
    shares = selector.css("div.tec--toolbar__item::text").get()
    comments = selector.xpath(
        "//button[@id='js-comments-btn']//text()"
    ).getall()[1]

    summary = "".join(
        selector.css("div.tec--article__body > p:first-child *::text").getall()
    )
    sources = selector.xpath("//a[@class='tec--badge']//text()").getall()
    categories = selector.xpath(
        "//a[@class='tec--badge tec--badge--primary']//text()"
    ).getall()

    info_new = {
        "url": url,
        "title": title,
        "timestamp": timestamp,
        "writer": writer,
        "shares_count": int(shares.split(" ")[1]) if shares else 0,
        "comments_count": int(comments.split(" ")[1]) if comments else 0,
        "summary": summary,
        "sources": [src.strip() for src in sources],
        "categories": [categ.strip() for categ in categories],
    }

    return info_new


# Requisito 5
def get_tech_news(amount):
    base_url = "https://www.tecmundo.com.br/novidades"
    content = fetch(base_url)
    links = scrape_novidades(content)
    news = []

    while len(links) < amount:
        content = fetch(scrape_next_page_link(content))
        links.extend(scrape_novidades(content))

    for link in links[:amount]:
        content_new = fetch(link)
        info_new = scrape_noticia(content_new)
        news.append(info_new)

    create_news(news)
    return news
