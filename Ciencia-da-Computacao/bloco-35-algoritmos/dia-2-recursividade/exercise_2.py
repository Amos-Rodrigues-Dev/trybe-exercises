# Transforme o algoritmo criado no exercise 1 em recursivo

def count_even(n):

    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + count_even(n - 1)
    else:
        return count_even(n - 1)


print(count_even(10))
