/**
 * 
 */
var n=7,r,c=0;
for (i=1;i<=n;i++)
{
	r=n%i;
		if (r==0)
		{
			c++;
			
		}
}
if (c==2)
console.log("Number "+n+" is prime...")
else
console.log("Number "+n+" is not prime...")