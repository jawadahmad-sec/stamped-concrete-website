// ========== Google Analytics (GA4) ==========
(function() {
    var script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XZWLTLCJEX';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-XZWLTLCJEX');
})();

// ========== Hamburger menu ==========
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// ========== AOS init ==========
AOS.init({ duration: 800, once: true });

// ========== Swiper slider ==========
const swiper = new Swiper('.hero-slider', {
    loop: true,
    autoplay: { delay: 4000 },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});

// ========== Language Toggle ==========
const langBtn = document.getElementById('lang-toggle');
const html = document.documentElement;

function applyLanguage(lang) {
    if (lang === 'en') {
        html.classList.add('lang-en');
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        if (langBtn) langBtn.textContent = 'عربي';
        localStorage.setItem('siteLang', 'en');
    } else {
        html.classList.remove('lang-en');
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        if (langBtn) langBtn.textContent = 'English';
        localStorage.setItem('siteLang', 'ar');
    }
}

// Initial language
(function() {
    const savedLang = localStorage.getItem('siteLang') || 'ar';
    applyLanguage(savedLang);
})();

if (langBtn) {
    langBtn.addEventListener('click', function() {
        const currentLang = html.getAttribute('lang');
        applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
}

// ========== Animated counters ==========
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

const counterElements = document.querySelectorAll('.counter-number');
const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const finalValue = parseInt(el.getAttribute('data-target'));
            if (finalValue) {
                animateCounter(el, 0, finalValue, 2000);
            }
            observer.unobserve(el);
        }
    });
}, { threshold: 0.5 });

counterElements.forEach(el => {
    counterObserver.observe(el);
});