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

function getQuestions() {
  const questionOptions = document.getElementById('questionOptions').value;
  const categoryOptions = document.getElementById('categoryOptions').value;
  const difficultyOptions = document.getElementById('difficultyOptions').value;
  const tipeOptions = document.getElementById('tipeOptions').value;

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



function categorias() {
  const catData = document.getElementById('categoryOptions');
  const cat = {
    "categories": [{
      "id": 9,
      "name": "General Knowledge"
    }, {
      "id": 10,
      "name": "Entertainment: Books"
    }, {
      "id": 11,
      "name": "Entertainment: Film"
    }, {
      "id": 12,
      "name": "Entertainment: Music"
    }, {
      "id": 13,
      "name": "Entertainment: Musicals & Theatres"
    }, {
      "id": 14,
      "name": "Entertainment: Television"
    }, {
      "id": 15,
      "name": "Entertainment: Video Games"
    }, {
      "id": 16,
      "name": "Entertainment: Board Games"
    }, {
      "id": 17,
      "name": "Science & Nature"
    }, {
      "id": 18,
      "name": "Science: Computers"
    }, {
      "id": 19,
      "name": "Science: Mathematics"
    }, {
      "id": 20,
      "name": "Mythology"
    }, {
      "id": 21,
      "name": "Sports"
    }, {
      "id": 22,
      "name": "Geography"
    }, {
      "id": 23,
      "name": "History"
    }, {
      "id": 24,
      "name": "Politics"
    }, {
      "id": 25,
      "name": "Art"
    }, {
      "id": 26,
      "name": "Celebrities"
    }, {
      "id": 27,
      "name": "Animals"
    }, {
      "id": 28,
      "name": "Vehicles"
    }, {
      "id": 29,
      "name": "Entertainment: Comics"
    }, {
      "id": 30,
      "name": "Science: Gadgets"
    }, {
      "id": 31,
      "name": "Entertainment: Japanese Anime & Manga"
    }, {
      "id": 32,
      "name": "Entertainment: Cartoon & Animations"
    }]
  };
  let html = '';
  html += `
  <i class="dropdown icon"></i>
  <option value=" ">Cualquier Categoria</option>`;

  cat.categories.forEach(categorias => {
    html += `<option value="&category=${categorias.id}">${categorias.name}</option>`;
  });
  catData.innerHTML = html;
}

categorias();