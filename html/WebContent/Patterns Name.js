/**
 * 
 */
console.log("To print alphabet L with stars..");
var i,j,str="",row=6,col=4;
for (i=1;i<=row;i++)
	{
		for (j=col;j>=1;j--)
			{
				if(i<=(row-1))
					{
						if(j==col)
							str=str+"*"
						else
							str=str+" "
					}
				else
					str=str+ "*";
			}
		console.log(str);
		str="";
	}