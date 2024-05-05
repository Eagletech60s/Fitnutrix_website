
var Pay = document.querySelector('.action');

// إضافة مستمع حدث النقر
Pay.addEventListener('click', function() {
  // توجيه المستخدم إلى الصفحة الأخرى عند النقر على الزر
  window.location.href = '/user/book Event.html'; // قم بتغيير 'reviews.html' إلى عنوان URL الفعلي للصفحة الأخرى
});