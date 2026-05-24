const remindersContainer = document.getElementById("remindersContainer");

function renderReminders() {
  // Si no estamos en la página de recordatorios, se evita ejecutar el código.
  if (!remindersContainer) return;

  // Solo se muestran las vacunas pendientes, porque son las que necesitan seguimiento.
  const pending = vaccines.filter(vaccine => vaccine.status === "pendiente");

  // Con las vacunas pendientes se crean tarjetas con la próxima fecha de aplicación.
  remindersContainer.innerHTML = pending.map(vaccine => `
    <article class="reminder-card">
      <i class="fa-solid fa-calendar-check"></i>
      <h3>${vaccine.name}</h3>
      <p><strong>Dosis:</strong> ${vaccine.dose}</p>
      <p><strong>Próxima aplicación:</strong> ${vaccine.nextDose}</p>
      <p>${vaccine.description}</p>
    </article>
  `).join("");
}

renderReminders();
