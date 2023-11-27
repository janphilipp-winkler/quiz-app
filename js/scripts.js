const bookmark = document.querySelector("[data-js=bookmark]");
const answer = document.querySelector("[data-js=answer]");
const answerButton = document.querySelector("[data-js=answer-button]");

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark-icon-checked");
});

answerButton.addEventListener("click", () => {
  answer.classList.toggle("hidden");
  if (answerButton.innerHTML === "Show answer") {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }
});
