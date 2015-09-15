var app = angular.module("codewarriorApp", ['ngRoute']);

app.config(function($routeProvider,$locationProvider) {
        console.log($routeProvider);
        console.log($locationProvider);
        $routeProvider

            // route for the home page
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
            // .when('/clients', {
            //     templateUrl : '/js/views/clients.html',
            //     controller  : 'clientsController'
            // })
            // .when('/blog', {
            //     templateUrl : '/js/views/blog.html',
            //     controller  : 'blogController'
            // })
            // .when('/career', {
            //     templateUrl : '/js/views/career.html',
            //     controller  : 'careerController'
            // })
            // .when('/contact', {
            //     templateUrl : '/js/views/contact.html',
            //     controller  : 'contactController'
            // })
            // .when('/404', {
            //     templateUrl : '/js/views/404.html',
            //     controller  : 'fourofourController'
            // })
           	.otherwise({templateUrl:'/js/views/404.html'});

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });

    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    app.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    app.controller('memberController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    app.controller('fourofourController', function($scope) {
        $scope.message = 'fourofourbro';
    });