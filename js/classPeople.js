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
      "Фото",
      "Жила в Санкт-Петербурге, занималась иллюстрацией.",
      "музыка, социология"
    )
  );
  arrPeople.push(
    new People(
      "Мария Пономаренко",
      "Фото",
      "Родом из Барнаула, работала журналисткой.",
      "литература, экология, урбанистика "
    )
  );
  arrPeople.push(
    new People(
      "Галина Довгополая",
      "Фото",
      "Пенсионерка. В колонии увлеклась вязанием — вяжет детские вещи для дома матери и ребенка.",
      ""
    )
  );
  return arrPeople;
};
