/**
 * 
 */
var i,j; var line="", p;
for (i=1;i<=5;i++)
	{
		for (j=1;j<=i;j++)
			{
				p=j%2
				line=line+p
			}
		console.log(line);
		line=""
	}