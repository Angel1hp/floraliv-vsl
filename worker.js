addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

// === CONFIGURACIÓN ===
// 1. Pega aquí el ID de tu video de Google Drive
const VIDEO_ID = 'AQUI_PON_EL_ID_DE_TU_VIDEO'; 

// 2. (Opcional pero recomendado) Tu Google API Key si el video es muy pesado
const API_KEY = ''; 
// =====================

async function handleRequest(request) {
  const url = new URL(request.url)
  const id = url.searchParams.get('id') || VIDEO_ID;
  
  if (id === 'AQUI_PON_EL_ID_DE_TU_VIDEO') {
    return new Response('Error: Por favor pon el ID de tu video en el código del Worker', { status: 400 });
  }
  
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
