// Elementos del DOM
const btnEvaluar = document.getElementById("btnEvaluar");
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");

//Función principal que se ejecuta al hacer clic
function evaluarNota() {
  const nota = parseInt(inputNota.value);
  const calificacion = obtnerCalificacion(nota);
  resultado.textContent = calificacion;
}

//Función que devuelve la calificación
function obtnerCalificacion(nota) {
  if (isNaN(nota) || nota < 0 || nota > 100) {
    return "Por favor, ingrese una nota válida entre 0 y 100.";
  }

  if (nota >= 90) return "Excelente";
  if (nota >= 80 && nota <= 89) return "Muy Buneo";
  if (nota >= 70 && nota <= 79) return "Bueno";
  if (nota >= 60 && nota <= 69) return "Regular";
  return "Reprobado";
}

//Evento
btnEvaluar.addEventListener("click", evaluarNota);

inputNota.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    evaluarNota();
  }
});
