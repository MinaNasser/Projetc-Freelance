var searchBox = document.querySelector(".search-box");
const searchButton = document.querySelector(".search-btn");
const recipeContainer = document.querySelector(".recipe-container");

function getFood(Query) {
    var xhr = new XMLHttpRequest();
    // استخدام رابط API الصحيح مع القالب النصي
    xhr.open('GET', `https://api.spoonacular.com/recipes/complexSearch?query=${Query}`, true);

    // إضافة مفتاح API إلى الترويسات
    xhr.setRequestHeader('X-Api-Key', '65fce24725724a15998a27fad7e939d2');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                console.log("Data:", data);
                displayRecipe(data.results); // تحديث عرض الوصفات
            } else {
                console.error("Error:", xhr.status, xhr.statusText);
                recipeContainer.innerHTML = "<p>Failed to fetch recipes. Please try again.</p>";
            }
        }
    };

    xhr.send(); // إرسال الطلب
}

function displayRecipe(recipes) {
    recipeContainer.innerHTML = ""; // تفريغ المحتوى السابق

    if (recipes && recipes.length > 0) {
        recipes.forEach(recipe => {
            const recipeDiv = document.createElement("div");
            recipeDiv.classList.add("recipe");

            // إنشاء قالب HTML لعرض الوصفة مع الصورة
            recipeDiv.innerHTML = `
                <h2>${recipe.title}</h2>
                <img src="${recipe.image}" alt="${recipe.title}" />
            `;

            recipeContainer.appendChild(recipeDiv);
        });
    } else {
        recipeContainer.innerHTML = "<p>No recipes found.</p>";
    }
}



searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const query = searchBox.value.trim(); // إزالة الفراغات الزائدة
    if (query) {
        getFood(query); // إرسال الاستعلام
    } else {
        recipeContainer.innerHTML = "<p>Please enter a search term.</p>";
    }
});

