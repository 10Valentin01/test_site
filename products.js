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
    const productsContainer = document.querySelector(".products");
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
            <p>${product.price.toFixed(2)}₽</p>
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
