function findFactorals(x){
	for (i=x-1;i>1;i--){
		if(x%i === 0 && findPrime(i)){console.log(i);break;}
	} 
}

function findPrime(num){

	for (y=num-1;y>1;y--) {

	if(num%y === 0){return false;}

	} return num;

}

findFactorals(600851475143); 

//factoral ascending
for(i=2;i<euler;i++){
  if(euler%i === 0){
    console.log(i);	
    break;
  }
}

//factoral descending
for(i=euler-1;i>1;i--){
  if(euler%i === 0){
    console.log(i);
    break;
  }
}

function findEuler(x){
  for (i=2;i<x;i++){
    if (x%i===0){console.log(i); break;}}}