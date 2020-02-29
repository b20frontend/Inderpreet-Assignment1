/**
 * 
 */
var name=["Inderpreet", "Sumit", "Shruti","Aman", "Nishu"];
var i,j,k,short,l;
j=name[0].length;
l=j;
for(i=0;i<name.length;i++)
	{
		if(j<name[i].length)
			{
				j=name[i].length;
				k=name[i];
			}
		if (l>=name[i].length)
			{
				l=name[i].length;
				short=name[i];
			}
	}
console.log(k);
console.log(short);