
          
const cart = [
  {
    name: "laptop",
    price: 1000,
    quantity: 2,
    id: 3,
  },
  {
    name: "desktop",
    price: 1500,
    quantity: 1,
    id: 2,
  },
  {
    name: "phone",
    price: 500,
    quantity: 3,
    id: 1,
  },
];

// escreva seu código aqui

            

            
const totalCart = cart.reduce((accumulator, product) => accumulator + product.price * product.quantity);

          

          

// fim do código

console.log(totalCart);

        