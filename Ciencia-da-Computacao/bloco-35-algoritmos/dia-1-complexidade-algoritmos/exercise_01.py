# Dado um array de números de tamanho n , escreva um algoritmo que retorna
# true se há no array um número duplicado e false caso contrário. Analise a
# solução abaixo e diga qual é a ordem de complexidade desse algoritmo para o
# melhor caso, pior caso e caso médio.


""" O algoritmo ordena o array independente de qualquer coisa, então
o seu pior caso, melhor caso e caso médio são, no mínimo,
complexidade do algoritmo de ordenação do Python. Vendo a documentação,
vemos que tal algoritmo é O(n log n). Dado que, depois de ordenar, no pior
caso passamos pelo array inteiro uma vez só, isso seria O(n). Assim sendo,
a complexidade é O(n*log(n) + n) o que, simplificando, fica O(n log n)"""


def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number'
    for number in numbers:
        if (previous_number == number):
            return True
        previous_number = number

    return False


def linear_search(numbers, n):
    for index, number in enumerate(numbers):
        if number == n:
            return index

    return -1


def linear_duplicate(numbers):
    for index, number in enumerate(numbers):
        try:
            if number == numbers[index + 1]:
                return bool(1)
        except IndexError:
            return bool(0)
            # raise IndexError("Excedeu numero de index")

    return bool(0)


print(linear_search([1, 2, 3, 4, 5], 4))

print(contains_duplicate([1, 2, 3, 4, 5]))

print(contains_duplicate([1, 2, 2, 4, 5]))

print(linear_duplicate([1, 2, 2, 4, 5]))

print(linear_duplicate([1, 2, 3, 4, 5]))
