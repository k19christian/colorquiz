var currentQuestion = 0;
var score = 0;
var x = getRndInteger(0,2);
var totQuestions = question2[x].length;


var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var col = document.getElementById('color')
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var redoButton = document.getElementById('redoButton');
var resultBox = document.getElementById('box');



function loadQuestion (questionIndex) {
	var q = question2[x][questionIndex];
		questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
		col.style.backgroundColor = q.color;
		opt1.textContent = q.option1;
		opt2.textContent = q.option2;
		opt3.textContent = q.option3;
		opt4.textContent = q.option4;
};

function getRndInteger(min,max) {
	return Math.floor(Math.random() * (max-min + 1)) + min;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer !');
		return;
	}
	var answer = selectedOption.value;
	if(question2[x][currentQuestion].answer != answer){
		alert('Right ? WRONG !');	
	}
	if(question2[x][currentQuestion].answer == answer){
		alert('Correct !');	
		score += 20;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		resultCont.setAttribute('style', 'white-space: pre;');
		container.style.display = 'none';
		resultCont.style.display = '';
		resultBox.style.display = '';
		resultCont.textContent = 'Your Score: ' + score + " / 100 \r\n";
		if (score == 0) {
			resultCont.textContent += "\r\nWOAH, BAD LUCK !";
			redoButton.style.display = '';
			redoButton.textContent = 'Try Again ?';
		}
		if (score == 20) {
			resultCont.textContent += "\r\nBETTER THAN NOTHING RIGHT ?";
			redoButton.style.display = '';
			redoButton.textContent = 'Try Again ?';
		}
		if (score == 40) {
			resultCont.textContent += "\r\nARE YOU DUMB OR SOMETHING ?";
			redoButton.style.display = '';
			redoButton.textContent = 'Try Again ?';
		}
		if (score == 60) {
			resultCont.textContent += "\r\nA SCORE FOR RETAKE ?!";
			redoButton.style.display = '';
			redoButton.textContent = 'Try Again ?';
		}
		if (score == 80) {
			resultCont.textContent += "\r\nNICELY DONE !";
			redoButton.style.display = '';
			redoButton.textContent = 'Try Again ?';
		}
		if (score == 100) {
			resultCont.textContent += "\r\nY O U  A R E  A W E S O M E !";
			redoButton.style.display = '';
			redoButton.textContent = 'Try Again ?';
		}
		return;
	}
	loadQuestion(currentQuestion);
}
function retakeQuiz () {
	window.location.href="index2.html"
};

loadQuestion(currentQuestion);