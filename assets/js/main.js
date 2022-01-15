Kakao.init("ab18867ed96936a5a2ddc9071318381d");
Kakao.isInitialized();

let score = 0;

const shareKakao = () => {
  Kakao.Link.createScrapButton({
    container: "#kakao-link-btn",
    requestUrl: "http://localhost:5500",
    templateId: 68876,
  });
};

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

  img.style.backgroundImage = `url(${RESULTS[value].img})`;
  name.innerText = RESULTS[value].name;
  description.innerText = RESULTS[value].description;
};

const printQna = (questionNumber) => {
  if (questionNumber > QNA.length) {
    isHide("qna");
    isHide("result");
    shareKakao();
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
