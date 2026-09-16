document.addEventListener('DOMContentLoaded', () => {
    const ctaContainer = document.getElementById('cta-container');
    const videoPlaceholder = document.querySelector('.video-placeholder');

    /**
     * ESTRATEGIA VSL (Video Sales Letter)
     * El botón de compra se mantiene oculto hasta que haces la oferta en el video.
     * 
     * Para esta demostración, aparecerá a los 5 segundos.
     * Cuando tengas tu video real, cambia este valor. 
     * Ejemplo: Si tu oferta es en el minuto 5, cambia 5000 a 300000 (5 min * 60 seg * 1000).
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
        // Al hacer clic en el contenedor (o en el overlay), reproducir/pausar
        vslWrapper.addEventListener('click', () => {
            if (vslVideo.paused) {
                vslVideo.play();
                videoOverlay.classList.add('hidden');
                
                // Mostrar controles mínimos al reproducir
                vslVideo.setAttribute('controls', 'true');
            } else {
                vslVideo.pause();
                videoOverlay.classList.remove('hidden');
                vslVideo.removeAttribute('controls');
            }
        });
    }
});
