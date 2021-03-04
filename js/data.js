/*
A : 구기체육개인
B : 구기체육팀
C : 레저스포츠
D : 무예무술
E : 자연과학탐사
F : 창작
G : 연행예술
H : 자연과학 학술
I : 비평
J : 사회과학
K : 인문어학
L : 종교
M : 봉사
*/


const qnaList = [
  {
    q: '1. 나는 스트레스를 받으면',
    a: [
      { answer: '이럴땐 몸을 움직여야지! 운동을 간다.', type: ['A', 'B', 'C', 'D', 'E'] },
      { answer: '마음의 휴식이 필요해... 책을 읽는다.', type: ['H', 'I', 'J', 'K'] },
      { answer: '창작 속에서 평화를.. 창작활동을 즐긴다', type: ['F', 'G'] },
      { answer: '나눔에서 행복을! 나눔을 실천한다.', type: ['M'] },
      { answer: '신이시어 제게 왜 이런 시련을... 기도를 한다.', type: ['L'] },
  ]
  },
  {
    q: '2. 나는 운동을 할 때',
    a: [
      { answer: '개인의 역량이 중요한 운동이 재미있다.', type: ['A'] },
      { answer: '팀워크를 뽐낼 수 있는 운동이 재미있다.', type: ['B'] },
    ]
  },
  {
    q: '3. 나는 방학 계획을 세울 때',
    a: [
      { answer: '나의 신앙심을 보여줄때가..! 종교생활을 즐긴다.', type: ['L'] },
      { answer: '드디어 방학이다~ 학기중에 못 나갔던 봉사를 간다.', type: ['M'] },
      { answer: '방학은 자기개발의 시간! 학업과 관련된 일을 한다.', type: ['H', 'I', 'J', 'K'] },
      { answer: '건강이 최고! 이 기회에 운동을 한다.', type: ['A', 'B', 'C', 'D', 'E'] },
      { answer: '전부터 가고싶던 전시회, 공연 등에 간다.', type: ['F', 'G'] },
    ]
  },
  {
    q: '4. 눈이 녹으면?',
    a: [
      { answer: '봄이 온다...', type: ['K'] },
      { answer: '눈이 왜 녹았는지 기사를 찾아본다.', type: ['J'] },
      { answer: '물이 된다.', type: ['H'] },
      { answer: '눈에 대해서 사람들과 대화를 나누고 싶다.', type: ['I'] },
    ]
  },
  {
    q: '5. 나는 미술작품이나 연극을 볼 때',
    a: [
      { answer: '내가 직접 창작하는게 뿌듯해 창작에 도전하는 편이다.', type: ['F'] },
      { answer: '창작물을 보고 다른 사람과 관련 의견을 공유하는 편이다.', type: ['G'] },
    ]
  },
  {
    q: '6. 나는 시험 전날에',
    a: [
      { answer: '시험 잘 보게 해주세요... 기도를 한다.', type: ['L'] },
      { answer: '시험은 무슨 놀러나 가야지~ 놀러 나간다.', type: ['F', 'G'] },
      { answer: '공부나 해야지... 공부를 한다.', type: ['H', 'I', 'J', 'K'] },
      { answer: '피가 잘 돌아야 공부도 되지! 운동을 간다.', type: ['A', 'B', 'C', 'D', 'E'] },
      { answer: '착한 일을 한 자에게 복이 온다! 봉사에 간다.', type: ['M'] },
    ]
  },
  {
    q: '7. 나는 보통',
    a: [
      { answer: '동굴탐사, 수중탐사 등 직접 탐사하는데 흥미가 있다.', type: ['E'] },
      { answer: '보드, 수영 등 레저스포츠를 즐긴다.', type: ['C'] },
      { answer: '태권도, 택견 등 무예 무술을 즐기는 편이다.', type: ['D'] },
    ]
  },
  {
    q: '8. 나에게 가장 큰 행복은',
    a: [
      { answer: '봉사를 통해 남에게 도움이 될 때이다.', type: ['M'] },
      { answer: '종교활동을 할 때이다.', type: ['L'] },
    ]
  },
]

