document.addEventListener("DOMContentLoaded", () => {
  const btnBuscar = document.getElementById("btn-buscar");
  const imagenPerro = document.getElementById("imagen-perro");

  btnBuscar.addEventListener("click", async () => {
    try {
      const respuesta = await fetch("https://dog.ceo/api/breeds/image/random");
      const datos = await respuesta.json();
      imagenPerro.src = datos.message;
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
    }
  });
});
