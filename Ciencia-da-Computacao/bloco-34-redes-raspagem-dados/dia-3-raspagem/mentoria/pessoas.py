class ListaPessoas:
    def __init__(self):
        self.data = []

    def insert(self, pessoa):
        self.data.append(pessoa)


class PessoaFisica:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"PessoaFisica(nome={self.name})"

    def __bool__(self):
        return bool(len(self.name))

    def __add__(self, other):
        result = ListaPessoas()
        result.insert(self)
        result.insert(other)
        return result

    def __len__(self):
        return len(self.name)

    def __eq__(self, other):
        return self.name == other.name


if __name__ == "__main__":
    carol = PessoaFisica("Maria Carolina")
    leticia = PessoaFisica("Leticia Castro")

    if carol:
        print(carol + leticia)
