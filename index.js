function generate() {
  let password = "";

  let length = +document.getElementById("length");
  let lowerCase = document.getElementById("lowercase");
  let upperCase = document.getElementById("uppercase");
  let symbols = document.getElementById("symbols");
  let numbers = document.getElementById("numbers");

  if (lowerCase + upperCase + symbols + number <= 0)
    return;

for (let i = 0; i < length; i += 1) {
    const r = generate(0, 3);
    if (lowerCase && r === 0) {
      password += generateRandomLowerCase();
    } else if (upperCase && r === 1) {
      password += generateRandomUpperCase();
    } else if (symbols && r === 2) {
      password += generateRandomSymbol();
    } else if (numbers && r === 3) {
      password += generate(0, 9)
    } else {
      i -= 1;
    }
  }
  document.getElementById('result') = password;
}

generate();


function generateRandomLowerCase() {
  return String.fromCharCode(97, 122);
}

function generateRandomUpperCase() {
  return String.fromCharCode(65, 90);
}

function generateRandomSymbol() {
  const symbol = "~*$%@#^&!?*'-=/,.{}()[]<>";
  return symbols[generate(0, symbols.length - 1)]
}

function generate() {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}