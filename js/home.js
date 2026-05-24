const statsContainer = document.getElementById("statsContainer");

function getStats() {
  // Cuenta cuántas vacunas están aplicadas y cuántas siguen pendientes.
  // Estos valores salen del arreglo vaccines que está en data.js.
  const aplicadas = vaccines.filter(vaccine => vaccine.status === "aplicada").length;
  const pendientes = vaccines.filter(vaccine => vaccine.status === "pendiente").length;

  // Se organiza la información en tarjetas para mostrarla en el inicio.
  return [
    { icon: "fa-user", label: "Usuario", value: "Usuario" },
    { icon: "fa-syringe", label: "Vacunas aplicadas", value: aplicadas },
    { icon: "fa-bell", label: "Pendientes", value: pendientes },
    { icon: "fa-shield-virus", label: "Estado del esquema", value: "En progreso" }
  ];
}

function renderStats() {
  // Si esta página no tiene contenedor de estadísticas, no hace nada.
  if (!statsContainer) return;

  // Genera las tarjetas del inicio usando la información calculada en getStats().
  statsContainer.innerHTML = getStats().map(stat => `
    <article class="stat-card glass-card">
      <div class="icon-box">
        <i class="fa-solid ${stat.icon}"></i>
      </div>
      <div>
        <small>${stat.label}</small>
        <h3>${stat.value}</h3>
      </div>
    </article>
  `).join("");
}

renderStats();