const infoList = [
  {
    name: '구기체육형 - 개인' ,
    desc: '<font face="SDSamliphopangche_Basic">당신은 배드민턴, 테니스 등 개인의 역량이 중요한 구기체육 동아리가 적합할 것 같네요! 당신에게 추천하는 건국대학교 동아리는 다음과 같습니다.</font> <br> <img src="img/result/0.png" width="4000" height="5000">',
  },
  {
    name: '구기체육형 - 팀' ,
    desc: '<font face="SDSamliphopangche_Basic">당신은 축구, 농구 등 팀워크가 중요한 구기체육 동아리가 적합할 것 같네요! 당신에게 추천하는 건국대학교 동아리는 다음과 같습니다.</font> <br> <img src="img/result/1.png" width="4000" height="5000">',
  },
  {
    name: '레저무예형 - 레저' ,
    desc: '<font face="SDSamliphopangche_Basic">당신은 여락을 겸한 스포츠인 레저스포츠 동아리에 적합할 것 같네요! 당신에게 추천하는 건국대학교 동아리는 다음과 같습니다.</font> <br> <img src="img/result/2.png" width="4000" height="5000">',
  },
  {
    name: '레저무예형 - 무예',
    desc: '<font face="SDSamliphopangche_Basic">당신은 태권도, 검도 등 맨몸으로 하는 운동 동아리에 적합할 것 같네요! 당신에게 추천하는 건국대학교 동아리는 다음과 같습니다.</font> <br> <img src="img/result/3.png" style="max-width: 100%; height: auto;">',
  },
  {
    name: '자연과학형 - 탐사',
    desc: '<font face="SDSamliphopangche_Basic">당신은 동굴 탐사, 천체 관측 등 새로운 세계를 탐사하는 동아리에 적합할 것 같네요! 당신에게 추천하는 건국대학교 동아리는 다음과 같습니다.</font> <br> <img src="img/result/4.png" style="max-width: 100%; height: auto;">',
  },
  {
    name: '창착비평형 - 창작' ,
    desc: '<font face="SDSamliphopangche_Basic">당신은 창작을 두려워하지 않고 즐기는 사람이네요! 당신에게 추천하는 건국대학교 동아리는 다음과 같습니다.</font> <br> <img src="img/result/5.png" style="max-width: 100%; height: auto;">',
  },
  {
    name: '연행예술형',
    desc: '<font face="SDSamliphopangche_Basic">당신은 밴드, 댄스 동아리에 적합할 것 같네요! 당신에게 추천하는 건국대학교 동아리는 다음과 같습니다.</font> <br> <img src="img/result/6.png" style="max-width: 100%; height: auto;">',
  },
  {
    name: '자연과학형 - 학술' ,
    desc: '<font face="SDSamliphopangche_Basic">당신은 발명, 코딩 등 한 분야를 깊이 있게 다루는 동아리에 적합할 것 같네요! 당신에게 추천하는 건국대학교 동아리는 다음과 같습니다.</font> <br> <img src="img/result/7.png" style="max-width: 100%; height: auto;">',
  },
  {
    name: '창작비평형 - 비평',
    desc: '<font face="SDSamliphopangche_Basic">당신은 자신의 생각을 다른 사람과 나누는 것에 거리낌이 없는 사람이네요! 당신에게 추천하는 건국대학교 동아리는 다음과 같습니다.</font> <br> <img src="img/result/8.png" style="max-width: 100%; height: auto;">',
  },
  {
    name: '사회과학형' ,
    desc: '<font face="SDSamliphopangche_Basic">당신은 사회의 문제에 관심을 갖는 사람이네요! 당신에게 추천하는 건국대학교 동아리는 다음과 같습니다.</font> <br> <img src="img/result/9.png" style="max-width: 100%; height: auto;">',
  },
  {
    name: '인문어학형' ,
    desc: '<font face="SDSamliphopangche_Basic">당신은 문제에 대해 고민하고 해결하는 것에 열중하는 사람이네요! 당신에게 추천하는 건국대학교 동아리는 다음과 같습니다.</font> <br> <img src="img/result/10.png" style="max-width: 100%; height: auto;">',
  },
  {
    name: '종교형' ,
    desc: '<font face="SDSamliphopangche_Basic">당신은 깊은 신앙심을 가지고 있는 사람이네요! 당신에게 추천하는 건국대학교 동아리는 다음과 같습니다.</font> <br> <img src="img/result/11.png" style="max-width: 100%; height: auto;"">',
  },
  {
    name: '봉사형' ,
    desc: '<font face="SDSamliphopangche_Basic">당신은 누군가를 도우며 뿌듯함을 느끼는 것을 좋아하는 사람이네요! 당신에게 추천하는 건국대학교 동아리는 다음과 같습니다.</font> <br> <img src="img/result/12.png"style="max-width: 100%; height: auto;">',
  },
]
