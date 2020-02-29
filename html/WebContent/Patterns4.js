/**
 * 
 */
var i,j,str="";
for(i=1;i<=5;i++)
	{
		for(j=5;j>=1;j--)
			{
				if (j>i)
					str=str+" ";
				else
					str=str+"*";
			}
		console.log(str);
		str="";
	}