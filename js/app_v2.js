angular.module("savingsApp", []);

// let's define our controller

var formController = function($scope){

	// retrieve form data
	// let's start by grabbing a single input and testing
	// to see if we're grabbing it correctly, we're just going to
	// console.log the input to see if this is happening
	// and of course, we'll have to write this in a function
	// and after we write this function we have to call it in our html
	$scope.getFormData = function(){

		var formData = {
			'savingsGoal': $scope.savingsGoalAng,
			'goalMonth': $scope.goalMonthAng,
			'goalYear': $scope.goalYearAng,
			'savingsGoalAmt': $scope.savingsGoalAmtAng,
			'currentSavings': $scope.currentSavingsAng,
			'monthlyContributions': $scope.monthlyContributionsAng
		}

		console.log(formData);

	}

	// validate form data

	// process form data

}

// we have to tell Angular to use our controller
angular
	.module("savingsApp")
	.controller("formController", formController)