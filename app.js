//クイズ（問題文/選択肢/答え）
const quiz = [
  {
    question: '青色絵の具に、赤色絵の具を同じ量混ぜたら、何色になるでしょうか',
    choices: [ '水色', '青色', '橙色', '紫色'],
    answer: '紫色',
  }, {
    question: '温泉卵を作るには、何度で茹でると出来上がる？',
    choices: [ '50度', '70度', '100度'],
    answer: '70度'
  }, {
    question: 'お餅を作りたい。何米を買えばいいの？',
    choices: [ 'うるち米', 'もち米', 'インディカ米', 'ジャスミン米'],
    answer: 'もち米'
  }
];

//変数,定数===置き場============
//$付きは、htmlのオブジェクト入り.
const $question = document.getElementById('js-question');
const $buttons = document.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

//問題の表示
const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].choices[btnIndex];
    btnIndex++;
  }
};

//goToNextは、クイズがあれば出題(init)する。無ければスコアを表示する。
const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    //showEnd();
    $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = document.getElementById('js-items');
  $items.style.visibility = 'hidden';
  }
};

//答えの判定。正解ならscoreに加算。判定終わればgoToNextへ。
const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].answer){
    window.alert('正解！良いね！！');
    score++;
  } else {
    window.alert('不正解！');
  }
  goToNext();
};

/*score表示。分けたい時は、goToNextのelseにshowEnd();を追加し、こちらを使用。
const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = document.getElementById('js-items');
  $items.style.visibility = 'hidden';
}; */

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].choices.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
