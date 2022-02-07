const QNA = [
  {
    question: "처음 하는 일에 나는?",
    answers: [
      {
        text: "능숙하게 처음부터 잘한다.",
        score: 9,
      },
      {
        text: "몇 번 해보면 금방 잘하게 되는 편이다.",
        score: 8,
      },
      {
        text: "익숙해지는데 시간이 좀 걸리지만 잘한다.",
        score: 7,
      },
      {
        text: "남들보다 적응하는데 시간이 좀 걸리는 편이다.",
        score: 5,
      },
    ],
  },
  {
    question: "누군가 골목에서 위협을 받는다면?",
    answers: [
      {
        text: "경찰에 신고하고 출동까지 지켜본다.",
        score: 6,
      },
      {
        text: "세상이 흉흉하다며 몰래 찍어 유튜브에 올린다.",
        score: 2,
      },
      {
        text: "나도 피해볼 수 있다. 관여하지 않는다.",
        score: 1,
      },
    ],
  },
  {
    question: "확고한 목표가 있나요?",
    answers: [
      {
        text: "뚜렷한 목표가 있다.",
        score: 10,
      },
      {
        text: "뚜렷하진 않지만 목표가 있다.",
        score: 8,
      },
      {
        text: "새해 목표같은 가벼운 목표가 있다.",
        score: 7,
      },
      {
        text: "목표대신 매일 본능에 충실하게 살고있다.",
        score: 2,
      },
    ],
  },
  {
    question: "누군가 당신에게 못생겼다고 한다면?",
    answers: [
      {
        text: "알게뭐람? 나는 내 외모가 맘에든다고 말해준다.",
        score: 7,
      },
      {
        text: "그렇게 생각할 수도 있지하고 넘어간다.",
        score: 5,
      },
      {
        text: "기분이 살짝 나쁘다.",
        score: 3,
      },
      {
        text: "기분나쁘다. 너도 못생겼다고 말해준다.",
        score: 1,
      },
    ],
  },
  {
    question: "힘든 일이 있다는 친구가 술마시자 하면?",
    answers: [
      {
        text: "당장만나자! 어디로 가야되냐고 물어본다.",
        score: 10,
      },
      {
        text: `늦게까진 못마셔😅
        적당히 얘기를 듣고 집으로 간다.`,
        score: 7,
      },
      {
        text: `오늘은 나도 힘들다😢
        미안하다말하고 집에서 쉰다.`,
        score: 2,
      },
    ],
  },
  {
    question: "조별과제의 리더가 되었다면?",
    answers: [
      {
        text: `역할을 잘 배분하고
        팀원을 다독여 잘 마무리한다.`,
        score: 9,
      },
      {
        text: "사다리 타기로 역할을 정한다.",
        score: 6,
      },
      {
        text: "참여안한 팀원의 이름을 빼버린다.",
        score: 1,
      },
    ],
  },
  {
    question: "전단지 알바가 전단지를 건넨다면?",
    answers: [
      {
        text: "대꾸도 하지 않는다.",
        score: 10,
      },
      {
        text: "양손으로 가볍게 거절의사를 표시한다.",
        score: 6,
      },
      {
        text: "괜찮다고 하고 가던 길을 간다.",
        score: 5,
      },
      {
        text: `거절을 못하겠다.
        어차피 버릴거지만 일단 받는다.`,
        score: 3,
      },
    ],
  },
];

const RESULTS = {
  jayce: {
    img: "assets/img/arcane-jayce.png",
    name: "jayce",
    description: `당신은 항상 자신에게 주어진 일에 충실하며
      용감하고 상당히 똑똑합니다. 책임감을 가지고
      항상 주변 사람들을 신경 쓰려 노력합니다.`,
  },
  powder: {
    img: "assets/img/arcane-powder.png",
    name: "powder",
    description: `당신은 질투심이 남들보다 강한 편입니다.
      비록 실수를 할 때도 있지만 질투심을 원동력으로
      항상 잘해보려고 하는 열정이 가득한 사람입니다.`,
  },
  silco: {
    img: "assets/img/arcane-silco.png",
    name: "silco",
    description: `당신은 겉으로는 차가워 보일 수 있지만
      주변 사람들을 누구보다 사랑하는 따뜻한 사람입니다.
      이성적이지만 때로는 사랑하는 것을 지키기 위해
      논리적으로 맞지않는 선택을 할 때도 있습니다.
      `,
  },
  viktor: {
    img: "assets/img/arcane-viktor.png",
    name: "viktor",
    description: `당신은 변화를 두려워하지 않는 혁신가입니다.
      한 가지에 몰두하여 시간 가는 줄 모르는
      뛰어난 집중력을 갖고 있습니다.`,
  },
};
