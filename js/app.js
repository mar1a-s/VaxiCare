// Tomamos el botón del modo oscuro para poder cambiar el tema desde cualquier página.
const themeBtn = document.getElementById("themeBtn");

function applySavedTheme() {
  // Revisa si el usuario ya había elegido un tema antes.
  // Esto ayuda a que al cambiar de página no se pierda el modo oscuro.
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    updateThemeButton(true);
  }
}

function updateThemeButton(isDark) {
  // Si la página no tiene botón de tema, se detiene para evitar errores.
  if (!themeBtn) return;

  // Cambia el icono y texto del botón dependiendo del tema activo.
  themeBtn.innerHTML = isDark
    ? '<i class="fa-solid fa-sun"></i><span> Claro</span>'
    : '<i class="fa-solid fa-moon"></i><span> Modo</span>';
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    // Agrega o quita la clase dark en el body.
    // El CSS usa esa clase para cambiar los colores de la página.
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    // Guarda la preferencia para que se mantenga aunque se recargue la página.
    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateThemeButton(isDark);
  });
}

// Se aplica el tema guardado al cargar la página.
applySavedTheme();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    // En pantallas pequeñas muestra u oculta el menú de navegación.
    navLinks.classList.toggle("active");
  });
}
