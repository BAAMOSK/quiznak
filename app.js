//STATE
let appState = {
	views: [
		{ mainMenu: `<h1>This is the Overview of the Quiz</h1>
			<p>This quiz is about math. You will be given a problem. You will select one answer from multiple choices.</p>
			<button id="start">Start Quiz</button>`},
		{ questions: `questions array here.`},
		{ results: `show how you did`}
	],
	quiz: [ {questions: `What is 1 + 9 = `}, {questions: `What is good fam?`} ]
};

//CRUD--STATE MANAGEMENT
let crud = {	
	startQuiz: function() {
		$('.quiz').html(showQuestions);
	}
};

//RENDER--DOM MANIPULATION
let showMainMenu = appState.views[0].mainMenu;
let showQuestions = appState.views[1].questions;


//EVENT LISTENERS
let startQuiz = function() {
	$('#start').click(crud.startQuiz);
};


$(function() {
	//loads the first state
	let quiz = $('.quiz');
	//quiz.html(showMainMenu);
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


