var searchBox = document.querySelector(".search-box");
const searchButton = document.querySelector(".search-btn");
const recipeContainer = document.querySelector(".recipe-container");
const recipeDetails = document.querySelector(".recipe-details");
const recipeDetailsContent = document.querySelector(".recipe-details-content");
const closeBtn = document.querySelector(".recipe-close-btn");

 function getFood(Query) {
    var xhr = new XMLHttpRequest();
    recipeContainer.innerHTML="<h2>Getting Recipes.....</h2"
    try{

        // استخدام رابط API الصحيح مع القالب النصي
        xhr.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=${Query}`, true);
        xhr.onreadystatechange = async function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data =await JSON.parse(xhr.responseText);
                    console.log(data);
                    displayRecipe(data.meals); // تحديث عرض الوصفات
                } else {
                    // console.error("Error:", xhr.status, xhr.statusText);
                    recipeContainer.innerHTML = "<h2>Failed to fetch recipes. Please try again.</h2>";
                }
            }
        };
    
        xhr.send(); // إرسال الطلب
    }catch(error){
        recipeContainer.innerHTML = "<h3>Failed to fetch recipes. Please try again.</h3>";
    }
}

function displayRecipe(recipes) {

    recipeContainer.innerHTML = ""; // تفريغ المحتوى السابق

    if (recipes && recipes.length > 0) {
        recipes.forEach(recipe => {
            const recipeDiv = document.createElement("div");
    
            recipeDiv.classList.add("recipe-card");
            // إنشاء قالب HTML لعرض الوصفة مع الصورة
            recipeDiv.innerHTML = `
                <img src="${recipe.strMealThumb}" alt="${recipe.title}" />
                <h3>${recipe.strMeal}</h3>
                <p><span>${recipe.strArea }</span> Dish</p>
                <p>Belongs to <span>${recipe.strCategory }</span> Category </p>

            `;
            const button=document.createElement('button');
            button.textContent ="Viwe Recipe";
            recipeDiv.appendChild(button);
            button.addEventListener(
                'click',
                ()=>{
                     openRecipePopup(recipe);
                }
            );

            recipeContainer.appendChild(recipeDiv);
        });
    } else {
        recipeContainer.innerHTML = "<h3>No recipes found.</h3>";
    }
}

function openRecipePopup(meal){
    recipeDetailsContent.innerHTML=`
        <h2 class="recipeName">${meal.strMeal}</h2> 
        <h3>Ingredents:</h3>
        <ul class="ingredentList">${getIngredents(meal)}</ul>
        <div class="recipeInstractions">
            <h3>Instraction : </h3>
            <p>►${meal.strInstructions}</p>

        </div> 
    `;
    
    recipeDetailsContent.parentElement.style.display="block";
    recipeDetails.appendChild(recipeDetailsContent);


}
function getIngredents(meal){
    let ingrident=[];
    for(let i=1;i<=20;i++){
        if(meal[`strIngredient${i}`]){
            ingrident.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        }else{
            break;
        }
    }
    return ingrident.join('</li><li>');
}



searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const query = searchBox.value.trim(); // إزالة الفراغات الزائدة
    if (query) {
        getFood(query); // إرسال الاستعلام
    } else {
        recipeContainer.innerHTML = "<h2>Please enter a search term.</h2>";
        return
    }
    getFood(query);
});

closeBtn.addEventListener("click", () => {
    recipeDetailsContent.parentElement.style.display = "none";
    searchBox.value = "";
    searchBox.focus();
    // indow.location.reload();
    
});