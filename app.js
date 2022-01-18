// fetch() afin de relier le fichier json (fonction async)
async function getJson() {
    const data = await fetch("http://localhost:5501/index.json");
    return data.json();
}



// fonction principale, en async également car recours à fetch( une nouvelle fois)
async function check() {
    document.querySelector('form').addEventListener('submit', submit);
    questions = await getJson(); //récupère data json sous forme de tableau
    shuffleArray(questions); //randomise le tableau
    questions = questions.slice(0, 5); //on sélectionne le nombre de questions à afficher
    showQuestions();
    showResult();
}

// fonction de tri aléatoire du tableau
function shuffleArray(array) {
    return array.sort(() => 0.5 - Math.random());
}



function showResult() {
    document.querySelector('form').innerHTML += `
   <div id="result">
      <div id="score"></div>
      <button type="submit" class="btn">L'enfer sur terre !</button>
   </div>`;
}

function showQuestions() { //fonction pour afficher les questions et les choix de réponses
    var form = document.querySelector('form');
    for (i = 1; i < questions.length + 1; i++) {
        question = questions[i - 1];
        //remplissage du formultaire
        form.innerHTML += ` 
      <div id="question${i}" class="question">
         <div class="quest">${question.question}</div>
         <div class="answer">
               <input type="radio" name="question${i}" id="answer${i}-1" value="0">
               <label for="answer${i}-1">${question.propositions[0]}</label>
         </div>
         <div class="answer">
               <input type="radio" name="question${i}" id="answer${i}-2" value="1">
               <label for="answer${i}-2">${question.propositions[1]}</label>
         </div>
         <div class="answer">
               <input type="radio" name="question${i}" id="answer${i}-3" value="2">
               <label for="answer${i}-3">${question.propositions[2]}</label>
         </div>
         <div class="answer">
               <input type="radio" name="question${i}" id="answer${i}-4" value="3">
               <label for="answer${i}-4">${question.propositions[3]}</label>
         </div>
      </div>
      `;
    }
}

// récup des valeurs de champs radio
function inputValue(name) {
    var input = document.querySelector('input[name= ' + name + ']:checked');

    if (input) {
        return input.value;
    }
    return null;
}

function submit(event) { //valide le quiz, score et fin
    event.preventDefault();
    var score = 0;
    for (let i = 0; i < questions.length; i++) {
        var answerNumber = inputValue('question' + (i + 1));

        var answer = questions[i].propositions[answerNumber];
        var bonneRep = questions[i].reponse;

        var label = document.querySelectorAll('#question' + (i + 1) + ' label');

        // Réinitialise la couleur des réponses
        for (let l = 0; l < label.length; l++) {
            label[l].parentNode.classList.remove('green');
            label[l].parentNode.classList.remove('red');
        }

        // Compte le score et applique les couleurs
        if (answerNumber) {
            if (answer == bonneRep) {
                score++;
                label[answerNumber].parentNode.classList.add('green');
            } else {
                label[answerNumber].parentNode.classList.add('red');
            }
        }
    }

    // Affiche le score + petite phrase en fonction du score
    if (score < 5) {
        document.getElementById('score').innerHTML = `Ton score est de ${score}. 
                Essaye encore!`;
    } else {
        document.getElementById('score').innerHTML = `
                Parfait!
                Tu as maîtrisé le Quiz tel un full stack, GG!`;
    }
}

check();