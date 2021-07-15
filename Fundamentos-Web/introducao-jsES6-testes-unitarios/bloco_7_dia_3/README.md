# EXERCÍCIO DO BLOCO 7 DIA 3

## Praticando a implementação de testes - Parte 1

Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.
Copie as funções já implementadas e desenvolva os testes. Separe as funções em arquivos para evitar qualquer tipo de problema.

1. A função sum(a, b) retorna a soma do parâmetro a com o b

* Teste se o retorno de sum(4, 5) é 9
* Teste se o retorno de sum(0, 0) é 0
* Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
* Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

* Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
* Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
* Verifique se o array passado por parâmetro não sofreu alterações
* Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
	
3. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array

* Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
* Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
* Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
* Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

4. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

* Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
* Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
* Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
* Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
* Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

5. Compare dois objetos para verificar se são idênticos ou não


## Praticando TDD - Parte 2

Nessa parte os exercícios estão divididos em dois grupos: primeiro, você vai escrever código baseado nos testes. Depois você lerá um código e o que ele tem que trazer de resposta. A partir disso, você escreverá testes e os usará de base para alterar o código. Como assim? Bem, vamos passo a passo!

Escrevendo código para testes
Dados os casos de testes abaixo, escreva as funções de forma a passar nos testes. É importante nunca alterar os testes ou as variáveis já escritas no código :
Copie os testes já implementados e desenvolva as funções. Separe as funções em arquivos para evitar qualquer tipo de problema.

1. Escreva a função addOne para passar nos testes já implementados.

2. Escreva a função wordLengths para passar nos testes já implementados.

3. Escreva a função sumAllNumbers para passar nos testes já implementados.

4. Escreva a função findTheNeedle para passar nos testes já implementados.


## Reescrevendo funções utilizando TDD - Parte 3

Agora mudamos um pouco: temos uma função pronta (e feita de forma errada, ou seja, sem funcionar direito), os parâmetros que devem ser passados a ela e a resposta esperada. Escreva testes de modo a entender e testar o comportamento da função e, depois, altere-a para que passe nos testes. Use os casos de teste acima como inspiração, se tiver dúvidas!
| Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo a função aos poucos.

1. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

2. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

3. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.


4. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

