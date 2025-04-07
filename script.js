function obtenerSaludo() {
  const nombre = document.getElementById('nombreInput').value;

  if (!nombre) {
    document.getElementById('respuesta').innerText = "Por favor, ingresa un nombre.";
    return;
  }

  fetch(`http://localhost:3000/saludo/${nombre}`)
    .then(response => response.text())
    .then(data => {
      document.getElementById('respuesta').innerText = data;
    })
    .catch(error => {
      document.getElementById('respuesta').innerText = "Error al conectar con el servidor.";
      console.error("Error:", error);
    });
}