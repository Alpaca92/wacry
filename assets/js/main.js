let score = 0;
let share = ``;

const isHide = (id) => {
  const target = document.querySelector(`#${id}`);
  const classList = target.classList.value.split(" ");

  classList.includes("hide")
    ? target.classList.remove("hide")
    : target.classList.add("hide");
};

const removeChildren = (parentNode) => {
  while (parentNode.childElementCount) {
    parentNode.removeChild(parentNode.querySelector("li"));
  }
};

const printResult = (value) => {
  const result = document.querySelector("#result");
  const img = result.querySelector(".result__img");
  const name = result.querySelector(".result__name");
  const description = result.querySelector(".result__description");
  const shareKakaoBtn = result.querySelector(".result__share-kakao");

  img.style.backgroundImage = `url(${RESULTS[value].img})`;
  name.innerText = RESULTS[value].name;
  description.innerText = RESULTS[value].description;
};

const printQna = (questionNumber) => {
  if (questionNumber > QNA.length) {
    isHide("qna");
    isHide("result");
    printResult(score);

    return;
  }

  const qna = document.querySelector("#qna");
  const statusBar = qna.querySelector(".status-bar");
  const question = qna.querySelector(".question");
  const answersContainer = qna.querySelector(".answers-container");

  removeChildren(answersContainer);

  statusBar.style.width = `${(100 * questionNumber) / QNA.length}%`;
  question.innerText = QNA[questionNumber - 1].q;

  QNA[questionNumber - 1].a.map((answer, i) => {
    const li = document.createElement("li");
    li.classList.add("answer");
    li.innerText = answer.text;

    li.addEventListener("click", () => {
      score += QNA[questionNumber - 1].a[i].score;
      printQna(++questionNumber);
    });

    answersContainer.appendChild(li);
  });
};

const init = () => {
  /*
  get query string
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  */

  const start = document.querySelector(".start");

  start.addEventListener("click", () => {
    isHide("main");
    isHide("qna");
    printQna(1);
  });
};

init();
