(function () {
  // no hoist
  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');
    const removeButton = document.getElementById('removeButtons');
    let eventBound = true;

    showButton.addEventListener('click', showAlert);
    showMessage('Alerta va fi afisata');

    removeButton.addEventListener('click', function () {
      if (confirm('Stergem butoanele?') !== true) {
        return;
      }

      showButton.remove();
      toggleEventButton.remove();
    });

    toggleEventButton.addEventListener('click', function () {
      if (eventBound === true) {
        showButton.removeEventListener('click', showAlert);
        eventBound = false;
        this.innerText = 'Porneste afisarea';
        showMessage('Alerta NU va fi afisata');
      } else {
        showButton.addEventListener('click', showAlert);
        eventBound = true;
        this.innerText = 'Opreste afisarea';
        showMessage('Alerta va fi afisata');
      }
    });

    // function functions are hoisted
    function showAlert() {
      alert('Butonul a fost apasat');
    }

    function showMessage(message = '') {
      const cssClass = 'message';
      let paragraphElement = document.querySelector(`.${cssClass}`);

      if (paragraphElement === null) {
        paragraphElement = document.createElement('p');
        paragraphElement.classList.add(cssClass);

        document.body.append(paragraphElement);
      }

      paragraphElement.innerText = message;
    }
  });
})();
