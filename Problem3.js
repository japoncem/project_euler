#!/usr/bin/node

/*Largest prime factor
Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?*/

tools = require("./Tools");

var number_to_check = 600851475143;

console.log(
    "The Largest Prime Factor of " + number_to_check + " is " + Math.max.apply(Math,(tools.PrimeFactors(number_to_check))));
