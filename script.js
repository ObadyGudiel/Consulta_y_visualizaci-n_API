const contenedor = document.getElementById("contenedor");

async function cargarDatos() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    if (!res.ok) throw new Error("Error en la respuesta de la API");
    
    const data = await res.json();
    mostrarDatos(data.results);
  } catch (error) {
    contenedor.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}

function mostrarDatos(personajes) {
  contenedor.innerHTML = "";
  personajes.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Especie: ${p.species}</p>
      <p>Status: ${p.status}</p>
    `;
    contenedor.appendChild(div);
  });
}

cargarDatos();
