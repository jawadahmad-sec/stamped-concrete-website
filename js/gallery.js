const galleryImages = [
    { src: "images/gallery/work1.jpeg",  alt: "خراسانه مطبعه صبه دكورلته" },
    { src: "images/gallery/work2.jpeg",  alt: "صبه مطبعه صبه كنكريت" },
    { src: "images/gallery/work3.jpeg",  alt: "صبه مطبعه" },
    { src: "images/gallery/work4.jpeg",  alt: "قوالب وأشكال الخرسانة المطبوعة" },
    { src: "images/gallery/work5.jpeg",  alt: "صبه ترازو" },
    { src: "images/gallery/work6.jpeg",  alt: "أرضية الخرسانة المطبوعة الحجرية" },
    { src: "images/gallery/work7.jpeg",  alt: "ارضياته صبه مطبعه" },
    { src: "images/gallery/work8.jpeg",  alt: "صبه مطبعه صبه ديكوراته" },
    { src: "images/gallery/work9.jpeg",  alt: "صبه ديكوار صبه ارضياته" },
    { src: "images/gallery/work10.jpeg", alt: "صبه ابوكسي" },
    { src: "images/gallery/work11.jpeg", alt: "الخرسانة المطبوعة المنحنية" },
    { src: "images/gallery/work12.jpeg", alt: "صبه ديكوار صبه ارضياته" }
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