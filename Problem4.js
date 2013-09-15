#!/usr/bin/node

/*Largest palindrome product
Problem 4

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91  99.

Find the largest palindrome made from the product of two 3-digit numbers.*/

tools = require("./Tools");

var palindromes = new Array();
var a = 100;
var b = 999;

for(i = a; i <= b; i++){
    for(j = a; j <= b; j++){
	var n = j*i;
	var is_palindrome = false;
	var n_txt = n + '';
	var spl_l = n_txt.length;

	if(tools.isEven(spl_l)){
	    var first_part = n_txt.slice(0,spl_l/2);
	    var second_part = n_txt.slice(spl_l/2, n_txt.length);	    
	    
	    if(first_part == second_part.split("").reverse().join("")){
		palindromes.push(n);
	    }
	}
    }
}


console.log("The largest palindrome is " + Math.max.apply(Math, palindromes));
