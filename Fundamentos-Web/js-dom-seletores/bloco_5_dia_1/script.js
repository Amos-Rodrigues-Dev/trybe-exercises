
// let msg = document.getElementsByTagName("p");

// for (let i in msg) {
//   msg[i].style.textTransform = "uppercase";

// }

function insereTexto() {
  let aux = document.getElementsByTagName("p");
  aux[0].innerText = "Desenvolvendo Aplicativos Web!!";
}
insereTexto();

function alteraFundoMain() {
  let aux = document.getElementsByClassName("main-content");
  aux[0].style.backgroundColor = "rgb(76, 164, 109)";
}
alteraFundoMain();

function alteraFuncoCenter() {
  let aux = document.getElementsByClassName("center-content");
  aux[0].style.backgroundColor = "white";
}
alteraFuncoCenter();

function alterTextoH1() {
  let aux = document.getElementsByTagName("h1");
  aux [0].innerText = "Exercício 5.1 - JavaScript";
}
alterTextoH1();

function maiusculo() {
  let aux = document.getElementsByTagName("p");
  for (let key in aux) {
    aux[key].style.textTransform = "uppercase";
  }
}
maiusculo();

function exibeConteudo() {
  let aux = document.getElementsByTagName('p');
  for (let key in aux) {
    console.log(aux[key].innerHTML); 
  }
}
exibeConteudo();
