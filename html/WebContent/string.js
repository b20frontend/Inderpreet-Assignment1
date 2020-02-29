/**
 * 
 */
var s="namanaman", a=[];
a=Array.from(s);
i=0; j=a.length-1;
var e=0
while (i<=j)
{
	if (a[i] != a[j])
	{
		e=e+1;
		break;
	}
	else
	{
		e=e+0;
		i++;
		j--;
	}	
}
if (e==0)
{
	console.log("String is palindrome..")
}
else
{
	console.log("String isn't palindrome..")
}
