# Faça uma função que retorne o enésimo número da sequência de Fibonacci.
def fibonaci(n): 
    sequence = [0, 1]
    for x in range(n):
        next = sequence[-1] + sequence[-2]
        sequence.append(next)
    return sequence[-1]
# Na forma iterativa, calculamos todos os números da sequência até o número
# desejado.


def fibonaci_1(n):
    if n < 2:
        return n
    else:
        return fibonaci_1(n-1) + fibonaci_1(n-2)
# Na forma recursiva, definimos o caso trivial ou condição de parada como os
# dois primeiros números, cuja posição na lista por acaso é igual à seu valor.
# Em seguida, definimos a lógica recursiva: Um número é igual à soma dos dois
# numeros que o precedem na sequência.


# Faça uma função que recebe uma lista, e retorna-a na ordem reversa.
def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list


def reverse_r(list):
    if len(list) < 2:
        return list
    else:
        return reverse_r(list[1:]) + [list[0]]
