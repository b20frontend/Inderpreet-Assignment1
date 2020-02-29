/**
 * 
 */
var num=[21,43,64,756,65,5646,45,65,45435,435,76,98,890,765,98,6754,87,9];
function even(no)
	{
		return (no%2==0)
	}
var n1= num.sort();
var ev = num.filter(even)
console.log(ev)
console.log(n1)