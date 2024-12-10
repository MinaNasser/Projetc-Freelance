// تحديد العناصر
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalOverlay = document.querySelector('[data-modal-overlay]');

// إغلاق النافذة عند الضغط على زر الإغلاق
modalCloseBtn.addEventListener('click', () => {
  modal.classList.remove('is-active');
});

// إغلاق النافذة عند الضغط على الخلفية المظللة
modalOverlay.addEventListener('click', () => {
  modal.classList.remove('is-active');
});

// اختياري: طريقة لفتح النافذة
// modal.classList.add('is-active'); // لإظهار النافذة (عند الحاجة)