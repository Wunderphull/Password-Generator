// Object 'keys' wrapped around strings of all allowed letters, numbers, and symbols.

const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
};

// Array of functions to select a random value from the allowed upperCase, lowerCase, number, and symbol lists.
  const createKey = [
    function upperCase() {
      return [Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
      return [Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
      return [Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
      return [Math.floor(Math.random() * keys.number.length)];
    }
  ];

// Checking that createKey is working like it should lmao
console.log(createKey.length);

function passGen() {
  // Checking that at least one checkbox is selected.
  // Making variables: each checks the value of the ID :
  // Checkboxes are boolean: no check is 0 and checked is 1:
  const upper = document.getElementById("upperCase").checked;
  const lower = document.getElementById("lowerCase").checked;
  const number = document.getElementById("number").checked;
  const symbol = document.getElementById("symbol").checked;
  // If one is selected, the anwer will be above zero, and this will be falsy and the alert will not print.
  if (upper + lower + number + symbol === 0) {
    alert("You really need at least one checked checkbox.");
    return;
  };

// Defining variables for passwordBox and length, as well as password variable with a value of null(?).
  const passwordBox = document.getElementById("passwordBox");
  const length = document.getElementById("length");
  let password = "";
// While the numeric value of the length variable is greater than the length of the generating password;
  while (length.value > password.length) {
// keyToAdd is equal to the createKey[number in the array generated by a random integen(1 or 0) * length of createKey (4)]
    let keyToAdd = createKey[Math.floor(Math.random() * createKey.length)];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if (isChecked) {
      password += keyToAdd();
    };
  };
  passwordBox.innerHTML = password;
};