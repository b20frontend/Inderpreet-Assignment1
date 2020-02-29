/**
 * 
 */
var a=[34,534,46,65,41,9176,76,433,67,54];
var max;
console.log(a[0]);
max=a[0];
for (i=0;i<a.length;i++)
	{
		if (max < a[i])
			{
				max=a[i];
			}
	}
console.log(max);