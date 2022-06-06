'use strict';


function gameBot(num) {
  let askNum = prompt('Угадай число от 1 до 100');


  function bot() {


    if (askNum === null) {
      alert('Игра окончена');
    } else if (askNum > num) {
      alert('Загаданное число меньше');
      askNum = prompt('Введите новый вариант');
      bot();
    } else if (askNum < num) {
      alert('Загаданное число больше');
      askNum = prompt('Введите новый вариант');
      bot();
    } else if (!Number(askNum)) {
      alert('Введите число');
      askNum = prompt('Введите новый вариант');
      bot();
    } else if (askNum == num) {
      alert('Поздравляю, Вы угадали!!!');
    }

  }

  bot();

}

gameBot(55);