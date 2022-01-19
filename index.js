var i = 0;
var correctCount = 0 ;
let acceptingAnswer = true;
let questionCounter =0;
let score =0;
let availableQuestion=[];
const CORREC_BONUS = 100;
const MAX_QUESTION=23;
var nom = prompt("Indiquez votre nom");
var getInput = Array.from(document.getElementsByTagName('input')); // Récupération des inputs 
//console.log(getInput)
var getLabel = Array.from(document.getElementsByTagName('span'));
//console.log(getLabel);



//const randomMonth = jsonData[Math.floor(Math.random(index) * jsonData.length)];
 // Fonction RÉCUPÉRATION DU FICHIER JSON contenant le quiz   // en “async” car elle utilise fetch() et “await”    



// Fonction MÉLANGE ALÉATOIRE du tableau  
function shuffleArray(array) {         
    return array.sort(() => 0.5- Math.random());       
}

// Mélange le tableau json   
shuffleArray(jsonData);  

//rempli mon html avec mes donné "Json"
function generate(index) {
    document.getElementById("question").innerHTML = jsonData[index].question;
    
    document.getElementById("optt1").innerHTML = jsonData[index].choice1;
    document.getElementById("optt2").innerHTML = jsonData[index].choice2;
    document.getElementById("optt3").innerHTML = jsonData[index].choice3;
    document.getElementById("optt4").innerHTML = jsonData[index].choice4;
    
    document.getElementById("choice1").value = jsonData[index].choice1;
    document.getElementById("choice2").value = jsonData[index].choice2;
    document.getElementById("choice3").value = jsonData[index].choice3;
    document.getElementById("choice4").value = jsonData[index].choice4;

    
}





/* Boucle pour créer un évenement sur les inputs */
for(index = 0; index < getInput.length; index++){
    getInput[index].addEventListener('click', changeColor);
}


/* Fonction qui va colorer les labels des inputs */
function changeColor(){
    
    getInput.forEach(element => {
        if(element.checked && element.type == 'radio'){
            
            getLabel.forEach(label => {

                if(label.innerHTML == element.value && element.value == jsonData[i].answer){
                    label.classList.add("correct");
                }
                else if(label.innerHTML == element.value && element.value != jsonData[i].answer){
                    label.classList.add("incorrect");
                }
                else{
                    label.style.backgroundColor = "none";
                }

            });
            /* Permet de rendre tous les inputs non cliquables une fois que la réponse est cliquée */
            document.querySelectorAll('input').forEach(
                (element)=> {
                    element.disabled = true;
                }
            );
        }
    });
    
}



/* Fonction qui va check les réponses */
function checkAnswer() {

    if (document.getElementById("choice1").checked && jsonData[i].choice1== jsonData[i].answer)
    { document.write.
        correctCount++;
    }
    if (document.getElementById("choice2").checked && jsonData[i].choice2 == jsonData[i].answer) {

        correctCount++;
    }
    if (document.getElementById("choice3").checked && jsonData[i].choice3 == jsonData[i].answer) {
    document
        correctCount++;
    }
    if (document.getElementById("choice4").checked && jsonData[i].choice4 == jsonData[i].answer) {
        
        correctCount++;
    }
      localStorage.setItem(nom,correctCount)
    // incrementation pour changer de question 
    i++;

    if(jsonData.length-1 < i){
        document.write("<body style='background-color:#348322;'>");
        document.write("<div id='salut' style='color:#ffffff;font-size:18pt;text-align:center;'>*****Ton score de BG : "+correctCount+"*****</div>");
        document.write("</body>");
        for (let i = 0; i < 10 ; i++){
          var bValue = localStorage.key(i)
          var aValue= localStorage.getItem(bValue)
         
          div = document.getElementById("salut")
          var c = document.createElement("p")
         
          c.style.color = "red";
          const cNode = document.createTextNode("Nom: " + (bValue)+ " Score: ")
          const dNode = document.createTextNode(aValue)
          
          c.appendChild(cNode)
          c.appendChild(dNode)
          div.appendChild(c)
          div.appendChild(c)
            
    }
    function compareNombres(a, b) {
        return a - b;
        aValue.sort(compareNombres)
      }
  }
    /* Enlever la classe correct ou incorrect des labels */
    getLabel.forEach(label => {
        label.classList.remove("correct");
        label.classList.remove("incorrect");
    });

    /* Enlever l'effet "disable" pour les inputs*/
    document.querySelectorAll('input').forEach(
        (mesInputs)=> {
            mesInputs.disabled = false;
        }
    );

    // Rappel pour generer
    generate(i); 
}

for(let qIndex = 0; qIndex < allQuestions.length; qIndex++)
   {
      // Récupère l imput ( dans html)  de la réponse choisie 
      inputChecked = document.querySelector('input[name=question' + jsonData+ ']:checked');

      // Si la réponse n'est pas vide
      if (inputChecked) {
         var anwser = inputChecked.value; // Réponse choisie
         var goodAnswer = jsonData[qIndex].reponse; // Bonne réponse
         var anecdote =  all[qIndex].anecdote; // je recupere les anecdotes
         var h3 = document.querySelector('#question' + qIndex + ' h3'); // je recupere mon h3 dans  le HTML

         // Si la réponse est bonne
         if (anwser == goodAnswer) {
            score++; // +1
         //affichage bonne réponse en vert
            inputChecked.parentNode.classList.add("valid")//parenNode permet de selectionner le parent de l'imput (ici div answers ds html)
           h3.innerText = anecdote; // affichage de l'anecdote
         // sinon affichage réponse en rouge
            }else{ 
            inputChecked.parentNode.classList.add("invalid")
         }

      }
[4:21 PM]
var anecdote =  allQuestions[qIndex].anecdote; // je recupere les anecdotes
         var h3 = document.querySelector('#question' + qIndex + ' h3'); // je recupere mon h3 dans  le HTML
     h3.innerText = anecdote; // affichage de l'anecdote tu mets la derniere ligne dans t a condition vert ou rouge
//CONSTANTS
//const CORRECT_BONUS = 100;
//const MAX_QUESTIONS = 24;



//var reponse = document.getElementById('answer').value;
//if(reponse == 'answer'){
  
  // document.getElementById("answer").style.color="green";
//} else {
  
  // document. getElementById("answer").style.color="red";
//}