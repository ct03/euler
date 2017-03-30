function sumPrime(num){
  var sum = 0, prime = [];
  
  //populates array from 0 to n
  for (z=0; z<num;z++){
    prime.push(z);
  }
  
  //Sieve of Eratosthenes

  for (i=2;i<Math.sqrt(num);i++){ //steps through array
    if(prime[i]){
      for (j = i*i, k = 0;j<num;j=i*i+(i*k)){ //removes multiples after i
        prime[j] = false;
        k+=1;
      }
    }
  }
  
  //sums prime numbers
  for (y=2;y<prime.length;++y){
    if(prime[y]){sum += prime[y];}

  }

  return sum;

}

sumPrime(2000000);