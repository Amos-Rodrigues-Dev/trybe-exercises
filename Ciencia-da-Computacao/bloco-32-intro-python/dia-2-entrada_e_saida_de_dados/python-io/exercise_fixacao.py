# [Exercício 1:] Faça um programa que solicite o nome de uma pessoa usuária e
# imprima-o na vertical.
nome = input("Digite seu nome: ")

for char in nome:
    print(char)

# [Exercício 2:]Escreva um programa que receba vários números naturais e
# calcule a soma desses valores. Caso algum valor da entrada seja inválido,
# por exemplo uma letra, uma mensagem deve ser exibida, na saída de erros, no
# seguinte formato: "Erro ao somar valores, {valor} é um valor inválido". Ao
# final, você deve imprimir a soma dos valores válidos.
# 🦜 Receba os valores em um mesmo input , solicitando à pessoa usuária que
# separe-os com um espaço. Receba os valores no formato str e utilize o método
# split para pegar cada valor separado. O método isdigit , embutido no tipo
# str, pode ser utilizado para verificar se a string corresponde a um número
# natural.
input_number = input("Digite números naturais separados por espaços: ")

numsArr = input_number.split(" ")

total = 0
for num in numsArr:
    if num.isdigit():
        total += int(num)
    else:
        print(f"Erro ao somar valores, {num} é um valor inválido")
print("A soma dos numeros válidos é: ", total)
# if not num.isdigit():
#     print(f"Erro ao somar valores, {num} não é um dígito.")
