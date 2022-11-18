function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtnModal = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

closeBtnModal.forEach((btn) =>
  btn.addEventListener("click", () => {
    modalbg.style.display = "none";
  })
);

const regexName = /^[a-zA-Z\s-]{2,35}$/;

const regexEmail = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

let isValidate;
const formComplete = document.getElementById("form-complete");

const validate = () => {
  isValidate = true;
  for (let i = 0; i < formData.length; i++) {
    const label = formData[i].querySelector("label");
    const input = formData[i].querySelector("input");
    const errMsg = formData[i].querySelector(".error-message");
    let errorMessage = "";

    // Switch to give an action by type.
    switch (input.type) {
      case "text":
        if (!regexName.test(input.value)) {
          errorMessage =
            "Veuillez entrer 2 caractères ou plus pour le champ du " +
            label.textContent;
          isValidate = false;
        }

        break;

      case "email":
        if (!regexEmail.test(email.value)) {
          errorMessage = "Votre email n'est pas valide.";
          isValidate = false;
        }

        break;

      case "number":
        if (typeof Number(input.value) !== "number" || input.value === "") {
          errorMessage = "Veuillez choisir un nombre.";
          isValidate = false;
        }

        break;

      case "radio":
        let inputRadio = formData[i].querySelectorAll("input");
        let radioValue;

        for (let v = 0; v < inputRadio.length; v++) {
          if (inputRadio[v].checked) {
            radioValue = inputRadio[v].value;
          }
        }

        if (radioValue === undefined) {
          errorMessage = "Vous devez choisir une option.";
          isValidate = false;
        }

        break;

      case "checkbox":
        if (input.checked === false) {
          errorMessage =
            "Vous devez vérifier que vous acceptez les termes et conditions.";
          isValidate = false;
        }

        break;
    }

    // If message is empty
    if (input.value === "") {
      errorMessage = "Vous devez entrer votre " + label.textContent;
      isValidate = false;
    }

    // Border color for other type than type radio and checkbox
    if (errorMessage !== "") {
      if (input.type !== "radio" && input.type !== "checkbox") {
        input.style.border = "3px red solid";
      }
    } else {
      input.style.border = "3px #279e7a solid";
    }

    // Show error message
    errMsg.style.display = "block";
    errMsg.innerHTML = errorMessage;
  }

  //Global message validation
  if (isValidate) {
    formComplete.style.display = "flex";
  }
};

//No refreh form
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    firstname: document.getElementById("first").value,
    lastname: document.getElementById("last").value,
    email: document.getElementById("email").value,
    birthdate: document.getElementById("birthdate").value,
    quantity: document.getElementById("quantity").value,
    location: document.querySelector('input[name="location"]:checked').value,
    cgu: document.querySelector('input[name="cgu"]:checked').value,
  };

  console.log(data);
});
