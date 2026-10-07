(() => {
  const welcome = document.querySelector('#welcome-dialog');
  if (!welcome) return;
  const help = document.querySelector('#welcome-help');
  function openWelcome() {
    if (welcome.open) return;
    document.body.classList.add('welcome-open');
    welcome.showModal();
  }
  function closeWelcome(startQuiz = false) {
    welcome.close();
    document.body.classList.remove('welcome-open');
    const target = startQuiz ? document.querySelector('#quiz h2') : help;
    target?.focus({preventScroll: true});
  }
  help.addEventListener('click', openWelcome);
  document.querySelector('#welcome-close').addEventListener('click', () => closeWelcome());
  document.querySelector('#welcome-start').addEventListener('click', () => closeWelcome(true));
  welcome.addEventListener('close', () => document.body.classList.remove('welcome-open'));
  // Show instructions on each homepage visit, independently of the quiz catalog.
  openWelcome();
})();
