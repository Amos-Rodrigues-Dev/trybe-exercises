from collections import Counter
from datetime import datetime


class SimpleReport:
    @classmethod
    def fabricacao_mais_antiga(cls, stock):
        now = datetime.today()
        dateArray = []
        for item in stock:
            if datetime.strptime(item["data_de_fabricacao"], "%Y-%m-%d") < now:
                dateArray.append(item["data_de_fabricacao"])

        return f"Data de fabricação mais antiga: {min(dateArray)}"

    @classmethod
    def validade_mais_proxima(cls, stock):
        now = datetime.today()
        dateArray = []
        for item in stock:
            if datetime.strptime(item["data_de_validade"], "%Y-%m-%d") > now:
                dateArray.append(item["data_de_validade"])

        return f"Data de validade mais próxima: {min(dateArray)}"

    @classmethod
    def empresa_com_maior_estoque(cls, stock):
        emp = [obj["nome_da_empresa"] for obj in stock]
        return (
            "Empresa com maior quantidade de produtos estocados: "
            + Counter(emp).most_common()[0][0]
        )

    @classmethod
    def generate(cls, stock):
        return (
            f"{cls.fabricacao_mais_antiga(stock)}\n"
            f"{cls.validade_mais_proxima(stock)}\n"
            f"{cls.empresa_com_maior_estoque(stock)}\n"
        )
