const CardHtml = () => {
  const list = document.querySelector(".card_list");
  list.appendChild(createElemDOM("div", "d-block w-100 card_carous"));
};

const CardSearch = () => {
  const searchText = document.querySelector("#idCardKey").value;
  const arrCards = document.querySelectorAll(".carousel-item");

  CardHtml();
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#idCardFind")
    .addEventListener("click", () => CardSearch());
});
