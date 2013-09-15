module.exports = {
    //Return sum of each element of numeric array
    sumArray: function(arr){
	var r = 0;
	for(i in arr){
	    r += arr[i];
	}
	return r;
    },

    //Return true if n is even number
    isEven: function(n){
	return n%2 === 0;
    },

    //Return true if n if odd number
    isOdd: function(n){
	return n%2 !== 0;
    },

    FibosLowerThan: function(n){
	var fibos = new Array();
	fibos.push(1);
	
	while(true){
	    if(fibos.length < 2){
		fibos.push(2);
	    }else{
		var new_fibo = (fibos[fibos.length -1] + fibos[fibos.length-2]);
		if(new_fibo >= n){
		    return fibos;
		}else{
		    fibos.push(new_fibo);
		}
	    }
	}
	return fibos;
    },

    JustEvenNumbers: function(arr){
	var evens = new Array();
	for(i in arr){
	    if(this.isEven(arr[i])){
		evens.push(arr[i]);
	    }
	}
	return evens;
    },

    IsPrime: function(n){
	var limit = Math.sqrt(n);

	if(limit >= 2){
	    for(i = 2; i <= limit; i++){
		if(n%i === 0){
		    return false;
		}
	    }
	}
	return true;
    },
    
    PrimeFactors: function(n){
	var prime_factors = new Array();
	
	for(i = 1; i <= n; i++){
	    if((n%i) === 0){//Is factor
		//Check if prime
		var limit = Math.sqrt(i);
		var is_prime = true;

		for(j = 2; j < limit; j++){
		    if((i%j) === 0){
			is_prime = false;
		    }
		}		
		
		if(is_prime){
		    prime_factors.push(i);
		    n = n/i;
		}
	    }
	}

	return prime_factors;
    }
}
