var i = 0;
var goodResult = [];
var correctCount = 0 ;
let acceptingAnswer = true;
 let questionCounter =0;
 let score =0;
 let availableQuestion=[];
const CORREC_BONUS = 100;
const MAX_QUESTION=23;
var getInput = getElemensbyTagName;
var userResult =[];
//const randomMonth = jsonData[Math.floor(Math.random(index) * jsonData.length)];

//rempli mon html avec mes donné "Json"
function generate(index) {
    document.getElementById("question").innerHTML = jsonData[index].question;
    document.getElementById("optt1").innerHTML = jsonData[index].choice1;
    document.getElementById("optt2").innerHTML = jsonData[index].choice2;
    document.getElementById("optt3").innerHTML = jsonData[index].choice3;
    document.getElementById("optt4").innerHTML = jsonData[index].choice4;
}


// Mélange le tableau json   
shuffleArray(jsonData);  
 // Fonction RÉCUPÉRATION DU FICHIER JSON contenant le quiz   // en “async” car elle utilise fetch() et “await”    
  // Fonction MÉLANGE ALÉATOIRE du tableau  
     function shuffleArray(array) {         return array.sort(() => 0.5- Math.random());       }

 





















  function increment(){

  }

function color(){}

     
    
    


function checkAnswer() {
    if (document.getElementById("choice1").checked && jsonData[i].choice1== jsonData[i].answer)
    {
        document.getElementById("choice1").style.backgroundColor='green';
       correctCount++;

    }
    if (document.getElementById("choice2").checked && jsonData[i].choice2 == jsonData[i].answer) {
        document.getElementById("choice2").style.backgroundColor='green';
        
        correctCount++;
    }
    if (document.getElementById("choice3").checked && jsonData[i].choice3 == jsonData[i].answer) {
        document.getElementById("choice3").style.backgroundColor='green';
       
        correctCount++;
    }
    if (document.getElementById("choice4").checked && jsonData[i].choice4 == jsonData[i].answer) {
        document.getElementById("choice4").style.backgroundColor='green';
        
        correctCount++;
    }
    // incrementation pour changer de question 
    
    i++;
    if(jsonData.length-1 < i){
        document.write("<body style='background-color:#348322;'>");
        document.write("<div style='color:#ffffff;font-size:18pt;text-align:center;'>*****Ton score de BG : "+correctCount+"*****</div>");
        document.write("</body>");
    }
    // Rappel pour generer
    generate(i);
}
//var reponse = document.getElementById('answer').value;
//if(reponse == 'answer'){
  
  // document.getElementById("answer").style.color="green";
//} else {
  
  // document. getElementById("answer").style.color="red";
//}