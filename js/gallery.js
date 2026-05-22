const galleryImages = [
    { src: "images/gallery/work1.jpeg",  alt: "بلاط ملون" },
    { src: "images/gallery/work2.jpeg",  alt: "بلاط خشابي" },
    { src: "images/gallery/work3.jpeg",  alt: "صبة مطبوعة" },
    { src: "images/gallery/work4.jpeg",  alt: "ديكورات جدارية" },
    { src: "images/gallery/work5.jpeg",  alt: "تيرازو" },
    { src: "images/gallery/work6.jpeg",  alt: "إنترلوك" },
    { src: "images/gallery/work7.jpeg",  alt: "بلاط رصيف" },
    { src: "images/gallery/work8.jpeg",  alt: "إنترلوك أحمر" },
    { src: "images/gallery/work9.jpeg",  alt: "ممر حدائق" },
    { src: "images/gallery/work10.jpeg", alt: "ممر صناعي" },
    { src: "images/gallery/work11.jpeg", alt: "حجر متداخل" },
    { src: "images/gallery/work12.jpeg", alt: "بلاط مسابح" }
];

const galleryContainer = document.getElementById("gallery");
if (galleryContainer) {
    galleryImages.forEach(img => {
        const div = document.createElement("div");
        div.className = "gallery-item";
        div.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy">`;
        div.onclick = () => openLightbox(img.src, img.alt);
        galleryContainer.appendChild(div);
    });
}

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