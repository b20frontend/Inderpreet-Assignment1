/**
 * 
 */
var n=1,max=1000000, i, f, v=0,len=0;
for (n=6;n<=max;n++)
	{
	
for (i=1;i<n; i++)
	{
		f = n%i 
		if (f==0)
			{
				v=v+i;
			}
	}
	if (v==n)
		{
			console.log("Number "+ n +" is a perfect one...");
		}
	v=0;
	}
	console.log(len)