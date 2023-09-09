// Функция для перехода на страницу товаров с выбранной категорией
function redirectToCategory(category) {
    // Формируем URL для перехода на страницу товаров, передавая выбранную категорию
    const url = `products.html?category=${category}`;
    window.location.href = url;
    console.log(categoryData);
}
