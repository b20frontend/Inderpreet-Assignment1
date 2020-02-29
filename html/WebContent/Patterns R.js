/**
 * 
 */
var i, j, row=12, col=8, str="", k, l;
var k= row/2;
for (i=1;i<=row;i++)
	{
		for (j=col;j>=1;j--)
			{
				if (j==col || (j==1 && i<=k))
					{
						str+= "*";
					}
				else
					{
						str+= " ";
					}
				if ()
			}
		console.log(str);
		str="";
	}