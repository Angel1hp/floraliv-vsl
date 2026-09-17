document.addEventListener('DOMContentLoaded', () => {
    const ctaContainer = document.getElementById('cta-container');

    /**
     * ESTRATEGIA VSL (Video Sales Letter)
     * El botón de compra se mantiene oculto hasta que haces la oferta en el video.
     */
    const CTA_DELAY_MS = 5000; 

    setTimeout(() => {
        ctaContainer.classList.add('visible');
    }, CTA_DELAY_MS);


    // --- LÓGICA DEL REPRODUCTOR VSL CUSTOMIZADO ---
    const vslVideo = document.getElementById('vsl-video');
    const vslWrapper = document.getElementById('vsl-wrapper');
    const videoOverlay = document.getElementById('video-overlay');

    if (vslVideo && vslWrapper && videoOverlay) {
        vslWrapper.addEventListener('click', () => {
            if (vslVideo.paused) {
                vslVideo.play();
                videoOverlay.classList.add('hidden');
                vslVideo.setAttribute('controls', 'true');
            } else {
                vslVideo.pause();
                videoOverlay.classList.remove('hidden');
                vslVideo.removeAttribute('controls');
            }
        });
    }
});
