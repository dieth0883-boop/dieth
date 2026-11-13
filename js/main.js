// Funciones sencillas para mejorar la navegación.
document.addEventListener("DOMContentLoaded", function () {
  const anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();

  document.querySelectorAll("#menu .nav-link").forEach(function (enlace) {
    enlace.addEventListener("click", function () {
      const menu = document.getElementById("menu");
      if (menu && menu.classList.contains("show") && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});