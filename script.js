document.getElementById('open-btn').addEventListener('click', function() {
    // 1. Ambil elemen
    const coverPage = document.getElementById('cover-page');
    const albumPage = document.getElementById('album-page');
    const bgMusic = document.getElementById('bg-music');

    // 2. Muter lagu
    bgMusic.play();

    // 3. Efek transisi halus (Fade Out)
    coverPage.style.opacity = '0';
    
    setTimeout(() => {
        coverPage.classList.add('hidden');
        albumPage.classList.remove('hidden');
        // Trigger animasi atau scroll ke atas jika perlu
        window.scrollTo(0, 0);
    }, 1000); // Nunggu 1 detik pas animasi fade selesai
});
