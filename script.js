'use strict';

const randomNum = function () {
  return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
};



function gameBot(num, attempt) {

  let askNum = prompt('Угадай число от 1 до 100');

  function bot() {

    if (askNum === null) {
      alert('Игра окончена');
    } else if (!Number(askNum)) {
      alert('Введите число');
      askNum = prompt('Введите новый вариант');
      return bot();
    } else if (askNum > num) {
      alert(`Загаданное число меньше, осталось ${--attempt}`);
      if (attempt === 0) {
        let confirm1 = confirm('Попытки закончились, хотите сыграть еще?');
        if (confirm1) {
          return gameBot(randomNum(), 10);
        }
      }
      askNum = prompt('Введите новый вариант');
      return bot();
    } else if (askNum < num) {
      alert(`Загаданное число больше, осталось ${--attempt}`);
      if (attempt === 0) {
        let confirm1 = confirm('Попытки закончились, хотите сыграть еще?');
        if (confirm1) {
          return gameBot(randomNum(), 10);
        } else {
          return;
        }
      }
      askNum = prompt('Введите новый вариант');
      return bot();
    } else if (askNum == num) {
      let confirm2 = confirm('"Поздравляю, Вы угадали!!! Хотели бы сыграть еще?"');
      if (confirm2) {
        return gameBot(randomNum(), 10);
      } else {
        return;
      }
    }


  }

  bot();

}

gameBot(randomNum(), 10);