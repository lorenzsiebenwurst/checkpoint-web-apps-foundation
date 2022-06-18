const btn = document.querySelector("#show-hide");
const firstPassword = document.querySelector("#first-password");
const secondPassword = document.querySelector("#second-password");
const equal = document.querySelector("#equal");

btn.addEventListener("click", () => {
  if (btn.innerText === "Show Passwords") {
    btn.innerText = "Hide Passwords";
    firstPassword.type = "text";
    secondPassword.type = "text";
  } else {
    btn.innerText = "Show Passwords";
    firstPassword.type = "password";
    secondPassword.type = "password";
  }
});

document.querySelector("body").addEventListener("input", () => {
  checkEqual();
  if (equal.innerText === "Passwords are equal ✅") {
    lowerCase();
    upperCase();
    containsNumbers();
    minimumChars();
  } else {
    uncheck();
  }
});

function checkEqual() {
  if (
    firstPassword.value === secondPassword.value &&
    firstPassword.value !== ""
  ) {
    equal.innerText = "Passwords are equal ✅";
  } else {
    equal.innerText = "Passwords are equal ❌";
  }
}

function lowerCase() {
  const lowerCase = document.querySelector("#lowerCase");
  const lowerCaseTest = (str) => /[a-z]/.test(str);
  if (lowerCaseTest(firstPassword.value)) {
    lowerCase.innerText = "Lower Case Letters ✅";
  } else {
    lowerCase.innerText = "Lower Case Letters ❌";
  }
}

function upperCase() {
  const upperCase = document.querySelector("#upperCase");
  const upperCaseTest = (str) => /[A-Z]/.test(str);
  if (upperCaseTest(firstPassword.value)) {
    upperCase.innerText = "Upper Case Letters ✅";
  } else {
    upperCase.innerText = "Upper Case Letters ❌";
  }
}

function containsNumbers() {
  const containsNumbers = document.querySelector("#containsNumbers");
  const numberTest = (str) => /[0-9]/.test(str);
  if (numberTest(firstPassword.value)) {
    containsNumbers.innerText = "Contains Numbers ✅";
  } else {
    containsNumbers.innerText = "Contains Numbers ❌";
  }
}

function minimumChars() {
  const minimumChars = document.querySelector("#minimumChars");
  if (firstPassword.value.length >= 10) {
    minimumChars.innerText = "At least 10 characters long ✅";
  } else {
    minimumChars.innerText = "At least 10 characters long ❌";
  }
}

function uncheck() {
  const lowerCase = document.querySelector("#lowerCase");
  const upperCase = document.querySelector("#upperCase");
  const containsNumbers = document.querySelector("#containsNumbers");
  const minimumChars = document.querySelector("#minimumChars");
  lowerCase.innerText = "Lower Case Letters ❌";
  upperCase.innerText = "Upper Case Letters ❌";
  containsNumbers.innerText = "Contains Numbers ❌";
  minimumChars.innerText = "At least 10 characters long ❌";
}
