/**
 * 
 */
var i,j,k,str="";
for (i=1;i<=5;i++)
	{
		for (k=5;k>i;k--)
			{
				str=str+ " "
			}
		for (j=1; j<=i;j++)
			{
				str=str +"*"
			}
		console.log(str);
		str="";
	}