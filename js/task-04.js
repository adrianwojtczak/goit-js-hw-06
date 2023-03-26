const counter = document.getElementById("value");
let counterValue = 0;

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    if (action === "decrement") {
      counterValue--;
    } else if (action === "increment") {
      counterValue++;
    }
    counter.textContent = counterValue;
  });
});
