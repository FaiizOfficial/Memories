// Fungsi untuk buka album & play lagu
document.getElementById('open-btn').addEventListener('click', function() {
    const coverPage = document.getElementById('cover-page');
    const albumPage = document.getElementById('album-page');
    const bgMusic = document.getElementById('bg-music');

    // Muter lagu
    bgMusic.play();

    // Efek transisi halus
    coverPage.style.opacity = '0';
    
    setTimeout(() => {
        coverPage.classList.add('hidden');
        albumPage.classList.remove('hidden');
        window.scrollTo(0, 0);
    }, 1000); 
});

// Inisialisasi Swiper (Efek Buku / Slider)
const swiper = new Swiper(".mySwiper", {
    effect: "slide", // Bisa diganti "cards" atau "coverflow" kalau mau lebih 3D
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
