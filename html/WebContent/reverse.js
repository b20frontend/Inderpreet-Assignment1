/**
 * 
 */
var n=123456789, x=0, i;
while (n>0)
	{
		i = n % 10;
		x = x * 10 + i;
		n =Math.floor(n/10);  
	}
console.log(x);