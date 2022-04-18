# Crie um algoritmo não recursivo para contar quantos números pares existem em
# uma sequência numérica (1 a n).


def count_even(n):
    num = 0
    for item in range(2, n + 1):
        if item % 2 == 0:
            num += 1
    return num


print(count_even(10))
