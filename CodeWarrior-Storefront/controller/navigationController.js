angular.module('codewarriorApp').controller('navigationController', function($scope) {
    $scope.navigations = [
    	{
		   "name" : "Home",
		   "url" : "#/",
		   "displayOrder" : 0
		},
		{
		   "name" : "About",
		   "url" : "#/about",
		   "displayOrder" : 1
		},
		{
		   "name" : "Members",
		   "url" : "#/members",
		   "displayOrder" : 2
		},
		{
		   "name" : "Clients",
		   "url" : "#/clients",
		   "displayOrder" : 3
		},
		{
		   "name" : "Blog",
		   "url" : "#/blog",
		   "displayOrder" : 4
		},
		{
		   "name" : "Career",
		   "url" : "#/career",
		   "displayOrder" : 5
		},
		{
		   "name" : "Contact",
		   "url" : "#/contact",
		   "displayOrder" : 6
		}
	]
	$scope.$on('$viewContentLoaded', function(event) {
		$('#menu').slicknav({
			prependTo:'#mobile-menu',
			label: '',
			duration: 500,
			closeOnClick:true
		});
	});
});