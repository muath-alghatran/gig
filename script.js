// تمرير ناعم عند الضغط على روابط القائمة
const links = document.querySelectorAll('.nav a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// رسالة بسيطة عند إرسال نموذج الحجز
const form = document.getElementById('bookingForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('تم استلام طلبك التجريبي بنجاح. هذا النموذج جزء من نموذج أولي لمشروع جامعي.');
    form.reset();
});