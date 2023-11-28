const form = document.querySelector("[data-js=form]");
const submitButton = document.querySelector("[data-js=submitButton]");
const main = document.querySelector("[data-js=main]");

const question = document.querySelector('[data-js="yourQuestion"]');
const answer = document.querySelector('[data-js="yourAnswer"]');
const tags = document.querySelector('[data-js="tags"]');
const amountLeftQuestion = document.querySelector(
  '[data-js="amountLeftQuestion"]'
);
const amountLeftAnswer = document.querySelector('[data-js="amountLeftAnswer"]');
const amountLeftTags = document.querySelector('[data-js="amountLeftTags"]');
const maxLengthQuestion = yourQuestion.getAttribute("maxlength");
const maxLengthAnswer = yourAnswer.getAttribute("maxlength");
const maxLengthTags = tags.getAttribute("maxlength");

const updateAmountLeftQuestion = (value) => {
  amountLeftQuestion.innerText = value;
};

const updateAmountLeftAnswer = (value) => {
  amountLeftAnswer.innerText = value;
};

const updateAmountLeftTags = (value) => {
  amountLeftTags.innerText = value;
};

updateAmountLeftQuestion(maxLengthQuestion);
updateAmountLeftAnswer(maxLengthAnswer);
updateAmountLeftTags(maxLengthTags);

question.addEventListener("input", () => {
  updateAmountLeftQuestion(maxLengthQuestion - question.value.length);
});

answer.addEventListener("input", () => {
  updateAmountLeftAnswer(maxLengthAnswer - answer.value.length);
});

tags.addEventListener("input", () => {
  updateAmountLeftTags(maxLengthTags - tags.value.length);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  const newCardData = {
    newQuestion: formElements.yourQuestion.value,
    newAnswer: formElements.yourAnswer.value,
    newTags: formElements.tags.value,
  };
  console.log(newCardData);
  const card = document.createElement("card");
  const bookmark = document.createElement("a");
  const bookmarkIcon = document.createElement("img");
  const question = document.createElement("h2");
  const button = document.createElement("button");
  const answerText = document.createElement("p");
  const tags = document.createElement("ul");
  const tag = document.createElement("li");
  const tagButton = document.createElement("button");

  card.classList.add("question-card");
  bookmarkIcon.classList.add("bookmark-icon");
  button.classList.add("answer");
  answerText.classList.add("answer-text");
  answerText.classList.add("hidden");
  tags.classList.add("tags");
  tagButton.classList.add("tag");

  question.textContent = newCardData.newQuestion;
  button.textContent = "Show answer";
  answerText.textContent = newCardData.newAnswer;
  tagButton.textContent = newCardData.newTags;
  bookmarkIcon.setAttribute("src", "assets/bookmark.png");
  bookmarkIcon.setAttribute("data-js", "bookmark");
  button.setAttribute("data-js", "answer-button");
  answerText.setAttribute("data-js", "answer");

  main.append(card);
  card.append(bookmark);
  bookmark.append(bookmarkIcon);
  card.append(question);
  card.append(button);
  card.append(answerText);
  card.append(tags);
  tags.append(tag);
  tag.append(tagButton);

  button.addEventListener("click", () => {
    answerText.classList.toggle("hidden");
    if (button.innerHTML === "Show answer") {
      button.textContent = "Hide answer";
    } else {
      button.textContent = "Show answer";
    }
  });

  bookmark.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("bookmark-icon-checked");
  });

  form.reset();
});
