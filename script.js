const quiz = [
{
question:"Which language is used for web page structure?",
A:"HTML",
B:"CSS",
C:"Java",
D:"Python",
answer:"A"
},
{
question:"Which language is used for styling?",
A:"HTML",
B:"CSS",
C:"JavaScript",
D:"Java",
answer:"B"
},
{
question:"Which language is used for interactivity?",
A:"Java",
B:"Python",
C:"JavaScript",
D:"C++",
answer:"C"
}
];

let current=0;
let score=0;

function loadQuestion(){

document.getElementById("question").innerHTML=quiz[current].question;

document.getElementById("A").innerHTML=quiz[current].A;

document.getElementById("B").innerHTML=quiz[current].B;

document.getElementById("C").innerHTML=quiz[current].C;

document.getElementById("D").innerHTML=quiz[current].D;

}

function checkAnswer(option){

if(option==quiz[current].answer){
score++;
}

}

function nextQuestion(){

current++;

if(current<quiz.length){
loadQuestion();
}
else{
document.querySelector(".container").innerHTML="<h2>Your Score : "+score+"/"+quiz.length+"</h2>";
}

}

loadQuestion();
