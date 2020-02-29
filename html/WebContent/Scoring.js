/**
 * 
 */
var number, total=100, per;
number=180;
per= number/total * 100;
if (per<=100 && per>=80)
	console.log("Congrats.. You scored excellent :)");
else if(per>=70 && per<=79 )
	console.log("You scored very good..");
else if(per>=50 && per<=69 )
	console.log("You scored good..");
else if(per>=40 && per<=49 )
	console.log("You scored average..");
else if(per<=40)
	console.log("Sorry, you failed..");
else
	console.log("Please check your input values..")