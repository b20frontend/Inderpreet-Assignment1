/**
 * 
 */
var i,j, str="";
for (i=1;i<=5;i++)
	{
		for(j=5;j>=i;j--)
			{
				str=str + "*";
			}
		console.log(str);
		str="";
	}