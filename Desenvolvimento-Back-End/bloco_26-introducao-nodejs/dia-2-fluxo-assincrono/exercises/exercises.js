// BACK-END/NodeJs/DIA_02/io-local/readFileSync.js

/*
Crie uma função que recebe três parâmetros retorna uma Promise .
Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
*/
// const num1 = Math.floor(Math.random() * 100 + 1)
// const num2 = Math.floor(Math.random() * 100 + 1) 
// const num3 = Math.floor(Math.random() * 100 + 1) 

// function calculaSoma(num1, num2, num3) {
//  return new Promise((resolve, reject) => {
//      if (typeof(num1 && num2 && num3) !== "number") {
//          reject(new Error("Informe apenas números"));
//      }
//      const result = ((num1 + num2) * num3)
//      if( result < 50 ){
//          reject(new Error('Valor muito baixo'))
//      }
//      resolve(result);
//  }) 
// }

// try{
// calculaSoma(num1, num2, num3)
// .then((resp) => console.log(resp))
// }catch(err){
//     console.error(err.message);
// }


/*
Escreva um código para consumir a função construída no exercício anterior.
Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: 
Math.floor(Math.random() * 100 + 1) .
*/

// const num1 = Math.floor(Math.random() * 100 + 1)
// const num2 = Math.floor(Math.random() * 100 + 1) 
// const num3 = Math.floor(Math.random() * 100 + 1) 

/*
Utilize then e catch para manipular a Promise retornada pela função:
Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
*/

// calculaSoma(num1, num2,num3)
// .then((res) => console.log(res))
// .catch((err) => console.log(err.message));

/*
3 - Reescreva o código do exercício anterior para que utilize async/await .
*/

// async function chamaFunction() {
//     try {
//        console.log(await calculaSoma(num1, num2, 'olá'));
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// chamaFunction()

/*
Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
*/


const simpsons = require('./simpsons.json');

// function imprimePersonagens() {
//     simpsons.map((personagem) => console.log(`${personagem.id} - ${personagem.name}`));
// }
// imprimePersonagens()
//========================================================================================
// function checarID(id) {
// return new Promise((resolve, reject) => {
//     const person = simpsons.find((personagem) => personagem.id == id)  
    
//     if( person ) {
//         resolve(person);
//     } else{
//     reject(new Error('id não encontrado'))
//     }
// })
// }

// async function chamaPerson() {
//    try {
//        console.log( await checarID());
//    } catch (error) {
//        console.log(error.message);
//    }
// }

// chamaPerson()

//===============================================================================

// const fs = require('fs').promises;

// const simpsonsArray = require('./simpsons.json');

// const simpsonsFilter = simpsonsArray.filter((person) => person.id != ('10' && '6'));


// fs.writeFile('./simpsons.json', JSON.stringify(simpsonsFilter)) 
//     .then(() => {
//         console.log('Arquivo escrito com sucesso!');    
//     })
//     .catch((err) => {
//         console.error(`Erro ao escrever o arquivo: ${err.message}`);
//     })

//================================================================
//Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

const fs = require('fs').promises;

const simpsonsArray = require('./simpsons.json');
const simpsonsFilter = simpsonsArray.filter((person) => Number(person.id) < 5);

fs.writeFile('./simpsonFamily.json',JSON.stringify(simpsonsFilter), {flag: 'wx'}) 
    .then(() => {
    console.log('Arquivo escrito com sucesso!');    
    })
    .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
    })