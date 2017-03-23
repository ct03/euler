
//test
var flag = false	;
var t0 = performance.now(); //needed to check runtime


for (n=10;n=n;n+=10){
	if (n%3 === 0 && n%4 == 0 && n%7==0 && n%9===0 ){ //the code on this line is to speedup the process 
		flag = true;
 		for (i=2;i<21;i++){
			if(n%i !=0 ){flag = false; break;}
 		}
 	}
	if (flag === true){console.log(n); break;}
}

var t1 = performance.now();

console.log (t1-t0); //checks runtime
