const input = document.getElementById("busqueda");
const boton = document.getElementById("buscar");
const imagen = document.getElementById("imagen-pokemon");
const nombre = document.getElementById("nombre");
const tipos = document.getElementById("tipos");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", async () => {
  const query = input.value.toLowerCase().trim();

  if (!query) return;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    if (!res.ok) throw new Error("Pokémon no encontrado");

    const data = await res.json();

    imagen.src = data.sprites.front_default;
    imagen.style.display = "block";
    nombre.textContent = `Nombre: ${data.name.toUpperCase()}`;
    tipos.textContent =
      "Tipo(s): " + data.types.map((t) => t.type.name).join(", ");
    mensaje.style.display = "none";
  } catch (error) {
    imagen.style.display = "none";
    nombre.textContent = "";
    tipos.textContent = "";
    mensaje.textContent = "Pokémon no encontrado 😢";
    mensaje.style.display = "block";
  }
});
