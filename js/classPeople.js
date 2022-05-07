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
      "/assets/img/photo_2022-05-07_19-19-48 (2).jpg",
      "Родом из Барнаула, работала журналисткой.",
      "литература, экология, урбанистика "
    )
  );
  arrPeople.push(
    new People(
      "Галина Довгополая",
      "/assets/img/photo_2022-05-07_19-27-00.jpg",
      "Пенсионерка. В колонии увлеклась вязанием — вяжет детские вещи для дома матери и ребенка.",
      ""
    )
  );
  return arrPeople;
};
