const minRange = document.getElementById('min-range');
const maxRange = document.getElementById('max-range');
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const rangeSelected = document.querySelector('.range-selected');

function updateSlider() {
  const min = minRange.value;
  const max = maxRange.value;

  rangeSelected.style.left = `${(min / maxRange.max) * 100}%`;
  rangeSelected.style.width = `${((max - min) / maxRange.max) * 100}%`;

  minInput.value = min;
  maxInput.value = max;
}

minRange.addEventListener('input', updateSlider);
maxRange.addEventListener('input', updateSlider);