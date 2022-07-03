from .simple_report import SimpleReport


class CompleteReport(SimpleReport):
    @classmethod
    def quantidade_de_estoque(cls, stock):
        count = {}
        for item in stock:
            if item["nome_da_empresa"] not in count:
                count[item["nome_da_empresa"]] = 1
            else:
                count[item["nome_da_empresa"]] += 1
        return count

    @classmethod
    def quantidade_de_estoque_correto(cls, stock):
        content = ""
        itens = cls.quantidade_de_estoque(stock)
        itens_keys = itens.keys()

        for item in itens_keys:
            content += f"- {item}: {itens[item]}\n"

        return f"Produtos estocados por empresa: \n{content}"

    @classmethod
    def generate(cls, stock):
        return (
            f"{super().generate(stock)}\n"
            f"{cls.quantidade_de_estoque_correto(stock)}"
        )
