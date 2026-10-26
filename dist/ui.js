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
    const target = startQuiz ? document.querySelector('#quiz [data-start], #quiz h2') : help;
    target?.focus({preventScroll: true});
  }
  help.addEventListener('click', openWelcome);
  document.querySelector('#welcome-close').addEventListener('click', () => closeWelcome());
  document.querySelector('#welcome-start').addEventListener('click', () => closeWelcome(true));
  welcome.addEventListener('close', () => document.body.classList.remove('welcome-open'));
  // The quiz start screen lists the steps, so the dialog opens only from "How it works".
})();
