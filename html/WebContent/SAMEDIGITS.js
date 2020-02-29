/**
 * 
 */
var ans, a="earth"; b="heurt";
if (a.length==b.length)
{
	var a1=Array.from(a);
	var b1=Array.from(b);
	var a2=a1.sort();
	var b2=b1.sort();
	//console.log(a2)
	//console.log(b2)
	for (i=0;i<a.length;i++)
	{
		if (a2[i] != b2[i])
		{
			console.log("Not anagram..")
			break;
		}
		else
		{
			ans=ans+1;
		}
	}
	if (ans==a.length)
	console.log("Anagram..")
}
else
console.log("Not Anagram..")