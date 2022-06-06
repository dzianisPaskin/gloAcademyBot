'use strict';


function gameBot(num, attempt) {

  let askNum = prompt('Угадай число от 1 до 100');


  function bot() {

    if (askNum === null) {
      alert('Игра окончена');
    } else if (!Number(askNum)) {
      alert('Введите число');
      askNum = prompt('Введите новый вариант');
      bot();
    } else if (askNum > num) {
      alert(`Загаданное число меньше, осталось ${--attempt}`);
      if (attempt === 0) {
        let confirm1 = confirm('Попытки закончились, хотите сыграть еще?');
        if (confirm1) {
          gameBot(74, 10);
        }
      }
      askNum = prompt('Введите новый вариант');
      bot();
    } else if (askNum < num) {
      alert(`Загаданное число больше, осталось ${--attempt}`);
      if (attempt === 0) {
        let confirm1 = confirm('Попытки закончились, хотите сыграть еще?');
        if (confirm1) {
          gameBot(74, 10);
        } else {
          return;
        }
      }
      askNum = prompt('Введите новый вариант');
      bot();
    } else if (askNum == num) {
      let confirm2 = confirm('"Поздравляю, Вы угадали!!! Хотели бы сыграть еще?"');
      if (confirm2) {
        gameBot(43, 10);
      } else {
        return;
      }
    }


  }

  bot();

}

gameBot(55, 10);