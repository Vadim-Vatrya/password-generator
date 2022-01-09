function generate() {
  let password = "";

  let length = +document.getElementById("length").value;

  let lowerCase = document.getElementById("lowercase").checked;
  let upperCase = document.getElementById("uppercase").checked;
  let symbols = document.getElementById("symbols").checked;
  let numbers = document.getElementById("numbers").checked;

  if (lowerCase + upperCase + symbol + number <= 0) return;

  for (let i = 0; i < length; i += 1) {
    const r = generater(0, 3);
    if (lowerCase && r === 0) {
      password += generateRandomLowerCase();
    } else if (upperCase && r === 1) {
      password += generateRandomUpperCase();
    } else if (symbols && r === 2) {
      password += generateRandomSymbol();
    } else if (numbers && r === 3) {
      password += generater(0, 9);
    } else {
      i -= 1;
    }
  }
  document.getElementById("result").textContent = password;
}

generate();

function generateRandomLowerCase() {
  return String.fromCharCode(generater(97, 122));
}

function generateRandomUpperCase() {
  return String.fromCharCode(generater(65, 90));
}

function generateRandomSymbol() {
  const symbol = "~*$%@#^&!?*'-=/,.{}()[]<>";
  return symbols[generater(0, symbols.length - 1)];
}

function generater() {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
