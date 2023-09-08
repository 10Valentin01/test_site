// Пример данных для категории и товаров
const category1Products = [
    { id: 1, name: "Товар 1", price: 10.99 },
    { id: 2, name: "Товар 2", price: 19.99 },
    { id: 3, name: "Товар 3", price: 5.99 },
    // Добавьте другие товары
];

// Функция для отображения товаров категории
function showProducts(categoryId) {
    const productsContainer = document.querySelector(".products");
    productsContainer.innerHTML = ""; // Очищаем контейнер

    const categoryProducts = getCategoryProducts(categoryId);

    categoryProducts.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Добавить в корзину</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Функция для получения товаров категории
function getCategoryProducts(categoryId) {
    // Здесь вы можете выполнить запрос к вашей базе данных или использовать заранее заготовленные данные
    // В данном примере используется category1Products
    return category1Products;
}

// Функция для добавления товара в корзину (пока только вывод в консоль)
function addToCart(productId) {
    const product = category1Products.find((item) => item.id === productId);
    if (product) {
        console.log(`Товар "${product.name}" добавлен в корзину.`);
    }
}

// Добавляем обработчик события для кнопки категории
document.getElementById("category1").addEventListener("click", () => {
    showProducts(1); // Передаем ID категории (в данном случае 1)
    // Вызывайте функцию showProducts с нужным ID для других категорий
});

// По умолчанию при загрузке страницы показываем товары первой категории
// showProducts(1);
