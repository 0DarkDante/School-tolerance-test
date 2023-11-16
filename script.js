document.addEventListener('DOMContentLoaded', function() {
  var radioButtons = document.querySelectorAll('input[type=radio]');
  var submitButton = document.querySelector('.submit-button');
  var vkBlock = document.querySelector('.VK');
  var conditionText = document.getElementById('conditionText');
  var modal = document.getElementById('myModal');
  var closeModalButton = document.getElementById('closeModal');
  var score = 0;

  radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
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

  submitButton.addEventListener('click', function() {
    console.log('Кількість балів: ' + score);

    if (score >= 21 && score <= 36) {
      conditionText.textContent = 'Ви справжній друг.';
    } else if (score >= 5 && score <= 21) {
      conditionText.textContent = 'У вас є друзі, але, як більшість з нас, ви іноді не виявляєте в стосунках належного розуміння. Коли не знаєте, як реагувати, спробуйте поставити себе на місце іншої людини.';
    } else if (score >= 10 && score <= 14) {
      conditionText.textContent = 'Ви схильні більше звертати увагу на себе, ніж на інших. Ця ваша риса — бар\'єр перед справжньою дружбою. Щоб стати гарним другом, потрібно виявляти більше інтересу до інших людей.';
    } else {
      conditionText.textContent = 'Ви відповіли не на всі запитання, або перезагрузіть сторінку';
    }

    modal.style.display = 'block';
    score = 0;
  });

  closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});