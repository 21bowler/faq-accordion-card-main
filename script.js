const quiz = document.querySelectorAll(".question");
console.log(quiz);
const paragraph = document.querySelectorAll(".hidden");
console.log(paragraph);

const showParagraphh = function () {
  paragraph.forEach((p) => {
    p.classList.toggle("hidden");
  });
};

quiz.forEach((q) => q.addEventListener("click", showParagraphh));

// if (q.parentNode.classList.contains("active")) {
//   q.parentNode.classList.toggle("active");
// } else {
//   quiz.forEach((q) => q.parentNode.classList.remove("active"));
//   q.parentNode.classList.add("active");
// }
