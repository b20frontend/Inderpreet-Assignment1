/**
 * 
 */
var n=123212, i, rev=0, ori;
ori=n;
while (n!=0)
	{
		i=n%10;
		rev=rev*10 + i;
		n=Math.floor(n/10);
	}
if (rev==ori)
	console.log("The number "+ ori +" is palindrome..")
else
	console.log("The number "+ ori +" is not palindrome..")