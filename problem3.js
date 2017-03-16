function findFactorals(x){
	for (i=2;i<x;i++){
		if(x%i === 0 && findPrime(i)){console.log(i);}
	} 
}

function findPrime(num){
	for (i=2;i<num;i++) {
		if(num%i === 0){return false;}
	} return num;
}



//solution  - above stuff is notes
function findFactorals(x){
	for (i=x-1;i>1;i--){
		if(x%i === 0 && findPrime(i)){console.log(i);}
	} 
}

function findPrime(num){
	for (z=num-1;z>1;z--) {
		if(num%z === 0){return false;}
	} return num;
}