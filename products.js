// Получаем параметр category из URL
const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get("category");

// Примерные данные для товаров
const productsData = [
    { id: 1, name: "Товар 1", price: 10.99, categoryId: 1 },
    { id: 2, name: "Товар 2", price: 19.99, categoryId: 2 },
    { id: 3, name: "Товар 3", price: 5.99, categoryId: 1 },
    // Добавьте другие товары с указанием категорий
];

// Функция для отображения товаров выбранной категории
function displayProducts() {
    const productsContainer = document.querySelector(".products");
    productsContainer.innerHTML = ""; // Очищаем контейнер

    // Фильтруем товары по выбранной категории
    const filteredProducts = productsData.filter((product) => product.categoryId === parseInt(categoryId));

    filteredProducts.forEach((product) => {
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

// Функция для добавления товара в корзину (пока только вывод в консоль)
function addToCart(productId) {
    const product = productsData.find((item) => item.id === productId);
    if (product) {
        console.log(`Товар "${product.name}" добавлен в корзину.`);
    }
}

// Загружаем и отображаем товары выбранной категории
displayProducts();
