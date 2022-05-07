arr = GenerateJSON();
const CardHtml = (people) => {
  const list = document.querySelector(".card_list");

  return createElemDOM("div", "d-block w-100 card_carous", people.name);
};

const CardSearch = () => {
  const searchText = document.querySelector("#idCardKey").value;
  const list = document.querySelector(".card_list");
  list.innerHTML = "";
  if (searchText) {
    arr.forEach((element) => {
      const search = new RegExp(searchText, "gi");
      const rez = search.test(element.keyWords);

      if (rez) {
        list.appendChild(CardHtml(element));
      }
    });
  }
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const CardRandom = () => {
  const list = document.querySelector(".card_list");
  list.innerHTML = "";
  const rand = getRandomIntInclusive(1, arr.length);

  list.appendChild(CardHtml(arr[rand - 1]));
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#idCardFind")
    .addEventListener("click", () => CardSearch());
  document
    .querySelector("#idCardRnd")
    .addEventListener("click", () => CardRandom());
});
