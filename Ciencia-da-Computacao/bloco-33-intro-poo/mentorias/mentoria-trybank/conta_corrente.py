class Conta:
    def __init__(self, nome, numero, saldo=0):
        self.nome = nome
        self.numero = numero
        self.saldo = saldo

    def deposito(self, valor):
        self.saldo += valor

    def saque(self, valor):
        if self.saldo >= valor:
            self.saldo -= valor
        else:
            return "Valor Inválido"

    def get_saldo(self):
        return self.saldo


class ContaInvestimento(Conta):
    def __init__(self, nome, numero, saldo, taxa_de_juros):
        Conta.__init__(self, nome, numero, saldo)
        self.taxa_de_juros = taxa_de_juros


conta_trybank = ContaInvestimento("carol", 123, 1000, 0.12)


if __name__ == "__main__":
    conta_trybank.deposito(150)
    conta_trybank.saque(100)
    print(vars(conta_trybank))
