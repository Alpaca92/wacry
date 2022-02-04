Kakao.init("ab18867ed96936a5a2ddc9071318381d");
Kakao.isInitialized();
Kakao.Link.createScrapButton({
  container: "#kakao-link-btn",
  requestUrl: "http://localhost:5500",
  templateId: 68876,
});

let score = 0;

const changeArticle = (disappearArticleId, appearArticleId) => {
  const disappearArticle = document.querySelector(`#${disappearArticleId}`);
  const disappearArticleClassList = disappearArticle.classList.value.split(" ");
  const appearArticle = document.querySelector(`#${appearArticleId}`);
  const appearArticleClassList = appearArticle.classList.value.split(" ");

  if (
    !disappearArticleClassList.includes("hide") &&
    appearArticleClassList.includes("hide")
  ) {
    disappearArticle.classList.add("hide");
    appearArticle.classList.remove("hide");
  }
};

const startTest = () => {
  printQna(1);
  changeArticle("main", "qna");
};

const printResult = (score) => {
  const resultImage = document.querySelector("#result .result__img");
  const resultName = document.querySelector("#result .result__name");
  const resultDescription = document.querySelector(
    "#result .result__description"
  );

  let character = {};

  switch (true) {
    case score < 5:
      character = RESULTS.caitlyn;
      break;
    default:
      character = RESULTS.silco;
      break;
  }

  const { img, name, description } = character;

  resultImage.style.backgroundImage = `url(${img})`;
  resultName.innerText = name;
  resultDescription.innerText = description;
};

const updateProgressBar = (questionNumber) => {
  const progressBar = document.querySelector("#qna .progress-bar");

  progressBar.style.width = `${(100 * questionNumber) / QNA.length}%`;
};

const removeChildren = (parentNode) => {
  while (parentNode.childElementCount) {
    parentNode.removeChild(parentNode.querySelector("button"));
  }
};

const printQna = (questionNumber) => {
  if (questionNumber > QNA.length) {
    changeArticle("qna", "result");
    printResult(score);

    return;
  }

  const question = document.querySelector("#qna .question");
  const answerContainer = document.querySelector("#qna .answers-container");

  updateProgressBar(questionNumber);
  removeChildren(answerContainer);

  question.innerText = QNA[questionNumber - 1].question;

  QNA[questionNumber - 1].answers.forEach((answer) => {
    const button = document.createElement("button");

    button.innerText = answer.text;
    button.classList.add("answer");
    button.onclick = () => {
      score += answer.score;
      printQna(++questionNumber);
    };

    answerContainer.appendChild(button);
  });
};

const goHome = () => {
  score = 0;
  changeArticle("result", "main");
};
