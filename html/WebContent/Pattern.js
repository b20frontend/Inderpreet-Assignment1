/**
 * 
 */
var i, j, str="",p,q;
for (i=1;i<=5;i++)
	{
	
		for (j=1;j<=i;j++)
			{
				
				if((i+j)%2==0)
					{
					str=str+1
					}
				else
					{
						str=str+0
					}
			}
		console.log(str);
		str=""
	}