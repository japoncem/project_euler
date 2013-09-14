#!/usr/bin/node
/*Multiples of 3 and 5
Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.*/

Number.prototype.divides= function(n){
    return (n % this) === 0;
}

function sumArray(arr){
    var r = 0;
    for(i in arr){
	r += arr[i];
    }
    return r;
}

var LIMIT = 1000;
var a = 3, b = 5;
var multiples = new Array;

function loadMultiples(){
    for(i = 1; i < LIMIT; i++){
	if(a.divides(i) || b.divides(i)){
	    multiples.push(i);
	}
    }
}

loadMultiples();
console.log("The sum of the multiples is " + sumArray(multiples));
