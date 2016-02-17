var app = angular.module("codewarriorApp", ['ngRoute','ngAnimate']);
// ROUTING CONFIG
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '/CodeWarrior-Storefront/views/pageTemplate/homePageTemplate.html',
            controller  : 'homePageController'
        })
        .when('/about', {
            templateUrl : '/CodeWarrior-Storefront/views/pageTemplate/aboutPageTemplate.html',
            controller  : 'aboutController'
        })
        .when('/members', {
            templateUrl : '/CodeWarrior-Storefront/views/pageTemplate/memberPageTemplate.html',
            controller  : 'memberController'
        })
       	.otherwise({templateUrl:'/CodeWarrior-Storefront/views/pageTemplate/404PageTemplate.html'});
    //$locationProvider.html5Mode(true);
});

// CONTROLLER IN CodeWarrior-Storefront/controller/
// PLEASE ADD the extension in index.html as well

// COMPONENT SET IN DIRECTIVE available in CodeWarrior-Storefront/views/
app.directive('footercomponent', function() {
  return {
    restrict: 'E',
    templateUrl: '/CodeWarrior-Storefront/views/components/footer.html'
  };
});
app.directive('headercomponent', function() {
  return {
    restrict: 'E',
    templateUrl: '/CodeWarrior-Storefront/views/components/header.html',
    controller: 'navigationController'
  };
});