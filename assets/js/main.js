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
    appearArticleClassList.classList.remove("hide");
  }
};

const startTest = () => {
  changeArticle("main", "qna");
};

const printQna = () => {
  
}

// const removeChildren = (parentNode) => {
//   while (parentNode.childElementCount) {
//     parentNode.removeChild(parentNode.querySelector("li"));
//   }
// };

// const printResult = (value) => {
//   let character = "";

//   const result = document.querySelector("#result");
//   const img = result.querySelector(".result__img");
//   const name = result.querySelector(".result__name");
//   const description = result.querySelector(".result__description");

//   switch (true) {
//     case value < 5:
//       character = "ekko";
//       break;
//     default:
//       character = "powder";
//       break;
//   }

//   img.style.backgroundImage = `url(${RESULTS[character].img})`;
//   name.innerText = RESULTS[character].name;
//   description.innerText = RESULTS[character].description;
// };

// const printQna = (questionNumber) => {
//   if (questionNumber > QNA.length) {
//     changeArticle("qna");
//     changeArticle("result");
//     shareKakao();
//     printResult(score);

//     return;
//   }

//   const qna = document.querySelector("#qna");
//   const statusBar = qna.querySelector(".status-bar");
//   const question = qna.querySelector(".question");
//   const answersContainer = qna.querySelector(".answers-container");

//   removeChildren(answersContainer);

//   statusBar.style.width = `${(100 * questionNumber) / QNA.length}%`;
//   question.innerText = QNA[questionNumber - 1].q;

//   QNA[questionNumber - 1].a.map((answer, i) => {
//     const li = document.createElement("li");
//     li.classList.add("answer");
//     li.innerText = answer.text;

//     li.addEventListener("click", () => {
//       score += QNA[questionNumber - 1].a[i].score;
//       printQna(++questionNumber);
//     });

//     answersContainer.appendChild(li);
//   });
// };

// const init = () => {
//   const start = document.querySelector(".start");

//   start.addEventListener("click", () => {
//     changeArticle("main");
//     changeArticle("qna");
//     printQna(1);
//   });
// };

// init();
