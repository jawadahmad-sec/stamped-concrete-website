const galleryImages = [
    { src: "images/gallery/work1.jpeg", altAr: "خرسانة مطبوعة - صبة مروحة", altEn: "Stamped Concrete - Fan Pattern" },
    { src: "images/gallery/work2.jpeg", altAr: "خرسانة ملونة - تصميم موزاييك", altEn: "Colored Concrete - Mosaic Design" },
    { src: "images/gallery/work3.jpeg", altAr: "صبة ترازو فاخرة", altEn: "Luxury Terrazzo Finish" },
    { src: "images/gallery/work4.jpeg", altAr: "أرضية مشطبة ناعمة", altEn: "Smooth Trowel Finish Floor" },
    { src: "images/gallery/work5.jpeg", altAr: "ديكور ريزن بوند حديث", altEn: "Modern Resin Bond Decor" },
    { src: "images/gallery/work6.jpeg", altAr: "خرسانة مطبوعة ملونة", altEn: "Colored Stamped Concrete" },
    { src: "images/gallery/work7.jpeg", altAr: "خرسانة مطبوعة - نقشة مميزة", altEn: "Stamped Concrete - Distinctive Pattern" },
    { src: "images/gallery/work8.jpeg", altAr: "صبة ملونة بأشكال هندسية", altEn: "Colored Slab with Geometric Shapes" },
    { src: "images/gallery/work9.jpeg", altAr: "أرضية موزاييك فاخرة", altEn: "Luxurious Mosaic Flooring" },
    { src: "images/gallery/work10.jpeg", altAr: "تشطيب ريزن بوند عصري", altEn: "Contemporary Resin Bond Finish" },
    { src: "images/gallery/work11.jpeg", altAr: "تشطيب ريزن بوند عصري", altEn: "Contemporary Resin Bond Finish" },
    { src: "images/gallery/work12.jpeg", altAr: "تشطيب ريزن بوند عصري", altEn: "Contemporary Resin Bond Finish" }

];

const galleryContainer = document.getElementById("gallery");

galleryImages.forEach(img => {
    const div = document.createElement("div");
    div.className = "gallery-item";
    div.innerHTML = `<img src="${img.src}" alt="${img.altAr}" loading="lazy">`;
    div.onclick = () => openLightbox(img.src, img.altAr, img.altEn);
    galleryContainer.appendChild(div);
});

function openLightbox(src, altAr, altEn) {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = src;
    const captionDiv = document.getElementById("caption");
    captionDiv.innerHTML = `<span class="lang-ar">${altAr}</span><span class="lang-en">${altEn}</span>`;
    const isEnglish = document.documentElement.classList.contains('lang-en');
    captionDiv.querySelector('.lang-ar').style.display = isEnglish ? 'none' : '';
    captionDiv.querySelector('.lang-en').style.display = isEnglish ? '' : 'none';
}

document.querySelector(".close").onclick = function() {
    document.getElementById("lightbox").style.display = "none";
}

window.onclick = function(event) {
    const lightbox = document.getElementById("lightbox");
    if (event.target == lightbox) {
        lightbox.style.display = "none";
    }
}

// Update lightbox caption if language toggled while lightbox is open
document.getElementById('lang-toggle')?.addEventListener('click', function() {
    const caption = document.getElementById('caption');
    if (caption && document.getElementById("lightbox").style.display === "block") {
        const isEnglish = document.documentElement.classList.contains('lang-en');
        caption.querySelector('.lang-ar').style.display = isEnglish ? 'none' : '';
        caption.querySelector('.lang-en').style.display = isEnglish ? '' : 'none';
    }
});