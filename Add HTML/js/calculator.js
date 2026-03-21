// Select the display
const display = document.getElementById("display");

// Add values to the display
function append(value) {
  if (value === "/") {
    display.value += "÷";
  } else if (value === "*") {
    display.value += "×";
  } else {
    display.value += value;
  }
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    let expression = display.value;

    // Convert symbols to JavaScript format
    expression = expression.replace(/÷/g, "/");
    expression = expression.replace(/×/g, "*");

    // Convert percentage to /100
    expression = expression.replace(/%/g, "/100");

    // Evaluate
    display.value = eval(expression);

  } catch (error) {
    display.value = "Error";
  }
}