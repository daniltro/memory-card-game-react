import "./styles/main.css";
console.log("hello world");

const submitButton = document.querySelector(".subscribe-form__button");
const beforeSubmitBlock = document.querySelector(".subscribe-form__controls-wrapper");
const afterSubmitBlock = document.querySelector(
  ".subscribe-form__success-submit"
);

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  beforeSubmitBlock.classList.add("inactive");
  afterSubmitBlock.classList.add("active");
});
