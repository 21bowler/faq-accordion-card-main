const questions = document.querySelectorAll(".accordion-question");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    const clicked = e.target.closest(".accordion-question");
    const answer = clicked.querySelector(".answer");
    const clickedActive = clicked.classList.contains("active");
    clicked.classList.toggle("active");
    if (clickedActive) {
      answer.style.maxHeight = null;
    } else {
      const scrollHeight = answer.scrollHeight;
      answer.style.maxHeight = `${scrollHeight}px`;
    }
  });
});

questions[0].click();
