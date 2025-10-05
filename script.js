const contenedor = document.getElementById("contenedor");

async function cargarGatos() {
  try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
    if (!res.ok) throw new Error("Error en la API de gatos");
    
    const data = await res.json();
    mostrarGatos(data);
  } catch (error) {
    contenedor.innerHTML = `<p style="color:red;">Ocurrió un error: ${error.message}</p>`;
  }
}

function mostrarGatos(gatos) {
  contenedor.innerHTML = "";
  gatos.forEach(gato => {
    const img = document.createElement("img");
    img.src = gato.url;
    contenedor.appendChild(img);
  });
}

// Cargar gatos al iniciar
cargarGatos();