/**
 * 
 */
console.log("To print I with stars..")
var i,j,str="",row=11; col=7;
var m=((col+1)/2);
for (i=1;i<=row;i++)
	{
		for (j=col;j>=1;j--)
			{
				if ((i==1) || (i==row))
					{
						str=str + "*";
					}
				else
					{
						if (j==m)
							{
								str=str + "*";
							}
						else
							{
								str=str+ " ";
							}
					}
			}
		console.log(str)
		str=""
	}