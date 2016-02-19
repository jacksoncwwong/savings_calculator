angular.module("savingsApp", []);

// let's define our controller

// adding our former calculate function
// but declaring the totalSavings variable outside of the function
// this is a scoping issue, originally I declared this in our calculate function
// and therefore it won't be available to our controller, remember scoping
// so declaring it outside of this function allows me to access it in our controller 
// and then using it to write to our "results" variable
var totalSavings = 0;
function calculate(formData) {
	var today = new Date();
	var currentMonth = today.getMonth();
	var currentYear = today.getYear() + 1900; //the way they calculate year is weird, for dates greater then 2000 you need to add 1900 to get it to current year

	var savingsYear = Number(formData.goalYear);
	var savingsMonth = Number(formData.goalMonth);

	var totalYears = savingsYear - currentYear;
	var totalMonths = (totalYears*12) + (savingsMonth - currentMonth);

	totalSavings = (Number(formData.monthlyContributions) * totalMonths) + Number(formData.currentSavings);

	if(totalSavings > Number(formData.savingsGoalAmt)) {
		var message = "savings goal is met!";
	}
	else {
		var message = "savings goal not met :(";
	}

	console.log("savings month is " + savingsMonth);
	console.log("current year " + currentYear);
	console.log("total months is " + totalMonths);
	console.log("total savings is " + totalSavings);
};


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

		// calling our calculate function that was written before
		calculate(formData);

		// we're writing out our results in our controller because we're not using
		// jQuery anymore, so $scope only exists in our controller because we loaded it in
		// when we wrote function($scope)
		// so if you tried to do any $scope stuff in our calculate function it wouldn't work
		// because you didn't load it into the Calculate function and it doesn't know
		// what you're talking about
		// but here, we did load it in, and it knows what $scope means, so we can use it
		// to manupulate our "results" variable
		$scope.results = "Savings Goal is: " + formData.savingsGoalAmt + " and your Savings Calculated is: " + totalSavings;

	}

	// validate form data

	// process form data

}

// we have to tell Angular to use our controller
angular
	.module("savingsApp")
	.controller("formController", formController)