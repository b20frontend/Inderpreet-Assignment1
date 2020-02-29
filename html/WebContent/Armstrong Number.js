/**
 * 
 */
var n=153, n1=n, n2=n, m=0, y=0, len=0, x;
while(n!=0)
{
	x=n%10;
	y=y*10 + x;
	len++;
	n=Math.floor(n/10);
}
while(n1!=0)
{
	x=n1%10;
	y=y*10 + x;
	m=m+Math.pow(x,len)
	n1=Math.floor(n1/10);
}
if (m==n2)
	{
		console.log("Number "+ n2 +" is amrstrong..");
	}
else
	{
		console.log("Number "+ n2 +" is not amrstrong..");
	}