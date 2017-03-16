
var x = [1,2]; 
var sum = 0;
var fs = 0;

for (i=1; x[i]<4000000 ;++i){
  x[i+1] = x[i]+x[i-1];
  if (x[i]%2==0){
    sum += x[i];
  }
//  console.log(x[i]);
}

console.log(sum);

//console.log(sum);