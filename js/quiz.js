angular.module('quizTime', [])
    .controller('QuizController', ['$scope',
        function($scope) {
            $scope.questions = [{
                'question': 'Name a programming language that\'s also a gem',
                'answer': 'Ruby'
            }, {
                'question': 'Name a programming language that\'s also a snake',
                'answer': 'Python'
            }, {
                'question': 'What language do you use to style web pages?',
                'answer': 'CSS'
            }, {
                'question': 'What language do you use to build the structure of web pages?',
                'answer': 'HTML'
            }, {
                'question': 'What language do you use to add interactivity to a web page?',
                'answer': 'JavaScript'
            }]
            var questionCount = 0;
            $scope.reset = function() {
                $scope.question = $scope.questions[questionCount].question;
                $scope.answer = '';
            }
        }
    ]);
/*var container;

// quiz begins, no correct answers
var correct = 0;
var answer = '';

var questionCount = 0;

// array of questions and corresponding answers
var questions = [{
    'question': 'Name a programming language that\'s also a gem',
    'answer': 'Ruby'
}, {
    'question': 'Name a programming language that\'s also a snake',
    'answer': 'Python'
}, {
    'question': 'What language do you use to style web pages?',
    'answer': 'CSS'
}, {
    'question': 'What language do you use to build the structure of web pages?',
    'answer': 'HTML'
}, {
    'question': 'What language do you use to add interactivity to a web page?',
    'answer': 'JavaScript'
}];

function init() {
    // initialise event listeners
    document.getElementById('reset').addEventListener('click', start);
    document.getElementById('submitAnswer').addEventListener('click', answerQuestion);
}

function start() {
    correct = 0;
    questionCount = 0;
    updateTemplate();
}

function updateTemplate() {
    document.getElementById('question').innerHTML = questions[questionCount].question;
    document.getElementById('answerBox').value = '';
    document.getElementById('answerBox').focus();
}

function answerQuestion() {
    answer = document.getElementById('answerBox').value;

    if (answer.toUpperCase() === questions[questionCount].answer.toUpperCase()) {
        alert('That\'s right!');
        correct += 1;
    } else if (answer === '') {
        document.getElementById('warning').innerHTML = 'Please fill in the answer';
        return;
    } else {
        alert('That\'s wrong!');
    }

    questionCount += 1;

    if (questionCount < questions.length) {
        updateTemplate();
    } else {
        alert('Quiz completed with ' + correct + ' correct answers!');
    }
}
init();
*/
