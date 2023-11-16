document.addEventListener('DOMContentLoaded', function() {
  // Отримуємо всі радіокнопки
  var radioButtons = document.querySelectorAll('input[type=radio]');

  // Отримуємо кнопку "Перевірити відповідь"
  var submitButton = document.querySelector('.submit-button');

  // Отримуємо блоки VK та умов
  var vkBlock = document.querySelector('.VK');
  var conditionText = document.getElementById('conditionText');

  // Ініціалізуємо змінну для зберігання кількості балів
  var score = 0;

  // Додаємо обробник подій для кожної радіокнопки
  radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
      // Якщо вибрано одну з радіокнопок, додаємо відповідний бал
      if (radioButton.checked) {
        var value = radioButton.value;
        if (value === 'a') {
          score += 1;
        } else if (value === 'b') {
          score += 2;
        } else if (value === 'c') {
          score += 3;
        }
      }
    });
  });

  // Додаємо обробник подій для кнопки "Перевірити відповідь"
  submitButton.addEventListener('click', function() {
    // Виводимо кількість балів в консоль
    console.log('Кількість балів: ' + score);

    // Перевіряємо умови
    if (score >= 21 && score <= 30) {
      conditionText.textContent = 'Ви справжній друг.';
    } else if (score >= 5 && score <= 20) {
      conditionText.textContent = 'у вас є друзі, але, як більшість з нас, ви іноді не виявляєте в стосунках належного розуміння. Коли не знаєте, як реагувати, спробуйте поставити себе на місце іншої людини.';
    } else if (score >= 10 && score <= 14) {
      conditionText.textContent = 'Ви схильні більше звертати увагу на себе, ніж на інших. Ця ваша риса — барєр перед справжньою дружбою. Щоб стати гарним другом, потрібно виявляти більше інтересу до інших людей.';
    } else {
      conditionText.textContent = 'Ви не відповіли на жодне з питань.';
    }
  });
});
