import { db, collection, getDocs } from './firebase.js';

// دالة لعرض الأفلام من Firebase
async function loadFavoritesFromFirebase() {
    try {
        const querySnapshot = await getDocs(collection(db, 'favorites'));
        const favoritesContainer = document.getElementById('favorites-list');
        favoritesContainer.innerHTML = ''; // إفراغ المحتوى القديم

        querySnapshot.forEach((doc) => {
            const movie = doc.data();
            const movieElement = `
                <div class="movie-card">
                    <img src="${movie.imageUrl}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <button onclick="removeFromFavorites('${doc.id}')">Remove</button>
                </div>`;
            favoritesContainer.innerHTML += movieElement;
        });
    } catch (e) {
        console.error("Error loading favorites from Firebase: ", e);
    }
}


// يمكنك اختيار إما Firebase أو LocalStorage حسب الحاجة
document.addEventListener('DOMContentLoaded', () => {
    // جلب الأفلام المفضلة من Firebase
    loadFavoritesFromFirebase(); // أو استخدم هذه الدالة إذا كنت تريد فقط من Firebase

    // أو يمكنك جلب الأفلام من LocalStorage:
    // loadFavoritesFromLocalStorage(); // استخدم هذه بدلاً من الأولى إذا كنت تريد من LocalStorage
});

// دالة لإزالة فيلم من المفضلة
async function removeFromFavorites(id) {
    try {
        await deleteDoc(doc(db, 'favorites', id));
        alert('Movie removed from favorites!');
        loadFavoritesFromFirebase(); // إعادة تحميل الأفلام بعد الحذف من Firebase
    } catch (e) {
        console.error("Error removing document: ", e);
    }
}


function addToFavorites(movieTitle, movieImage) {
    // الحصول على القائمة من LocalStorage أو إنشاء قائمة فارغة
    const myList = JSON.parse(localStorage.getItem('myList')) || [];
    const movie = { title: movieTitle, image: movieImage };

    // التحقق من أن الفيلم غير مضاف مسبقًا
    const isAlreadyAdded = myList.some(item => item.title === movieTitle);
    if (!isAlreadyAdded) {
        myList.push(movie);
        localStorage.setItem('mylist', JSON.stringify(myList));  // تخزين القائمة المحدثة
        alert(`${movieTitle} has been added to your list!`);
    } else {
        alert(`${movieTitle} is already in your list.`);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const myList = JSON.parse(localStorage.getItem('mylist')) || [];
    const listContainer = document.getElementById('my-list');
    
    if (myList.length > 0) {
        myList.forEach(movie => {
            const movieCard = `
                <div class="movie-card">
                    <img src="${movie.image}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                </div>`;
            listContainer.innerHTML += movieCard;
        });
    } else {
        listContainer.innerHTML = '<p>Your list is empty.</p>';
    }
});