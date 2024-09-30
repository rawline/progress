class Progress {
  constructor(svgElement) {
    this.svgElement = svgElement;
    this.progressBar = svgElement.querySelector('.progress-bar');
  }

  setValue(value) {
    if (value >= 0 && value <= 100) {
      const offset = 283 - (value / 100) * 283;
      this.progressBar.style.strokeDashoffset = offset;
    }
  }

  startAnimation() {
    this.svgElement.classList.add('animated');
  }

  stopAnimation() {
    this.svgElement.classList.remove('animated');
  }

  hide() {
    this.svgElement.classList.add('hidden');
  }

  show() {
    this.svgElement.classList.remove('hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const progressElement = document.getElementById('progress');
  const progress = new Progress(progressElement);
  const valueInput = document.getElementById('progress-value');

  valueInput.addEventListener('input', (e) => {
    let value = e.target.value;

    if(!value) value = '0'

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
    } else {

    }

    e.target.value = value
    progress.setValue(value);
  });

  document.getElementById('progress-animate').addEventListener('change', (e) => {
    if (e.target.checked) {
      progress.startAnimation();
    } else {
      progress.stopAnimation();
    }
  });

  document.getElementById('progress-hide').addEventListener('change', (e) => {
    if (e.target.checked) {
      progress.hide();
    } else {
      progress.show();
    }
  });
});
