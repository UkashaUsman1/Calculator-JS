let currentDisplay = "";
const display = document.querySelector(".display");

document.querySelectorAll(".keys").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    currentDisplay += value;
    display.value = currentDisplay;
  });
});

document.querySelector("#clear").addEventListener("click", () => {
  currentDisplay = "";
  display.value = currentDisplay;
});

document.querySelector("#equal").addEventListener("click", () => {
  try {
    currentDisplay = eval(currentDisplay);
    display.value = currentDisplay;
  } catch {
    display.value = "Error";
  }
});
