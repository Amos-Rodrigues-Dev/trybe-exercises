"""Perceba que temos uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""
import sys


class Array:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)

    def remove(self, index):
        # removeremos o item, retornando-o
        return self.data.pop(index)

    def update(self, index, value):
        self.data[index] = value


# vamos inicializar e preencher uma estrutura de dados array
array = Array()
array.set(0, "Felipe")
array.set(1, "Ana")
array.set(2, "Shirley")
array.set(3, "Miguel")

# para acessar um elemento do array, utilizamos seu índice
print(array.get(0))  # saída: Felipe
print(array.get(2))  # saída: Shirley
print("-----")

# sys.getsizeof retorna o tamanho da lista em bytes
array_memory_size = sys.getsizeof(array.data)
print(f"{array_memory_size} bytes")
print("-----")

array.set(3, "Giovana")
# como um espaço adicional é reservado o valor não é modificado
array_memory_size = sys.getsizeof(array.data)
print(f"{array_memory_size} bytes")  # 88
print("-----")

array.set(4, "Alberto")
array.set(5, "Marta")
array.set(6, "Túlio")
array.set(7, "Michelle")
array_memory_size = sys.getsizeof(array.data)
print(f"{array_memory_size} bytes")  # 120
print("-----")

# podemos iterar sobre seus elementos da seguinte maneira
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1

print(array.get(2))


# ... Até agora inserimos somente ao final do nosso array. Mas e se
# precisarmos adicionar um elemento no início, ou no meio?
# array = Array()

array.set(0, "Marcos")
array.set(1, "Patrícia")
# print(array), internamente chama o método array.__str__() que implementamos
print(array)  # saída: ["Marcos", "Patrícia"]

# inserindo no começo do array
array.set(0, "Valeria")
print(array)  # saída: ["Valeria", "Marcos", "Patrícia"]

# inserindo em uma posição intermediária
array.set(1, "Miguel")
print(array)  # saída: ['Valeria', 'Miguel', 'Marcos', 'Patrícia']


# Quando inserimos um novo elemento no início do array, todos os elementos já
# existentes são deslocados à direita, tendo seu índice modificado em 1.
# Análogo a isto, quando adicionamos em uma posição intermediária, todos os
# elementos com índices posteriores ao inserido serão movidos em uma posição.
array.set(0, "Marcos")
array.set(1, "Patrícia")
print(array)  # saída: ['Marcos', 'Patrícia']

array.remove(0)  # retorna a string "Marcos"
print(array)  # saída: ['Patrícia']

# Que tal adicionarmos um método update que atualiza o valor a partir de um
# índice?
# 🐦 A assinatura deve ser def update(self, index, value):
array.update(0, "Amós")
print(array)
