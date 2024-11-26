/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Arrays de palabras
  const nouns = [
    "cloud",
    "river",
    "mountain",
    "forest",
    "star",
    "ocean",
    "idea",
    "dream"
  ];
  const adjectives = [
    "bright",
    "bold",
    "clear",
    "fast",
    "green",
    "silent",
    "shiny",
    "unique"
  ];
  const suffixes = [
    "site",
    "hub",
    "zone",
    "land",
    "world",
    "spot",
    "space",
    "web"
  ];

  // Función para generar un nombre aleatorio
  function generadorDeNombres() {
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    // Combinar las palabras
    return `${randomAdjective}${randomNoun}${randomSuffix}.com`;
  }

  // Generar y mostrar un nombre en consola
  console.log(generadorDeNombres());
};
