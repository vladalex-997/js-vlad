(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', function () {
      const message = 'Mouseul este pe scena';

      showMessage(message, 'message');
      console.log(message);
    });

    stage.addEventListener('mouseout', function () {
      const message = 'Mouseul nu este pe scena';

      showMessage(message, 'message');
      console.log(message);
    });

    // function functions are hoisted
    function showMessage(message, cssClass = '') {
      const paragraphElement = document.createElement('p');
      paragraphElement.innerText = message;
      paragraphElement.classList.add(cssClass);

      document.body.append(paragraphElement);
    }
  });
})();
