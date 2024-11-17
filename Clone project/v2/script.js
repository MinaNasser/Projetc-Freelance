window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// script.js
import { db, collection, addDoc, getDocs, deleteDoc, doc } from './firebase.js';

// إضافة فيلم إلى المفضلة
async function addToFavorites(title, imageUrl) {
    try {
        // إضافة الفيلم إلى مجموعة "favorites" في Firestore
        await addDoc(collection(db, 'favorites'), {
            title: title,
            imageUrl: imageUrl
        });
        alert(`${title} has been added to your favorites!`);
        loadFavorites(); // إعادة تحميل المفضلات بعد الإضافة
    } catch (e) {
        console.error("Error adding favorite: ", e);
    }
}

// جلب الأفلام المفضلة من Firestore وعرضها في صفحة المفضلة
async function loadFavorites() {
    const querySnapshot = await getDocs(collection(db, 'favorites'));
    const favoritesContainer = document.getElementById('favorites-list');
    favoritesContainer.innerHTML = ''; // امسح المحتوى القديم

    querySnapshot.forEach((doc) => {
        const favorite = doc.data();
        const movieElement = document.createElement('div');
        movieElement.classList.add('favorite-item');
        movieElement.innerHTML = `
            <img src="${favorite.imageUrl}" alt="${favorite.title}" />
            <h3>${favorite.title}</h3>
            <button onclick="removeFromFavorites('${doc.id}')">Remove</button>
        `;
        favoritesContainer.appendChild(movieElement);
    });
}

// إزالة فيلم من المفضلة
async function removeFromFavorites(favoriteId) {
    try {
        await deleteDoc(doc(db, 'favorites', favoriteId));
        alert('Movie removed from favorites!');
        loadFavorites(); // إعادة تحميل المفضلات بعد الحذف
    } catch (e) {
        console.error("Error removing favorite: ", e);
    }
}

// يمكنك استدعاء `loadFavorites()` عند تحميل الصفحة لعرض المفضلات
window.onload = loadFavorites;
