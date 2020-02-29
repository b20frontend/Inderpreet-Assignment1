/**
 * 
 */
var a="bebo technical education services";
var b=[], a1=Array.from(a);
var c=0;
for (i=0;i<=a1.length-1;i++)
{
	x=b.indexOf(a1[i]);
	if (x == -1)
	{
		b.push(a1[i])
	}
}
console.log(b)