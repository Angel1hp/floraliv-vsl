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


    // Simulación de reproducción de video
    if(videoPlaceholder) {
        videoPlaceholder.addEventListener('click', () => {
            videoPlaceholder.innerHTML = `
                <div style="width:100%; height:100%; display:flex; justify-content:center; align-items:center; background:#111; color:#fff; border-radius: 24px;">
                    <p style="opacity: 0.7;">[Aquí se reproduce tu VSL]</p>
                </div>
            `;
            
            // Opcional: Mostrar el botón inmediatamente si hacen clic en el video.
            // ctaContainer.classList.add('visible');
        });
    }
});
