/**
 * 
 */
var n=12345, y=0, len=0, x;
while(n!=0)
{
	x=n%10;
	y=y*10 + x;
	len++;
	n=Math.floor(n/10);
}
console.log(len);