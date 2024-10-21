import "./styles/main.css";
console.log("hello world");

const submitButton = document.querySelector(".subscribe-form__button");
const beforeSubmitBlock = document.querySelector(
  ".subscribe-form__controls-wrapper"
);

const afterSubmitBlock = document.querySelector(
  ".subscribe-form__success-submit"
);

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  beforeSubmitBlock.classList.add("inactive");
  // afterSubmitBlockWrapper.add("active");
  afterSubmitBlock.classList.add("active");
});

// ------------------------------------------

const contentArr = Array.from(
  document.querySelectorAll(".creeping-line__content")
);

let screenWidth = window.innerWidth;

contentArr.forEach((content) => {
  // Дублируем содержимое до тех пор, пока его ширина не превысит ширину экрана в 2 раза
  while (content.offsetWidth < screenWidth * 2) {
    content.innerHTML += content.innerHTML;
  }
});
