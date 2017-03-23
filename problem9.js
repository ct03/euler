
var square = []
var count = 2;
var acount = 0
var a = 0;
var b = 0;
var c = 0;

while ((count)<1000){
	square[acount]=count*count;
	count +=1;
	acount +=1;
}


for (z=0;z<square.length;z++){
	a = square[z];
	for (y=z+1;y<square.length;y++){
		b=square[y];
		c=a+b;
		if(Math.sqrt(a)+Math.sqrt(b)+Math.sqrt(c) === 1000){
			console.log("a=" + a + " b=" +b + " c=" +c + " " + '\n' + "square root of: a=" + Math.sqrt(a) + " b=" + Math.sqrt(b) + " c=" + Math.sqrt(c) + '\n' + "a+b+c=" +(Math.sqrt(a)+Math.sqrt(b)+Math.sqrt(c))+'\n' +"a*b*c=" + Math.sqrt(a)*Math.sqrt(b)*Math.sqrt(c));
			break;
		}
	}
}