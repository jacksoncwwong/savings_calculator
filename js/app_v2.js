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


		// so here it's important that $scope.whatever, that the "whatever"
		// part is the same as your ng-model="whatever" in your html
		// so you'll see here that my $scope.whatever always ends with an Ang
		// and that's because in my html they all end with an Ang
		// but the "key" for an object here, can be whatever I want
		// the only thing is when I call on that property later I have to remember what I named it
		// so it makes more sense to make them relatively similar
		// so what I mean is if I was to find out what the savings goal is
		// I would call formData.savingsGoal, not formData.savingsGoalAng
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