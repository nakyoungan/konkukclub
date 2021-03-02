const footer = document.getElementById('footer');
const wrap = document.getElementById('wrap');
const qna = document.getElementById('qna');
const tabletMQL = window.matchMedia('all and (min-width: 768px)');
const pcMQL = window.matchMedia('all and (min-width: 1024px)');

const ENDPOINT = 8;
const select = [];
let qIdx = -1;
function calcScore(){
   var pointArray = [
      { name: 'A', value: 0, key: 0 },
      { name: 'B', value: 0, key: 1 },
      { name: 'C', value: 0, key: 2 },
      { name: 'D', value: 0, key: 3 },
      { name: 'E', value: 0, key: 4 },
      { name: 'F', value: 0, key: 5 },
      { name: 'G', value: 0, key: 6 },
      { name: 'H', value: 0, key: 7 },
      { name: 'I', value: 0, key: 8 },
      { name: 'J', value: 0, key: 9 },
      { name: 'K', value: 0, key: 10 },
      { name: 'L', value: 0, key: 11 },
      { name: 'M', value: 0, key: 12 },
   ];

   for (let i = 0; i < ENDPOINT; i++) {
      var target = qnaList[i].a[select[i]];
      for (let j = 0; j < target.type.length; j++) {
         for (let k = 0; k < pointArray.length; k++) {
            if (target.type[j] === pointArray[k].name) {
               pointArray[k].value = pointArray[k].value + 1;
            }
         }
      }
   }

   let resultArray = pointArray.sort(function (a, b) {
      if (a.value > b.value) {
         return -1;
      }
      if (a.value < b.value) {
         return 1;
      }
      return 0;
   });

   console.log('결과 : ', resultArray);
   let resultword = resultArray[0].key;
   return resultword;
};

function setResult(){
  let point = calcScore();
  const titleDiv = document.querySelector('.resultTitle');
  titleDiv.innerHTML = infoList[point].name;

  const imgURL = 'img/png/' + point + '.png';
  var resultImage = document.createElement('img');
  const imgDiv = document.querySelector('.resultImage');
  resultImage.src = imgURL; //img.src
  resultImage.alt = point; //img.alt
  imgDiv.appendChild(resultImage);

  const descDiv = document.querySelector('.resultDesc');
  descDiv.innerHTML = infoList[point].desc;
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s"; // Code for Chrome, Safari and Opera
  qna.style.animation = "fadeOut 1s";     // Standard syntax

  setTimeout(() => {
      result.style.WebkitAnimation = "fadeIn 1s"; // Code for Chrome, Safari and Opera
      result.style.animation = "fadeIn 1s";     // Standard syntax
      setTimeout(() => {
          qna.style.display = 'none';
          result.style.display = 'block';
      }, 440);
  }, 440);
  setResult();
}

function addAnswer(answerText, idx, qIdx){
    const answerList = document.querySelector('.answerList');

    const answer = document.createElement('button');
    answer.innerHTML = answerText;
    answer.classList.add('answerBox');
    answer.classList.add('fadeIn');
    answerList.appendChild(answer);

    answer.addEventListener('click', () => {
        var children = document.querySelectorAll('.answerBox');
        for (let i = 0; i < children.length; i++){
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 1s"; // Code for Chrome, Safari and Opera
            children[i].style.animation = "fadeOut 1s";     // Standard syntax
        }

        setTimeout(() => {
          select[qIdx] = idx;
            for (let i = 0; i < children.length; i++){
                children[i].style.display = 'none';
            }
            goNext(qIdx+1);
        }, 980);
    });
}

function goNext(qIdx){
   if (qIdx === ENDPOINT) {
     goResult();
     return;
   }

   var status = document.querySelector('.status');
   status.style.width = (100/ENDPOINT) * (qIdx + 1) + '%';

   setTimeout(() => {
       qna.style.display = 'block';
   }, 440);

   const qNum = qnaList[qIdx];
   const q = document.querySelector('.qBox');
   q.innerHTML = qNum.q;

   for (let i in qNum.a) {
       addAnswer(qNum.a[i].answer, i, qIdx);
   }
}

function begin(){
   main.style.WebkitAnimation = "fadeOut 1s"; // Code for Chrome, Safari and Opera
   main.style.animation = "fadeOut 1s";     // Standard syntax

   setTimeout(() => {
       qIdx = 0;
       qna.style.WebkitAnimation = "fadeIn 1s"; // Code for Chrome, Safari and Opera
       qna.style.animation = "fadeIn 1s";     // Standard syntax
       goNext(qIdx);
       setTimeout(() => {
           main.style.display = 'none';
       }, 440);
   }, 440);
}

function load(){
   var startBtn = document.querySelector('#start');
   startBtn.addEventListener('click', function(event){
       startBtn.disabled = true;
       try{
           begin();
       }catch(err){
           console.log(err);
       }
   });
}

window.onload = load();
