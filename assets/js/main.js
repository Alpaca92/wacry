let score = 0;

const isHide = (id) => {
  const target = document.querySelector(`#${id}`);
  const classList = target.classList.value.split(" ");

  classList.includes("hide")
    ? target.classList.remove("hide")
    : target.classList.add("hide");
};

const printQna = (questionNumber) => {
  const qna = document.querySelector("#qna");
  const statusBar = qna.querySelector(".status-bar");
  const question = qna.querySelector(".question");
  const answers = qna.querySelectorAll(".answer");

  statusBar.style.width = `${(100 * questionNumber) / QNA.length}%`;
  question.innerText = QNA[questionNumber - 1].q;
  Array.from(answers).map((answer, i) => {
    answer.innerText = QNA[questionNumber - 1].a[i].text;
    answer.addEventListener("click", () => {
      score += QNA[questionNumber - 1].a[i].score;
      printQna(++questionNumber);
    });
  });
};

const init = () => {
  const start = document.querySelector(".start");

  start.addEventListener("click", () => {
    isHide("main");
    isHide("qna");
  });
  printQna(1);
};

init();
