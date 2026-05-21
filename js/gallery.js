const galleryImages = [
    { src: "images/gallery/work1.jpeg", alt: "خرسانة مطبوعة - صبة مروحة" },
    { src: "images/gallery/work2.jpeg", alt: "خرسانة ملونة - تصميم موزاييك" },
    { src: "images/gallery/work3.jpeg", alt: "صبة ترازو فاخرة" },
    { src: "images/gallery/work4.jpeg", alt: "أرضية مشطبة ناعمة" },
    { src: "images/gallery/work5.jpeg", alt: "ديكور ريزن بوند حديث" },
    { src: "images/gallery/work6.jpeg", alt: "خرسانة مطبوعة ملونة" },
    { src: "images/gallery/work7.jpeg", alt: "خرسانة مطبوعة - نقشة مميزة" },
    { src: "images/gallery/work8.jpeg", alt: "صبة ملونة بأشكال هندسية" },
    { src: "images/gallery/work9.jpeg", alt: "أرضية موزاييك فاخرة" },
    { src: "images/gallery/work10.jpeg", alt: "تشطيب ريزن بوند عصري" },
    { src: "images/gallery/work11.jpeg", alt: "تشطيب ريزن بوند عصري" },
    { src: "images/gallery/work12.jpeg", alt: "تشطيب ريزن بوند عصري" }

];

const galleryContainer = document.getElementById("gallery");

galleryImages.forEach(img => {
    const div = document.createElement("div");
    div.className = "gallery-item";
    div.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy">`;
    div.onclick = () => openLightbox(img.src, img.alt);
    galleryContainer.appendChild(div);
});

function openLightbox(src, alt) {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = src;
    document.getElementById("caption").innerText = alt;
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