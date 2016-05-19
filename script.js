// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function process1() {
	var userNumber = document.getElementById("userNumber1").value;
	var multiples = [];
	for(var i = 1; i < userNumber; i++) {
		if(i % 3 === 0 || i % 5 === 0) {
			multiples.push(i);
		};
	};
	var sum = multiples.reduce((a, b) => a + b, 0);
	var result = document.getElementById("result1");
	result.innerHTML = sum;
};

//Each new term in the Fibonacci sequence is generated by adding the previous 
//two terms. By starting with 1 and 2, the first 10 terms will be:
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//By considering the terms in the Fibonacci sequence whose values
//do not exceed four million, find the sum of the even-valued terms.

function process2() {
	var userNumber = document.getElementById("userNumber2").value;
	var fibonacci = [1, 2];
	var i = 1;
	var term = 0;
	
	while(fibonacci[fibonacci.length - 1] < userNumber) {
		var term = fibonacci[i] + fibonacci[i - 1];
		fibonacci.push(term);
		i++;
	};
	fibonacci.splice(-1,1);
	var fibonacciEven = [];
	
	for(j = 0; j < fibonacci.length; j++) {
		if(fibonacci[j] % 2 === 0) {
			fibonacciEven.push(fibonacci[j]);
		};
	};
	var sum = fibonacciEven.reduce((a, b) => a + b, 0);
	var result = document.getElementById("result2");
	result.innerHTML = sum;
};

//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

function process3() {
	var userNumber = document.getElementById("userNumber3").value;
	var i = 2;
	while(userNumber > i) {
		if(userNumber % i === 0) {
			userNumber = userNumber / i;
		} else {
			i++;
		};
	};
	var result = document.getElementById("result3");
	result.innerHTML = userNumber;
};

