var quiz = {
	currentQuestion: 0,
	items: [
		{
			question:"#1: Who recorded the 2nd most double doubles during the 2014-2015 NBA season?",
			options:[
				"Andre Drummond",
				"DeAndre Jordan",
				"Anthony Davis",
				"Pau Gasol",
				"DeMarcus Cousins"
			],
			userAnswer:null,
			correctAnswer:0
		},

		{
			question:"#2: Who led the league in steals per game during the 2014-2015 NBA season?",
			options:[
				"Russell Westbrook",
				"Kawhi Leonard",
				"Tony Allen",
				"Stephen Curry",
				"Chris Paul"
			],
			userAnswer:null,
			correctAnswer:1
		},

		{
			question:"#3: Who averaged the 5th most assists per game during the 2014-2015 NBA season?",
			options:[
				"Ty Lawson",
				"Lebron James",
				"Rajon Rondo",
				"John Wall",
				"Jeff Teague"
			],
			userAnswer:null,
			correctAnswer:2
		},

		{
			question:"#4: Which player did NOT make the 2014-2015 All Rookie 1st Team?",
			options:[
				"Elfrid Payton",
				"Jordan Clarkson",
				"Nerlens Noel",
				"Andrew Wiggins",
				"Zach LaVine"
			],
			userAnswer:null,
			correctAnswer:4
		},

		{
			question:"#5: Which player did NOT make the 2014-2015 All Defensive 1st Team?",
			options:[
				"Tony Allen",
				"Chris Paul",
				"Anthony Davis",
				"Draymond Green",
				"DeAndre Jordan"
			],
			userAnswer:null,
			correctAnswer:2
		},
	]
};

var numberOfCorrectAnswers = 0;


function displayQuizQuestion() {
	var position = quiz.currentQuestion;
	var item = quiz.items[position];

	//appends Question Number
	$(".question-number").html('Question #' + (position + 1));


	// appends the actual question
	$('#question').html(item.question); 
	var questionsContainer = $('#questions-container');
	questionsContainer.html('');


	// appends the next button
	var nextButtonContainer = $("#next-button-container");
	nextButtonContainer.html('<input class="next-button" type="submit" value="next">');


	// appends multiple choice answers
	for (var i = 0; i < item.options.length; i++) { 
		var option = $('<input class="input-one" type="radio" id="q' + i + '" name="quiz-item" value="' + i +'" required><label for="q' + i + '">' + item.options[i] + '</label><br/>');
		questionsContainer.append(option);
	}



	$("input[type='submit']").click(function(){
            var radioValue = $("input[name='quiz-item']:checked").val();
            if(radioValue == item.correctAnswer) {
                numberOfCorrectAnswers++;
                alert(numberOfCorrectAnswers);
            }
        });


};

function moveToNext() {
	quiz.currentQuestion++;
	displayQuizQuestion();
};


$(document).ready(function() {
	$(".score-page").hide();

	$(".start-button").click(function() {
		$(".landing").hide();
		displayQuizQuestion();
	});


});








