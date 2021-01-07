function printData(data) {
  //obntener donde quiero poner los datos o los elementos 
  const containerData = document.getElementById('questions-container');
  //generar los datos /elementos
  let html = '';
  data.forEach(element => {
    html += `<div class="column">
    <div class="ui ${colorDifficulty(element.difficulty)} card">
    <div class="content">
    <div class="header">${element.category}</div>
    <div class="meta">
    <span class="right floated time">
    <a id="difficulty" class="ui ${colorDifficulty(element.difficulty)} right ribbon label">${capitalize(element.difficulty)}</a>
    </span>
    <span class="category">Type: ${capitalize(element.type)}</span>
    </div>
    <div class="description">
    <p class="ui justified">${element.question}</p>
    </div>
    </div>
    
    <div class="extra content">
    <div class="ui large transparent left icon input">
    <i class="lightbulb outline ${colorDifficulty(element.difficulty)} icon"></i>
    <input type="text" placeholder="Write answer">
  </div>
    </div>
    </div>
    </div>`
  });
  //poner los datos en el html

  containerData.innerHTML = html;
}


// $("#categoryOptions").addClass("disabled");
// $("#difficultyOptions").addClass("disabled");
// $("#tipeOptions").addClass("disabled");

function getQuestions() {

  const questionOptions = document.getElementById('questionOptions').value;
  const categoryOptions = document.getElementById('categoryOptions').value;
  const difficultyOptions = document.getElementById('difficultyOptions').value;
  const tipeOptions = document.getElementById('tipeOptions').value;

  // Remueve la clase disabled pero no funciona ni con jquery
  $("#categoryOptions").removeClass("disabled");
  $("#difficultyOptions").removeClass("disabled");
  $("#tipeOptions").removeClass("disabled");

  const url = `https://opentdb.com/api.php?amount=${questionOptions}${categoryOptions}${difficultyOptions}${tipeOptions}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => printData(data.results));
}

$('.ui.dropdown').dropdown(); // inicializa el select en semantic ui

// Funcion con switch para determinar el color de algunos elementos segun la dificultad
function colorDifficulty(difficulty) {
  switch (difficulty) {
    case 'hard':
      return 'red';
      break;
    case 'medium':
      return 'blue';
      break;
    case 'easy':
      return 'green';
      break;
  }
}


// Funcion para capitalizar
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}