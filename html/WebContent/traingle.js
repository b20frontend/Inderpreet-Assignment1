/**
 * 
 */
var i,j, str="",m;

for (i=1;i<=9;i++)
	{
		for(j=9;j<=9;j+2)
			{
				if (j>i)
					{
						str=str+"*"
					}
			}
		console.log(str);
		str="";
	}