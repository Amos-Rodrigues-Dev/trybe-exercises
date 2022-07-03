const urlProduct = 'https://api.mercadolibre.com/sites/MLB/search?q=$';
const urlProductItem = 'https://api.mercadolibre.com/items/';
const cartItemsList = () => document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function clearLocalStorage() {
  const productValue = Object.entries(localStorage);
  productValue.forEach(([key, value]) => {
    if (key.substr(-13) === value.substr(5, 13)) localStorage.removeItem(key);    
  });
}

function recreateLocalStorage() {
  const cartList = Object.values(cartItemsList().children);
  cartList.forEach((list) => {
    const itemValue = list.innerText.substr(5, 13);
     localStorage[`${localStorage.length + 1}${itemValue}`] = list.innerText;
  });
}

async function sumItemsCart() {
  const cartItems = Object.values(cartItemsList().children);
  const totalPrice = document.querySelector('.total-price');
  let total = 0;
  await cartItems.forEach((cartItem) => {
    const itemPrice = parseFloat(cartItem.innerText.split('$')[1]);
    total += itemPrice;
  });
  totalPrice.innerText = (Math.round(total * 100) / 100).toFixed(2);
}

function cartItemClickListener(event) {
  event.target.remove();
  clearLocalStorage();
  recreateLocalStorage();
  sumItemsCart();
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  localStorage[`${localStorage.length + 1}${sku}`] = li.innerText;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function hiddenLoading() {
  const loading = await document.querySelector('.loading');
  loading.remove();
}

async function fetchEndpoint(url, search) {
  const response = await fetch(`${url}${search}`);
  const result = await response.json();
    return result;
  
}

async function addProductCart(event) {
  const skuItem = getSkuFromProductItem(event.target.parentElement);
  const productItem = await fetchEndpoint(urlProductItem, skuItem);
  const itemElement = createCartItemElement(productItem);
  cartItemsList().appendChild(itemElement);
  sumItemsCart();
}

async function createProducts(search = 'computador') {
  const products = await fetchEndpoint(urlProduct, search);
  products.results.forEach((product) => {   
    const newSection = createProductItemElement(product);
    newSection.querySelector('button.item__add').addEventListener('click', addProductCart);
    document.querySelector('.items').appendChild(newSection);
  });
  await hiddenLoading();
}

function reloadLocalStorage() {
  const productValue = Object.entries(localStorage);
  productValue.forEach(([key, value]) => {
    if (key.substr(-13) === value.substr(5, 13)) {
      const itemLi = document.createElement('li');
      itemLi.className = 'cart__item';
      itemLi.innerText = value;
      itemLi.addEventListener('click', cartItemClickListener);
      cartItemsList().appendChild(itemLi);
      sumItemsCart();
    }
  });
}

function clearCart() {
  const btnEmptyCart = document.querySelector('.empty-cart');
  btnEmptyCart.addEventListener('click', () => {
    cartItemsList().innerHTML = '';
    sumItemsCart();
    clearLocalStorage();
  });
}

function searchProduct() {
  document.getElementById('button-search').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.items').innerHTML = '';
    const inputSearch = document.getElementById('input-search').value;
    (inputSearch !== '') ? createProducts(inputSearch) : createProducts();
  })
}

window.onload = async () => {  
  try {
    await createProducts();
    await searchProduct();
    await reloadLocalStorage();
    await clearCart();
  } catch (error) {
    alert('Error: url inválida!');
  }
};
