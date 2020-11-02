const checkbox = document.getElementById("checkbox");
const cards = [...document.querySelectorAll(".card")];

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  cards.forEach((card) => card.classList.toggle("dark"));
});
