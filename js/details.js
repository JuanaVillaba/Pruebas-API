let idGuardado = localStorage.getItem("idSeleccionado");
let URL = `https://rickandmortyapi.com/api/character/${idGuardado}`;
//let URL = `https://rickandmortyapi.com/api/character/1`; // cambiar ID cambiar personaje

fetch(URL)
  .then(response => response.json())
  .then(data => {
    // Imagen
    document.getElementById("character-img").src = data.image;

    // Info principal
    document.getElementById("name").textContent = data.name;

    // Datos abajo
    document.getElementById("name-data").textContent = data.name;
    document.getElementById("status").textContent = data.status;
    document.getElementById("species").textContent = data.species;
    document.getElementById("gender").textContent = data.gender;
    document.getElementById("origin").textContent = data.origin.name;
    document.getElementById("location").textContent = data.location.name;
  })
  .catch(error => console.log("Error:", error));
  