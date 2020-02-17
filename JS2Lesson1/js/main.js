let products = [
    {id: 1, title: 'Notebook', price: 20000, priceOld: 25000, descr: 'Мощный ноутбук Ziomi i9 1Tb'},
    {id: 2, title: 'Mouse', price: 1500, priceOld: 2000, descr: 'Беспроводная hightech мышь Wenius'},
    {id: 3, title: 'Keyboard', price: 5000, priceOld: 7000, descr: 'Клавиатура с подсветкой неон'},
    {id: 4, title: 'Gamepad', price: 4500, priceOld: 5000, descr: 'Стильный Gamepad Daosung'},
    {id: 5, title: 'Adapter', price: 1100, priceOld: 1250, descr: 'адаптер для мобильных устройств'},
    {id: 6, title: 'USB wire', price: 200, priceOld: 300, descr: 'USB переходник для всех типов устройств'},
];

const renderProduct = (title, price, priceOld, descr) => {
    return `<div class="product-item">
                <h3 class="TitleH">${title}</h3>
                <p class="priceP">${price}&nbsp;<span class="priceOld">${priceOld}</span></p>
                <p class="descrCart">${descr}</p>
                <button class="by-btn">Добавить в корзину</button>
            </div>`;
};

const renderProducts = (list) => {
    const productList = list.map((item) => renderProduct(item.title, item.price, item.priceOld, item.descr)).join('');
    document.querySelector('.products').innerHTML = productList;
};

renderProducts(products);
