import "./styles/main.css";

const submitButton = document.querySelector(".subscribe-form__button");
const emailInput = document.querySelector(".subscribe-form__input");
const checkboxInput = document.querySelector(".subscribe-form__input-checkbox");
const beforeSubmitBlock = document.querySelector(
  ".subscribe-form__controls-wrapper"
);
const afterSubmitBlock = document.querySelector(
  ".subscribe-form__success-submit"
);
const errorMessage = document.querySelector(".error-message");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (emailInput.checkValidity() && checkboxInput.checked) {
    beforeSubmitBlock.classList.add("inactive");
    afterSubmitBlock.classList.add("active");
  } else {
    if (!checkboxInput.checked) {
      errorMessage.textContent =
        "Por favor, acepte los términos y la política de privacidad.";

      errorMessage.style.display = "block";
    }
  }
});

// ------------------------------------------

const contentArr = Array.from(
  document.querySelectorAll(".marquee-line__content")
);

let screenWidth = window.innerWidth;

contentArr.forEach((content) => {
  while (content.offsetWidth < screenWidth * 2) {
    content.innerHTML += content.innerHTML;
  }
});

// ---------------------------------

let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScrollTop) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Ограничиваем значение, чтобы не было отрицательного
});

// ------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      this.classList.toggle("active");

      const content = this.parentElement;
      content.classList.toggle("active");
    });
  });
});
