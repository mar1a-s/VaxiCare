const vaccinesTable = document.getElementById("vaccinesTable");
const filterButtons = document.querySelectorAll(".filter-btn");

function statusBadge(status) {
  // Devuelve una etiqueta visual distinta según el estado de la vacuna.
  // Así la tabla se entiende más rápido sin poner solo texto plano.
  return status === "aplicada"
    ? '<span class="badge aplicada">Aplicada</span>'
    : '<span class="badge pendiente">Pendiente</span>';
}

function renderVaccines(filter = "todas") {
  // Si no existe la tabla en esta página, no se ejecuta nada.
  if (!vaccinesTable) return;

  // Cuando el filtro es "todas" se muestra la lista completa.
  // Si no, solo se toman las vacunas que coinciden con el estado seleccionado.
  const filtered = filter === "todas"
    ? vaccines
    : vaccines.filter(vaccine => vaccine.status === filter);

  // Se construyen las filas de la tabla usando los datos del arreglo vaccines.
  vaccinesTable.innerHTML = filtered.map(vaccine => `
    <tr>
      <td>${vaccine.name}</td>
      <td>${vaccine.date}</td>
      <td>${vaccine.dose}</td>
      <td>${vaccine.nextDose}</td>
      <td>${statusBadge(vaccine.status)}</td>
    </tr>
  `).join("");
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    // Se quita la clase active de todos los botones para marcar solo el seleccionado.
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    renderVaccines(selectedFilter);
  });
});

// Al entrar a la página se muestra el historial completo por defecto.
renderVaccines();
