//STATE
let currentQuestion = 1;
let totalQuestions = 5;
let score = 0;
let question = '';
let incrementer = 0;

let appState = {
	templates: [
		{ mainMenu: `<h1>This is the Overview of the Quiz</h1>
			<p>This quiz is about math. You will be given a problem. You will select one answer from multiple choices.</p>
			<button id="start">Start Quiz</button>`},
		{ questions: `<div class="top-bar"><span class="status">Question ${currentQuestion} of ${totalQuestions}</span><span class="score">Score: ${score}</span>
			</div>				
			<div class="question clearfix"><h2>${question}</h2>
			</div>					
			<form id="answers" action="">
				<button id="submit">SUBMIT</button>				
				<input type="radio" name="a2" value="a1" id="a3"><label for="a1">1st answer</label>	
				<input type="radio"><label for="a2">2nd answer</label>
				<input type="radio" value="third answer"><label for="a3">third answer</label>
				<input type="radio" name="four answer">	fourth answer
				<input type="radio" placeholder="fifth answer"><span>last answer</span>	
			</form>		
		  <div class="result">This is where the result will be. <button id="next">Next</button></div>`},
		{ results: `show how you did`}
	],
	quiz: [ 
		{ question: `What is 1 + 9 = `,
				firstAnswer: '4',
				secondAnswer: '8',
				thirdAnswer: '10',
				fourthAnswer: '1',
				fifthAnswer: '9'
	  },
		{ question: `What is good fam?`,
			  firstAnswer: 'Tee',
			  secondAnswer: 'Fleek',
			  thirdAnswer: 'Money',
			  fourthAnswer: 'Gucci',
			  fifthAnswer: 'Dat Stick'
		}
  ]
};

question = appState.quiz[incrementer].question;
console.log(question);
//CRUD--STATE MANAGEMENT
let crud = {
	currentQuestion: 1,
	totalQuestions: appState.quiz.length,
	startQuiz: function() {
		$('.quiz').html(showQuestions);
	},
	nextQuestion: function() {
		console.log('The second question will show!');
	}
};

//RENDER--DOM MANIPULATION
let showMainMenu = appState.templates[0].mainMenu;
let showQuestions = appState.templates[1].questions;
let showResults = appState.templates[2].results;


//EVENT LISTENERS
let startQuiz = function() {
	$('#start').click(crud.startQuiz);
};

let loadQuestion = function() {
	$('.question h2').html('Hello');
};

let nextQuestions = function() {
	$('#next').click(console.log('Yuppy!'));
	currentQuestion++;
};


$(function() {
	//loads the first state
	let quiz = $('.quiz');
	quiz.html(showMainMenu);
	
	startQuiz(quiz);
});

//var start = $('#start')
//var startButton = $('.quiz').find(start);
//
//console.log($(startButton));
//console.log(startButton);

//$('.quiz').on('click', 'button', function(event) {
	//$(this).click.crud.startQuiz;
	//console.log($(this));
	//event.target.click.crud.startQuiz;
//});


