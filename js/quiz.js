document.querySelector("#start").addEventListener(
  "click",
  function() {
    var el = document.getElementById('start_box');
    el.remove(); 
  }
)

const quizData = [{
    question: "Сколько планет в солнечной системе?",
    a: "8",
    b: "9",
    c: "7",
    d: "11",
    correct: "a",
  },
  {
    question: "Какая планета до 2006 года считалась девятой планетой солнечной системы?",
    a: "Церера",
    b: "Меркурий",
    c: "Плутон",
    d: "Эрида",
    correct: "c",
  },
  {
    question: "Солнечная система является частью галактики:",
    a: "Млечный путь",
    b: "Андромеда",
    c: "Ланиакея",
    d: "Орион",
    correct: "a",
  },
  {
    question: "Солнце-типичный представитель этого класса звезд:",
    a: "желтый карлик",
    b: "белый карлик",
    c: "красный гигант",
    d: "пульсар",
    correct: "a",
  },
  {
    question: "Пояс астероидов расположен:",
    a: "между орбитами Марса и Юпитера",
    b: "между Солнцем и Меркурием",
    c: "за орбитой Плутона",
    d: "между орбитами Сатурна и Нептуна",
    correct: "a",
  },
  {
    question: "Эта планета могла стать звездой, но не набрала достаточной массы:",
    a: "Меркурий",
    b: "Нептун",
    c: "Сатурн",
    d: "Юпитер",
    correct: "d",
  }
  ];
  let index = 0;
  let correct = 0,
  incorrect = 0,
  total = quizData.length;
  let questionBox = document.getElementById("questionBox");
  let allInputs = document.querySelectorAll("input[type='radio']")
  const loadQuestion = () => {
  if (total === index) {
    return quizEnd()
  }
  reset()
  const data = quizData[index]
  questionBox.innerHTML = `${index + 1}) ${data.question}`
  allInputs[0].nextElementSibling.innerText = data.a
  allInputs[1].nextElementSibling.innerText = data.b
  allInputs[2].nextElementSibling.innerText = data.c
  allInputs[3].nextElementSibling.innerText = data.d
  }
  
  document.querySelector("#submit").addEventListener(
  "click",
  function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
  }
  )
  
  const getAnswer = () => {
  let ans;
  allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
  )
  return ans;
  }
  
  const reset = () => {
  allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
  )
  }
  
  const quizEnd = () => {
  // console.log(document.getElementsByClassName("container"));
  document.getElementsByClassName("quiz")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100">
            <div class="ww">
                <div class="text">Вы набрали ${correct} / ${total} баллов</div>
                <div><img src="img/congratulations_5.png" id="congrats"></div>
            </div>
         </h3>
    </div>
  `
  }
  loadQuestion(index);