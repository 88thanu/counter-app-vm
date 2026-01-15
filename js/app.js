let counter = 0;

const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

function updateUI() {
  counterValue.textContent = counter;
}

incrementBtn.addEventListener("click", () => {
  counter++;
  updateUI();
});

decrementBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    updateUI();
  }
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  updateUI();
});
