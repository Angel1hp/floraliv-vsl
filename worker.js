export default {
  async fetch(request, env, ctx) {
    // === CONFIGURACIÓN ===
    // 1. Aquí está el ID de tu video de Google Drive
    const VIDEO_ID = '141ANg8z7_kUugucyOZva-jS9qcL80AZC'; 

    // 2. (Opcional pero recomendado) Tu Google API Key si el video es muy pesado
    const API_KEY = ''; 
    // =====================

    const url = new URL(request.url)
    const id = url.searchParams.get('id') || VIDEO_ID;
    
    // Construimos la URL de Google Drive
    let driveUrl = `https://drive.google.com/uc?export=download&id=${id}`;
    
    // Si configuraste una API Key, usamos la ruta oficial (ideal para videos grandes)
    if (API_KEY) {
        driveUrl = `https://www.googleapis.com/drive/v3/files/${id}?alt=media&key=${API_KEY}`;
    }

    // Copiamos los headers originales (vital para que funcione la barra de progreso del video)
    const headers = new Headers(request.headers);
    
    // Hacemos la petición a Google Drive
    const response = await fetch(driveUrl, { headers });
    
    // Clonamos la respuesta para poder modificarla
    const newResponse = new Response(response.body, response);
    
    // ¡El truco de magia! 
    // 1. Permitimos que tu página web pueda leer el video (CORS)
    newResponse.headers.set('Access-Control-Allow-Origin', '*');
    // 2. Borramos la orden de "Descargar archivo" para que el navegador se vea obligado a reproducirlo
    newResponse.headers.delete('Content-Disposition');
    
    return newResponse;
  }
};
