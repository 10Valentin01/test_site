// Функция для обработки нажатия на категории
function handleCategoryClick(event) {
    const categoryId = event.target.getAttribute("data-category");
    if (categoryId) {
        // Перенаправляем на страницу товаров с выбранной категорией
        window.location.href = `products.html?category=${categoryId}`;
    }
}

// Добавляем обработчик события для каждой категории
const categories = document.querySelectorAll(".category");
categories.forEach((category) => {
    category.addEventListener("click", handleCategoryClick);
});
