// 1. Ambil semua elemen yang dibutuhin dari HTML
const coverPage = document.getElementById('cover-page');
const albumPage = document.getElementById('album-page');
const bgMusic = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-control');
const musicIcon = document.getElementById('music-icon');

// 2. Fungsi untuk BUKA ALBUM & PLAY LAGU pas tombol di cover diklik
document.getElementById('open-btn').addEventListener('click', function() {
    
    // Muter lagu
    bgMusic.play();
    
    // Munculin tombol musik melayang & kasih animasi ikonnya muter
    musicBtn.classList.remove('hidden');
    musicIcon.classList.add('playing');

    // Efek transisi halus (Cover ngilang)
    coverPage.style.opacity = '0';
    
    setTimeout(() => {
        coverPage.classList.add('hidden');
        albumPage.classList.remove('hidden');
        window.scrollTo(0, 0); // Balikin posisi layar ke paling atas
    }, 1000); // Nunggu 1 detik pas animasi fade selesai
});

// 3. Fungsi buat tombol PLAY / PAUSE musik (yang melayang di pojok)
musicBtn.addEventListener('click', function() {
    // Kalau musik lagi pause, kita play
    if (bgMusic.paused) {
        bgMusic.play();
        musicIcon.classList.add('playing'); // Animasi jalan
    } else {
        // Kalau musik lagi nyala, kita pause
        bgMusic.pause();
        musicIcon.classList.remove('playing'); // Animasi berhenti
    }
});

// 4. Inisialisasi Swiper (Efek Buku / Slide ke samping)
const swiper = new Swiper(".mySwiper", {
    effect: "slide", 
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
