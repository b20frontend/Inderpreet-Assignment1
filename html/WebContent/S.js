/**
 * 
 */
var i,j,str="";
for (i=1;i<=11;i++)
	{
		for (j=8;j>=1;j++)
			{
				if ((i=1) || (i=6))
					{
						str=str + "*";
					}
			}
		console.log(str)
		str="";
	}