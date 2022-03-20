# [Exercício 1]: Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2 .


def minimum(numbers):
    smaller = numbers[0]
    for number in numbers:
        if number < smaller:
            smaller = number
    return smaller


# print(minimum([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))
# 🦜 Dica: a função min já existe nativamente no Python! Trabalhando em Python,
# sempre compensa pesquisar uma solução primeiro porque este brinquedo vem com
# todos os acessórios inclusos!
def minimum_other(numbers):
    return min(numbers)


# ou mesmo
# minimum_other = min

# [Exercício 2:] Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um triângulo retângulo com n asteriscos de base. Por exemplo,
# para n = 5 o triângulo terá 5 asteriscos na base:
def draw_triangle(n):
    for row in range(1, n + 1):
        print(row * "*")


# draw_triangle(5)

# [Exercício 3]: Crie uma função que receba um número inteiro N e retorne o
# somatório de todos os números de 1 até N . Por exemplo, para N = 5 , o valor
# esperado será 15 .
def summation(limit):
    total = 0
    for number in range(1, limit + 1):
        total += number
    return total


# print(summation(3))
# 🦜 Dica: a função sum já existe nativamente no Python!


def summation_other(limit):
    return sum(range(1, limit + 1))


# [Exercício 4:] Um posto está vendendo combustíveis com a seguinte tabela de
# descontos:
# Álcool:
#   - Até 20 litros, desconto de 3% por litro;
#   - Acima de 20 litros, desconto de 5% por litro.
# Gasolina:
#   - Até 20 litros, desconto de 4% por litro;
#   - Acima de 20 litros, desconto de 6% por litro.
def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total


print(fuel_price("G", 25))
