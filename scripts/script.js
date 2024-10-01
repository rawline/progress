import Progress from './Progress.js';

document.addEventListener('DOMContentLoaded', () => {
  const progressElement = document.getElementById('progress');
  const progress = new Progress(progressElement);
  const valueInput = document.getElementById('progress-value');

  function handleValueInputChange(e) {
    let value = e.target.value;

    if (!value) value = '0';

    const match = value.match(/^(\d{1,2}|100)$/);
    if (match) {
      value = match[0];
    } else if (parseInt(value.slice(0, 3), 10) == 100) {
      value = '100';
    } else {
      value = value.slice(0, 2);
    }

    value = parseInt(value, 10);
    if (value < 0) {
      value = 0;
    } else if (value > 100) {
      value = 100;
    }

    e.target.value = value;
    progress.setValue(value);
  }

  function handleAnimationToggle(e) {
    if (e.target.checked) {
      progress.startAnimation();
    } else {
      progress.stopAnimation();
    }
  }

  function handleVisibilityToggle(e) {
    if (e.target.checked) {
      progress.hide();
    } else {
      progress.show();
    }
  }

  valueInput.addEventListener('input', handleValueInputChange);
  document.getElementById('progress-animate').addEventListener('change', handleAnimationToggle);
  document.getElementById('progress-hide').addEventListener('change', handleVisibilityToggle);
});