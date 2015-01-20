angular.module('quizTime', [])
    .controller('QuizController', [

        function() {

            var self = this;

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

            var updateQuestion = function() {
                if (questions[self.questionCount]) {
                    self.question = questions[self.questionCount].question;
                }
            };

            self.init = function() {
                self.questionCount = 0;
                self.correct = 0;
                self.answer = '';

                updateQuestion();
            };

            self.init();

            self.answerQuestion = function() {

                if (self.answer == '') {
                    return;
                }

                if (self.answer.toUpperCase() === questions[self.questionCount].answer.toUpperCase()) {
                    alert('That\'s right!');
                    self.correct += 1;
                    self.answer = '';
                } else {
                    alert('That\'s wrong!');
                }

                self.answer = '';
                self.questionCount += 1;

                if (self.questionCount < questions.length) {
                    updateQuestion();
                } else {
                    alert('Quiz completed with ' + self.correct + ' correct answers!');
                    self.init();
                }

            };
        }
    ])

.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if (event.which === 13) {
                scope.$apply(function() {
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
})

.directive('focusMe', function($timeout, $parse) {
    return {
        // scope: true,   // optionally create a child scope
        link: function(scope, element, attrs) {
            var model = $parse(attrs.focusMe);
            scope.$watch(model, function(value) {
                if (value === true) {
                    $timeout(function() {
                        element[0].focus();
                    });
                }
            });
            // to address @blesh's comment, set attribute value to 'false'
            // on blur event:
            element.bind('blur', function() {
                scope.$apply(model.assign(scope, false));
            });
        }
    };
})
