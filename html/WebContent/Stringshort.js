/**
 * 
 */
var a="Bebo abcde Technical Education Services";
var max=[],m,a1;
a1=a.split(" ");
for (i=0;i<=a1.length-1;i++)
{
	//console.log(a1[i].length)
	if (m<=a1[i].length)
	{
		//console.log("s");
		m=a1[i].length;
		max.push(a1[i]);
	}
	//console.log(m)
}
//console.log(m)
//console.log(max)
console.log("Max word length in above array is: "+m+" and the word is: "+max)