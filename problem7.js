
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
