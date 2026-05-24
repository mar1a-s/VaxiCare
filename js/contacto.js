const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    // Evita que el formulario recargue la página, porque aquí solo se simula el envío.
    event.preventDefault();

    // Toma el nombre escrito; si está vacío, usa "Usuario" como texto por defecto.
    const userName = nameInput.value.trim() || "Usuario";

    formMessage.textContent = `Gracias, ${userName}. Tu mensaje fue registrado correctamente.`;

    // Limpia el formulario después de mostrar el mensaje.
    contactForm.reset();
  });
}
