//Seleccionamos el botón y el párrafo donde mostraremos el resultado
const calcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", () => {
  const anioNacimiento = prompt("¿en qué año naciste?");
  const anioActual = new Date().getFullYear();
  const edad = anioActual - anioNacimiento;

  // Mostramos en consola el resultado
  console.log("Año de nacimiento: ", anioNacimiento);
  console.log("Edad claculada: ", edad);

  resultado.textContent = `Tienes aproximadamente ${edad} años.`;
});
