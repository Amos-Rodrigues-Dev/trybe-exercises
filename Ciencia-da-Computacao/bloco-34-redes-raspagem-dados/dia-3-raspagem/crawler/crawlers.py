from parsel import Selector
import requests

# import time

# À partir da décima requisição somos bloqueados de acessar o recurso
# Código de status 429: Too Many Requests
# for _ in range(15):
#     response = requests.get("https://www.cloudflare.com/rate-limit-test/")
# print(response.status_code)

# Coloca uma pausa de 6 segundos a cada requisição
# Obs: este site de exemplo tem um rate limit de 10 requisições por minuto
# for _ in range(15):
#     response = requests.get("https://www.cloudflare.com/rate-limit-test/")
# print(response)
# time.sleep(6)

# Por 10 segundos não temos certeza se a requisição irá retornar
# response = requests.get("https://httpbin.org/delay/10")
# print(response)


# try:
#     # recurso demora muito a responder
#     response = requests.get("http://httpbin.org/delay/10", timeout=2)
# except requests.ReadTimeout:
#     # vamos fazer uma nova requisição
#     response = requests.get("http://httpbin.org/delay/1", timeout=2)
# finally:
#     print(response.status_code)


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
print(selector)

# O título está no atributo title em um elemento âncora (<a>)
# Dentro de um h3 em elementos que possuem classe product_pod
titles = selector.css(".product_pod h3 a::attr(title)").getall()
# Estamos utilizando a::attr(title) para capturar somente o valor contido no
# texto do seletor

# Os preços estão no texto de uma classe price_color
# Que se encontra dentro da classe .product_price
prices = selector.css(".product_price .price_color::text").getall()

# Combinando tudo podemos buscar os produtos
# em em seguida buscar os valores individualmente
for product in selector.css(".product_pod"):
    title = product.css("h3 a::attr(title)").get()
    price = product.css(".price_color::text").get()
    print(f"{title} - {price}")


# Existe uma classe next, que podemos recuperar a url através do seu elemento
# âncora
next_page_url = selector.css(".next a::attr(href)").get()
print(next_page_url)
