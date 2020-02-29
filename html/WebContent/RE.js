/**
 * 
 */
var s="I can have as many as 10 meals a day of fantastic food or room service which means I can have breakfast in bed every day of the week"
	   var re1= /[abcde]/i;
	   var re2= /eek$/

	   var res = s.match(re1)
console.log(res)
console.log(re2.test(s))