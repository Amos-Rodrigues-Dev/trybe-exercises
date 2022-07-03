from tech_news.scraper import get_tech_news
from tech_news.analyzer.search_engine import (
    search_by_title,
    search_by_date,
    search_by_source,
    search_by_category,
)

from tech_news.analyzer.ratings import (
    top_5_news,
    top_5_categories,
)

import sys


# Requisito 12
def analyzer_menu():
    menu = (
        "Selecione uma das opções a seguir:\n"
        " 0 - Popular o banco com notícias;\n"
        " 1 - Buscar notícias por título;\n"
        " 2 - Buscar notícias por data;\n"
        " 3 - Buscar notícias por fonte;\n"
        " 4 - Buscar notícias por categoria;\n"
        " 5 - Listar top 5 notícias;\n"
        " 6 - Listar top 5 categorias;\n"
        " 7 - Sair.\n"
    )

    option = input(menu)

    if not option or option not in menu:
        sys.stderr.write("Opção inválida\n")
    elif option == "7":
        sys.stdout.write("Encerrando script\n")
    else:
        obj[option]()


def handle_0():
    quant_nwes = int(input("Digite quantas notícias serão buscadas: "))
    get_tech_news(quant_nwes)


def handle_1():
    titulo = input("Digite o título: ")
    search_by_title(str(titulo))


def handle_2():
    data = input("Digite a data no formato aaaa-mm-dd: ")
    search_by_date(str(data))


def handle_3():
    source = input("Digite a fonte: ")
    search_by_source(str(source))


def handle_4():
    category = input("Digite a categoria: ")
    search_by_category(str(category))


def handle_5():
    top_5_news()


def handle_6():
    top_5_categories()


obj = {
    "0": handle_0,
    "1": handle_1,
    "2": handle_2,
    "3": handle_3,
    "4": handle_4,
    "5": handle_5,
    "6": handle_6,
}
