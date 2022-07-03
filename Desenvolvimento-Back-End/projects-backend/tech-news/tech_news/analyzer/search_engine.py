from tech_news.database import search_news
from datetime import datetime


# Requisito 6
def search_by_title(title):
    # source: https://www.w3schools.com/python/python_mongodb_query.asp
    result = search_news({"title": {"$regex": title, "$options": "i"}})
    return [(item["title"], item["url"]) for item in result]


# Requisito 7
def search_by_date(date):
    # source https://www.w3schools.com/python/python_datetime.asp
    try:
        if datetime.strptime(date, "%Y-%m-%d"):
            result = search_news({"timestamp": {"$regex": date}})
            return [(item["title"], item["url"]) for item in result]
    except ValueError:
        raise ValueError("Data inválida")


# Requisito 8
def search_by_source(source):
    # source https://stackoverflow.com/questions/10700921/
    # case-insensitive-search-with-in
    result = search_news(
        {"sources": {"$elemMatch": {"$regex": source, "$options": "i"}}}
    )
    return [(item["title"], item["url"]) for item in result]


# Requisito 9
def search_by_category(category):
    result = search_news(
        {"categories": {"$elemMatch": {"$regex": category, "$options": "i"}}}
    )
    return [(item["title"], item["url"]) for item in result]
