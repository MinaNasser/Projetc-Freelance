// JavaScript to Toggle Language
function setLanguage(lang) {
    document.documentElement.lang = lang;
    const elementsEn = document.querySelectorAll('.en');
    const elementsAr = document.querySelectorAll('.ar');
    
    if (lang === 'en') {
        elementsEn.forEach(el => el.style.display = 'block');
        elementsAr.forEach(el => el.style.display = 'none');
        document.body.style.direction = 'ltr';
        document.getElementById('languageButton').textContent = 'العربية';
        document.getElementById('languageButton').classList.remove('left');
        document.getElementById('languageButton').classList.add('right');
    } else {
        elementsEn.forEach(el => el.style.display = 'none');
        elementsAr.forEach(el => el.style.display = 'block');
        document.body.style.direction = 'rtl';
        document.getElementById('languageButton').textContent = 'English';
        document.getElementById('languageButton').classList.remove('right');
        document.getElementById('languageButton').classList.add('left');
    }
}

function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    setLanguage(currentLang === 'en' ? 'ar' : 'en');
}

// Set default language to English
document.addEventListener("DOMContentLoaded", function() {
    setLanguage('en'); // Call setLanguage when DOM is fully loaded

    // Add event listener to the button
    document.getElementById('languageButton').addEventListener('click', toggleLanguage);
});
