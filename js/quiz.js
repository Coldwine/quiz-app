angular.module('quizTime', [])
    .controller('QuizController', ['$scope',
        function($scope) {
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
                if (questions[$scope.questionCount]) {
                    $scope.question = questions[$scope.questionCount].question;
                }
            };

            $scope.init = function() {
                $scope.questionCount = 0;
                $scope.correct = 0;
                $scope.answer = '';

                updateQuestion();
            };

            $scope.init();

            $scope.answerQuestion = function() {
                if ($scope.answer == '') {
                    return;
                }
                if ($scope.answer.toUpperCase() === questions[$scope.questionCount].answer.toUpperCase()) {
                    alert('That\'s right!');
                    $scope.correct += 1;
                    $scope.answer = '';
                } else {
                    alert('That\'s wrong!');
                }

                $scope.answer = '';

                if ($scope.questionCount < questions.length) {
                    $scope.questionCount += 1;
                    updateQuestion();
                } else {
                    alert('Quiz completed with ' + correct + ' correct answers!');
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
            //scope: true,   // optionally create a child scope
            link: function(scope, element, attrs) {
                var model = $parse(attrs.focusMe);
                scope.$watch(model, function(value) {
                    console.log('value=', value);
                    if (value === true) {
                        $timeout(function() {
                            element[0].focus();
                        });
                    }
                });
                // to address @blesh's comment, set attribute value to 'false'
                // on blur event:
                element.bind('blur', function() {
                    console.log('blur');
                    scope.$apply(model.assign(scope, false));
                });
            }
        };
    });
