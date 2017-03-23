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