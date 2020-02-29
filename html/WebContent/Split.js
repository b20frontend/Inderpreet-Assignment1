/**
 * 
 */
var a="Bebo Technical Education Services";
var a1,a2,s="",s1="",j;
a1=a.split(" ");
//console.log(a1)
for (i=0;i<=a1.length-1;i++)
{

	a2=Array.from(a1[i]);
	for (j=a2.length-1;j>=0;j--)
	{
		s=s+a2[j];
	}
	s1=s1 + " " + s;
	s="";
}
console.log(s1)