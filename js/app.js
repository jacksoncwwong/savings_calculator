$(document).ready(function(){
	console.log("Savings Calcuator App loaded");

	// step 1 fetch data from user through form
	$('form').submit(
		function(event){
			console.log("You've submitted");

			var savingsGoal = $('#savingsGoal').val();
			console.log("Savings Goal is: " + savingsGoal);
			event.preventDefault();
		}
	)
	// step 2 process the data

	// step 3 return the results to the front-end



});