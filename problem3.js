

function findPrime(num){
	for (y=num-1;y>1;y--) {
	  if(num%y === 0){return false;}
	} return num;
}

function findFactorals(x){
	var temp = 0
	for (i=2;i<x;i++){ 
		if(x%i === 0 && findPrime(i)){
		  	x=x/i;
		  	temp = i;
		}
	}
	if (i <= x && findPrime(i)){console.log(i);}
	else{console.log(temp);}
} 

var euler = 600851475143;

findFactorals(euler);





