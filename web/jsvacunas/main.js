document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = form.querySelector("input[type='email']");
  const passwordInput = form.querySelector("input[type='password']");

  // Crear un contenedor para mensajes de error o éxito
  const messageBox = document.createElement("div");
  messageBox.className = "message-box";
  form.appendChild(messageBox);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    let errors = [];

    // Validar email
    if (!email) {
      errors.push("El campo correo es obligatorio.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("El correo no es válido.");
    }

    // Validar contraseña
    if (!password) {
      errors.push("El campo contraseña es obligatorio.");
    }

    // Mostrar errores o éxito
    if (errors.length > 0) {
      messageBox.innerHTML = `<ul>${errors.map(err => `<li>${err}</li>`).join("")}</ul>`;
      messageBox.style.color = "red";
    } else {
      messageBox.textContent = "Datos validados correctamente.";
      messageBox.style.color = "green";
    }
  });
});
