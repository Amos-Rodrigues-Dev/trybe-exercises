def countdown(n):  # nome da função e parâmetro
    if n == 0:  # condição de parada
        print('FIM!')
    else:
        print(n)
        countdown(n - 1)  # chamada de si mesma com um novo valor


countdown(5)


def factorial_recursive(n):  # nome da função e parâmetro
    if n == 1:  # condição de parada
        return 1

    else:
        return n * factorial_recursive(n - 1)
        # chamada de si mesma com um novo valor


factorial_recursive(5)


# Faça um algoritmo recursivo de soma. Esse algoritmo deve receber um número 
# de parâmetro e deve somar todos os números antecessores
def sum_recursive(n):
    if n == 0:
        return 0
    else:
        return n + sum_recursive(n - 1)


print(sum_recursive(4))
