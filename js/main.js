// Initialize AOS (Animate On Scroll)
AOS.init({ duration: 800, once: true });

// Initialize Swiper hero slider
const swiper = new Swiper('.hero-slider', {
    loop: true,
    autoplay: { delay: 4000 },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});

// Language Toggle
const langBtn = document.getElementById('lang-toggle');
const html = document.documentElement;
if (langBtn) {
    langBtn.addEventListener('click', () => {
        const isEn = html.classList.contains('lang-en');
        if (isEn) {
            html.classList.remove('lang-en');
            html.setAttribute('lang', 'ar');
            html.setAttribute('dir', 'rtl');
            langBtn.textContent = 'English';
            localStorage.setItem('siteLang', 'ar');
        } else {
            html.classList.add('lang-en');
            html.setAttribute('lang', 'en');
            html.setAttribute('dir', 'ltr');
            langBtn.textContent = 'عربي';
            localStorage.setItem('siteLang', 'en');
        }
    });
    // Set initial button text based on current language
    const currentLang = html.classList.contains('lang-en') ? 'en' : 'ar';
    langBtn.textContent = currentLang === 'en' ? 'عربي' : 'English';
}

// Animated Counters (bulletproof)
function animateCounter(el, start, end, duration) {
    let current = start;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    const timer = setInterval(() => {
        current += 1;
        el.textContent = current;
        if (current >= end) {
            el.textContent = end;
            clearInterval(timer);
        }
    }, stepTime);
}

// Observe each counter element individually
const counterElements = document.querySelectorAll('.counter-number');
const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const finalValue = parseInt(el.getAttribute('data-target'));
            if (finalValue) {
                animateCounter(el, 0, finalValue, 2000);
            }
            observer.unobserve(el); // only animate once
        }
    });
}, { threshold: 0.5 });

counterElements.forEach(el => {
    counterObserver.observe(el);
});