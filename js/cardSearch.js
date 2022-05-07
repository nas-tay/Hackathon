arr = GenerateJSON();
const CardHtml = (people) => {
  const card = createElemDOM("div", "card gallery_card");
  const img = createElemDOM("img", "card-img-top");
  img.src = people.photo;
  img.alt = "Card image cap";
  card.appendChild(img);
  const body = createElemDOM("div", "card-body");
  card.appendChild(body);

  const h5 = createElemDOM("h5", "card-title", people.name);
  body.appendChild(h5);

  const p = createElemDOM("p", "card-text", people.about);
  body.appendChild(p);
  const a = createElemDOM("a", "btn btn-primary", "Пообщаться");
  body.appendChild(a);
  return card;
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
