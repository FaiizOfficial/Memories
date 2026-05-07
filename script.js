// 1. Ambil semua elemen yang dibutuhin dari HTML
const coverPage = document.getElementById('cover-page');
const albumPage = document.getElementById('album-page');
const bgMusic = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-control');
const musicIcon = document.getElementById('music-icon');

// Elemen tambahan buat Auto-Slide
const autoBtn = document.getElementById('auto-btn');
const autoIcon = document.getElementById('auto-icon');
let isAutoPlaying = false; // Status awal: mati

// 2. Fungsi untuk BUKA ALBUM & PLAY LAGU
document.getElementById('open-btn').addEventListener('click', function() {
    
    bgMusic.play();
    
    // Munculin DUA tombol melayang (Musik & Auto-Slide)
    musicBtn.classList.remove('hidden');
    autoBtn.classList.remove('hidden');
    musicIcon.classList.add('playing');

    coverPage.style.opacity = '0';
    
    setTimeout(() => {
        coverPage.classList.add('hidden');
        albumPage.classList.remove('hidden');
        window.scrollTo(0, 0); 
    }, 1000); 
});

// 3. Fungsi buat tombol PLAY / PAUSE musik
musicBtn.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicIcon.classList.add('playing'); 
    } else {
        bgMusic.pause();
        musicIcon.classList.remove('playing'); 
    }
});

// 4. Inisialisasi Swiper dengan Fitur AUTOPLAY
const swiper = new Swiper(".mySwiper", {
    effect: "slide", 
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000, // 3000 milidetik = 3 detik per foto
        disableOnInteraction: false, // Biar tetep jalan otomatis walau abis di-klik manual
    }
});

// Matiin autoplay di awal biar nggak jalan sebelum album dibuka / tombol diklik
swiper.autoplay.stop();

// 5. Fungsi buat tombol AUTO SLIDE (Play / Pause Slideshow)
autoBtn.addEventListener('click', function() {
    if (isAutoPlaying) {
        // Kalau lagi jalan, kita berhentiin
        swiper.autoplay.stop();
        autoIcon.innerText = '▶️'; // Ubah ikon jadi Play
        isAutoPlaying = false;
    } else {
        // Kalau lagi mati, kita jalanin
        swiper.autoplay.start();
        autoIcon.innerText = '⏸️'; // Ubah ikon jadi Pause
        isAutoPlaying = true;
    }
});
