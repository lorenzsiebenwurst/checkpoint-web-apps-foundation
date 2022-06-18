export function passwordMinChars(pw1) {
  return pw1.length >= 10;
}
export function arePasswordsEqual(pw1, pw2) {
  return pw1 === pw2 && pw1 !== "";
}
export function isPasswordLowerCase(pw1) {
  const lowerCaseTest = (str) => /[a-z]/.test(str);
  return lowerCaseTest(pw1);
}
export function isPasswordUpperCase(pw1) {
  const upperCaseTest = (str) => /[A-Z]/.test(str);
  return upperCaseTest(pw1);
}

export function passwordContainsNumber(pw1) {
  const numberTest = (str) => /[0-9]/.test(str);
  return numberTest(pw1);
}

export function showHidePassword(btnText) {
  return btnText === "Show Passwords";
}

export function initApp() {
  const btn = document.querySelector("#show-hide");
  const firstPassword = document.querySelector("#first-password");
  const secondPassword = document.querySelector("#second-password");
  const equal = document.querySelector("#equal");

  btn.addEventListener("click", () => {
    if (showHidePassword(btn.innerText)) {
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
    const equalResult = arePasswordsEqual(
      firstPassword.value,
      secondPassword.value
    );
    if (equalResult) {
      equal.innerText = "Passwords are equal ✅";
    } else {
      equal.innerText = "Passwords are equal ❌";
    }
  }

  function lowerCase() {
    const lowerCase = document.querySelector("#lowerCase");
    const resultLowerCase = isPasswordLowerCase(firstPassword.value);
    if (resultLowerCase) {
      lowerCase.innerText = "Lower Case Letters ✅";
    } else {
      lowerCase.innerText = "Lower Case Letters ❌";
    }
  }

  function upperCase() {
    const upperCase = document.querySelector("#upperCase");
    const resultUpperCase = isPasswordUpperCase(firstPassword.value);
    if (resultUpperCase) {
      upperCase.innerText = "Upper Case Letters ✅";
    } else {
      upperCase.innerText = "Upper Case Letters ❌";
    }
  }

  function containsNumbers() {
    const containsNumbers = document.querySelector("#containsNumbers");
    const resultContainsNumber = passwordContainsNumber(firstPassword.value);
    if (resultContainsNumber) {
      containsNumbers.innerText = "Contains Numbers ✅";
    } else {
      containsNumbers.innerText = "Contains Numbers ❌";
    }
  }

  function minimumChars() {
    const minimumChars = document.querySelector("#minimumChars");
    if (passwordMinChars(firstPassword.value)) {
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
}
