/**
 * 
 */
var n=7, i, f, v=0;
for (i=1;i<n; i++)
	{
		f= n%i 
		if (f==0)
			{
				v=v+i;
			}
	}
if (v==n)
	{
		console.log("Number "+ n +" is a perfect one...");
	}
else
	{
	console.log("Number "+ n +" is not perfect...")
	}