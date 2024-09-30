class Progress {
  constructor(svgElement) {
    this.svgElement = svgElement;
    this.progressBar = svgElement.querySelector('.progress-bar'); 
    this.animationInterval = null;
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

  document.getElementById('progress-value').addEventListener('input', (e) => {
    progress.setValue(parseInt(e.target.value, 10));
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
