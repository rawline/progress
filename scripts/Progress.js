const MAX_PROGRESS_VALUE = 100;
const MIN_PROGRESS_VALUE = 0;
const FULL_CIRCLE_DASH_ARRAY = 283;

export default class Progress {
  constructor(svgElement) {
    this.svgElement = svgElement;
    this.progressBar = svgElement.querySelector('.progress-bar');
  }

  setValue(value) {
    if (value >= MIN_PROGRESS_VALUE && value <= MAX_PROGRESS_VALUE) {
      const offset = FULL_CIRCLE_DASH_ARRAY - (value / MAX_PROGRESS_VALUE) * FULL_CIRCLE_DASH_ARRAY;
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
