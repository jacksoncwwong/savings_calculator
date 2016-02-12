$(document).ready(function(){
	console.log("Savings Calcuator App loaded");

	// step 1 fetch data from user through form
	$('form').submit(
		function(event){
			console.log("You've submitted");

			var savingsGoal = $('#savingsGoal').val();
			var goalMonth = $('#goalMonth').val();
			var goalYear = $('#goalYear').val();
			var savingsGoalAmt = $('#savingsGoalAmt').val();
			var currentSavings = $('#currentSavings').val();
			var monthlyContributions = $('#monthlyContributions').val();

			var formData = {
				"savingsGoal": savingsGoal,
				"goalMonth": goalMonth,
				"goalYear": goalYear,
				"savingsGoalAmt": savingsGoalAmt,
				"currentSavings": currentSavings,
				"monthlyContributions": monthlyContributions
			}

			calculate(formData);


			console.log("Savings Goal is: " + savingsGoal);
			console.log(formData);




			event.preventDefault();
		}
	)
	// step 2 process the data

	// step 3 return the results to the front-end
});

function calculate(formData) {
	var today = new Date();
	var currentMonth = today.getMonth();
	var currentYear = today.getYear() + 1900;

	var savingsYear = Number(formData.goalYear);
	var savingsMonth = Number(formData.goalMonth);

	var totalYears = savingsYear - currentYear;
	var totalMonths = (totalYears*12) + (savingsMonth - currentMonth);

	console.log("savings month is " + savingsMonth);
	console.log("current year " + currentYear);
	console.log(totalMonths);
};