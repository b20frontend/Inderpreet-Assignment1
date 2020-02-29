/**
 * 
 */
var name=["Inderpreet", "Sumit", "Shruti","Aman", "Nishu"];
var i,k,short,large,l,p;
k=name[0];
l=name[0].length;
for(i=0;i<name.length;i++)
	{
		if (l<name[i].length)
			{
				l=name[i].length;
				large=name[i];
			}
		else if (l>=name[i].length)
			{
				p=name[i].length;
				short=name[i]
			}
	}
console.log("Shortest name is \""+short+"\" & the largest name is \""+large+"\"..")