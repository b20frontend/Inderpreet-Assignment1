/**
 * 
 */
var s="Bebo technical education services",k=0, s1="", s2="";
console.log(s.length)
for (i=0;i<s.length;i++)
{
	if (s[i]==' '|| i==s.length-1)
	{
		for (j=i;j>=k;j--)
		{
			s1=s1+s[j];
		}
		k=i;
	}
	s2= s2+s1;
	s1="";
}
console.log(s2)