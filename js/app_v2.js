angular.module("savingsApp", []);

// let's define our controller

var formController = function($scope){

	// we're just testing to see if we're connected properly

	$scope.test = "TESTING!!!";

	// retrieve form data

	// validate form data

	// process form data

}

// we have to tell Angular to use our controller
angular
	.module("savingsApp")
	.controller("formController", formController)