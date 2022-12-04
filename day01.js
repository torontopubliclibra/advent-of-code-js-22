// establish input
const input = document.querySelector("body").innerHTML.trim();

// sort calories
const sortedMeals = input

    // split into groups
	.split("\n\n")

    // map each group to an array of numbers
	.map((group) => group.split("\n"))

    // add up each group
	.map((group) => group.reduce((o, v) => o + parseInt(v), 0))

    // sort the numbers in ascending order
	.sort((a, b) => b - a);

// log the 0 index
console.log(sortedMeals[0]);

// log the sum of the first three items
console.log(sortedMeals[0] + sortedMeals[1] + sortedMeals [2]);