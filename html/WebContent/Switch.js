/**
 * 
 */
var per=41;
var m=Math.floor(per/10);
switch (m)
{
	case 10:
	case 9:
	case 8:
		console.log("Congrats.. You scored excellent :)");
		break;
	case 7:
		console.log("You scored very good..");
		break;
	case 6:
	case 5:
		console.log("You scored good..");
		break;
	case 4:
		console.log("You scored average");
		break;
	case 3:
	case 2:
	case 1:
		console.log("Sorry, you failed..");
		break;
	default :
		console.log("Please check your input. It should be between 0 to 100.");
}