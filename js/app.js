var app = angular.module("codewarriorApp", ['ngRoute']);

app.config(function($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '/js/views/app.html',
            controller  : 'mainController'
        })
        .when('/about', {
            templateUrl : '/js/views/about.html',
            controller  : 'aboutController'
        })
        .when('/members', {
            templateUrl : '/js/views/member.html',
            controller  : 'memberController'
        })
       	.otherwise({templateUrl:'/js/views/404.html'});
    //$locationProvider.html5Mode(true);
});

app.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

app.controller('mainController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});
app.controller('memberController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

app.controller('fourofourController', function($scope) {
    $scope.message = 'fourofourbro';
});