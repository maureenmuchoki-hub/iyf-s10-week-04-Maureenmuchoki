// Get display element
const display = document.getElementById("display");

// Add values to display
function append(value) {
  if (value === "/") {
    display.value += "÷";
  } else if (value === "*") {
    display.value += "×";
  } else {
    display.value += value;
  }
}

// Clear everything
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

    // Convert percentage to division
    expression = expression.replace(/%/g, "/100");

    // Evaluate result
    display.value = eval(expression);

  } catch {
    display.value = "Error";
  }
}