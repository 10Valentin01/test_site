// const cart = {
//     items: [], // Массив товаров в корзине
//     addItem: function (product) {
//         // Функция для добавления товара в корзину
//         // Добавьте товар в массив items
//     },
//     increaseQuantity: function (product) {
//         // Функция для увеличения количества товара в корзине
//         // Увеличьте количество товара в массиве items
//     },
//     getTotalPrice: function () {
//         // Функция для вычисления общей стоимости товаров в корзине
//         // Пройдитесь по массиву items и сложите стоимость каждого товара
//     },
// };

// document.querySelectorAll(".add-to-cart-button").forEach((button, index) => {
//     button.addEventListener("click", () => {
//         const product = products[index]; // Получите товар из массива товаров, например, по индексу
//         cart.addItem(product); // Добавьте товар в корзину
//         // Обновите отображение количества товаров в корзине
//     });
// });

// document.querySelectorAll(".increase-quantity-button").forEach((button, index) => {
//     button.addEventListener("click", () => {
//         const product = cart.items[index]; // Получите товар из корзины по индексу
//         cart.increaseQuantity(product); // Увеличьте количество товара в корзине
//         // Обновите отображение количества товаров и общей стоимости в корзине
//     });
// });


// Функция для загрузки товаров из JSON-файла
function loadProducts(category) {
    fetch('products.json') // Загрузка JSON-файла
        .then(response => response.json()) // Преобразование в объект JavaScript
        .then(data => {
            const categoryData = data.find(cat => cat.category === category);
            if (categoryData) {
                displayProducts(categoryData.products);
                console.log(categoryData);
            }
        })
        .catch(error => console.error('Ошибка загрузки товаров:', error));
}

// Функция для отображения товаров на странице
function displayProducts(products) {
    const productsContainer = document.querySelector(".products-wrapper");
    productsContainer.innerHTML = ""; // Очищаем контейнер

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>
                <img src="logo.jpg" alt="Маленькая картинка" class="small-image">
                <span>${product.name}</span>
            </p>
            <p class=bold>Цена: ${product.price.toFixed(2)}₽</p>
            <button class="add-to-cart-button">Добавить в корзину</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Получаем параметр category из URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

if (category) {
    loadProducts(category);
}
