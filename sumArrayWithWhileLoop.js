// When an array of numbers is passed to this 
// function it sums the numbers in the array
// simmilar to a past exercise but utilzing a
// while-loop this time.

// Instructions: 
// 1.) Copy/Paste code below into the console.
// 2.) Set the array sumNumbers equal to an array of numbers.
// e.g. -  sumNumbers = [1, 2, 3];
// 3.) Call the function sumArray with the sumArray as an argument.
// e.g. - sumArrayWithWhileLoop(sumNumbers);

var sumNumbers = [];
var sumArrayWithWhileLoop = function(array) {
	var length = sumNumbers.length;
	var sumTotal = 0;
	var i = 0;
		while (i < length) {
			sumTotal += array[i];
			i++; 
		}
		return sumTotal;
}
												// e.g. -  sumNumbers = [1, 2, 3];
												// e.g. -  sumArrayWithWhileLoop(sumNumbers);