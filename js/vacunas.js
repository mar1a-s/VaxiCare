const catalogContainer = document.getElementById("catalogContainer");
const searchInput = document.getElementById("searchInput");

function renderCatalog(searchText = "") {
  // Si no existe el catálogo en la página, se detiene el código.
  if (!catalogContainer) return;

  // Convierte la búsqueda a minúsculas para que no importe cómo escriba el usuario.
  const normalizedSearch = searchText.toLowerCase().trim();

  // Filtra las vacunas que contengan el texto buscado en su nombre.
  const filtered = vaccines.filter(vaccine =>
    vaccine.name.toLowerCase().includes(normalizedSearch)
  );

  // Crea una tarjeta por cada vacuna encontrada.
  catalogContainer.innerHTML = filtered.map(vaccine => `
    <article class="catalog-card">
      <i class="fa-solid fa-syringe"></i>
      <h3>${vaccine.name}</h3>
      <p><strong>Dosis:</strong> ${vaccine.dose}</p>
      <p><strong>Estado:</strong> ${vaccine.status}</p>
      <p>${vaccine.description}</p>
    </article>
  `).join("");
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    // Cada vez que se escribe algo, el catálogo se vuelve a pintar con el filtro actual.
    renderCatalog(searchInput.value);
  });
}

renderCatalog();
