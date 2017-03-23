<<<<<<< HEAD
function squareOfSums(x){
	var sum = 0;
	for (i=1;i<=x;i++){
		sum += i;
	}
	sum *= sum;
	return sum;
}

//squareOfSums(10);

function sumOfSquares(n){
	var sum = 0;
	for (x=1;x<=n;x++){
		sum += x*x
	}
	return sum;
}

//sumOfSquares(10);

function euler(z){
	return squareOfSums(z)-sumOfSquares(z)
}

euler(100);
=======
//working function to find a primes up to n

function findP(x){
  for (n=2;n<x;n++){
  var flag = true;
    for(i=2;i<n;i++){
      if(n%i === 0){flag = false; break;}
    }  
  if (flag === true){console.log(n);}
  }   
}
 


//test while loop

var x= 1;
var n = 2;
while (x<=10){
  var flag = true;
  for (i=2; i<n; i++){
    if (n%i === 0){flag = false; n+=1; break;}
    }
  if (flag===true){console.log(n); n+=1; x+=1;}

}


//put loop in a function

function findNPrime(limit){
  var x= 1;
  var n = 2;
  while (x<=limit){
    var flag = true;
    for (i=2; i<n; i++){
      if (n%i === 0){flag = false; n+=1; break;}
      }
    if (flag===true){n+=1; x+=1;}
  }
  return n-1;
}

findNPrime(6);
>>>>>>> 6f45c1a68b124c2fc539753f880d4df4f3248032
