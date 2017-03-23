
var num = 0

for(i=999;i>800;i--){
	for(y=999;y>800;y--){
	  num = i*y;
	  var string = num.toString();
	  var sleft = string.slice(0,3);
	  var sright = string.slice(3,6);
	  var snew = string.slice(5,6) + string.slice(4,5) + string.slice(3,4) ;
	  if (sleft === snew){
	  	console.log("Palindrome: " + num + " Products: " + i + " & " + y); break; 
		}
	}
if (sleft === snew){break;}
}