class People {
  static _count = 0;
  constructor(name, photo, about, keyWords) {
    this.name = name;
    this.photo = photo;
    this.about = about;
    this.keyWords = keyWords;
    this.id = ++People._count;
  }
}

const GenerateJSON = () => {
  const arrPeople = [];
  arrPeople.push(
    new People(
      "Саша Скочиленко",
      "https://sun9-66.userapi.com/sun9-73/impf/c625817/v625817691/102c4/VfjVdx47s7I.jpg?size=404x604&quality=96&sign=df02e282270af29f49073bc3a1e54dcf&type=album",
      "Жила в Санкт-Петербурге, занималась иллюстрацией.",
      "музыка, социология"
    )
  );
  arrPeople.push(
    new People(
      "Мария Пономаренко",
      "https://avatars.mds.yandex.net/i?id=fec0a115c35d08c98e4523a5831a622b_l-5209452-images-thumbs&n=13",
      "Родом из Барнаула, работала журналисткой.",
      "литература, экология, урбанистика "
    )
  );
  arrPeople.push(
    new People(
      "Галина Довгополая",
      "https://avatars.mds.yandex.net/i?id=376699797fdafec61a791c3baf8af7b8_l-5253889-images-thumbs&n=33&w=1000&h=750&q=60",
      "Пенсионерка. В колонии увлеклась вязанием — вяжет детские вещи для дома матери и ребенка.",
      ""
    )
  );
  return arrPeople;
};
