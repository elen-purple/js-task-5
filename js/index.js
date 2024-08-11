// * 1
alert("Завдання 1");
const message1 = prompt(
  "Оберіть, що будете пити: Кава, Чай та Сік"
).toLowerCase();
let selected1;
switch (message1) {
  case "Кава".toLowerCase():
    selected1 = "Ви обрали каву";
    break;
  case "Чай".toLowerCase():
    selected1 = "Ви обрали чай";
    break;
  case "Сік".toLowerCase():
    selected1 = "Ви обрали сік";
    break;
  default:
    selected1 = "Ми не маємо такий товар";
}
alert(selected1);

// * 2
alert("Завдання 2");
const message2 = prompt("Введіть будь-який день тижня").toLowerCase();
let selected2;
switch (message2) {
  case "понеділок".toLowerCase():
    selected2 = "Так, понеділок є днем тижня";
    break;
  case "вівторок".toLowerCase():
    selected2 = "Так, вівторок є днем тижня";
    break;
  case "середа".toLowerCase():
    selected2 = "Так, середа є днем тижня";
    break;
  case "четвер".toLowerCase():
    selected2 = "Так, четвер є днем тижня";
    break;
  case "п'ятниця".toLowerCase():
    selected2 = "Так, п'ятниця є днем тижня";
    break;
  case "субота".toLowerCase():
    selected2 = "Так, субота є днем тижня";
    break;
  case "неділя".toLowerCase():
    selected2 = "Так, неділя є днем тижня";
    break;
  default:
    selected2 = "Це не є днем тижня";
}
alert(selected2);

// * 3
alert("Завдання 3");
const message3 = prompt("Введіть будь-який місяць").toLowerCase();
let selected3;
switch (message3) {
  case "січень".toLowerCase() ||
    "лютий".toLowerCase() ||
    "грудень".toLowerCase():
    selected3 = "Зима";
    break;
  case "березень".toLowerCase() ||
    "квітень".toLowerCase() ||
    "травень".toLowerCase():
    selected3 = "Весна";
    break;
  case "червень".toLowerCase() ||
    "липень".toLowerCase() ||
    "серпень".toLowerCase():
    selected3 = "Літо";
    break;
  case "вересень".toLowerCase() ||
    "жовтень".toLowerCase() ||
    "листопад".toLowerCase():
    selected3 = "Осінь";
    break;
  default:
    selected3 = "Це не є місяцем";
}
alert(selected3);

// * 4
alert("Завдання 4");
const message4 = prompt("Введіть будь-який місяць").toLowerCase();
let selected4;
switch (message4) {
  case "січень".toLowerCase() ||
    "березень".toLowerCase() ||
    "травень".toLowerCase() ||
    "липень".toLowerCase() ||
    "серпень".toLowerCase() ||
    "жовтень".toLowerCase() ||
    "грудень".toLowerCase():
    selected4 = "31";
    break;
  case "червень".toLowerCase() ||
    "вересень".toLowerCase() ||
    "листопад".toLowerCase() ||
    "квітень".toLowerCase():
    selected4 = "30";
    break;
  case "лютий".toLowerCase():
    selected4 = "28 або 29";
    break;
  default:
    selected4 = "Це не є місяцем";
}
alert(selected4);

// * 5
alert("Завдання 5");
const message5 = prompt("Введіть будь-який колір світлофора").toLowerCase();
let selected5;
switch (message5) {
  case "червоний".toLowerCase():
    selected5 = "Стій";
    break;
  case "жовтий".toLowerCase():
    selected5 = "Чекай";
    break;
  case "зелений".toLowerCase():
    selected5 = "Йди";
    break;
  default:
    selected5 = "До цього кольору нема дії";
}
alert(selected5);

// * 6
alert("Завдання 6");
const number6x = parseInt(prompt("Введіть будь-яке число"));
const number6y = parseInt(prompt("Введіть будь-яке число"));
const operation6 = prompt("Введіть будь-яку арифметичну дію").toLowerCase();
let selected6;
switch (operation6) {
  case "+".toLowerCase():
    selected6 = `${number6x} + ${number6y} = ${number6x + number6y}`;
    break;
  case "-".toLowerCase():
    selected6 = `${number6x} - ${number6y} = ${number6x - number6y}`;
    break;
  case "*".toLowerCase():
    selected6 = `${number6x} * ${number6y} = ${number6x * number6y}`;
    break;
  case "/".toLowerCase():
    if (number6y === 0) {
      selected6 = "Ділити на нуль не можна";
    } else {
      selected6 = `${number6x} / ${number6y} = ${number6x / number6y}`;
    }
    break;
  default:
    selected6 = "Такої дії нема";
}
alert(selected6);
