/**
 * 
 */
function student(name1,gender1,marks1)
{
	this.name=name1;
	this.gender=gender1;
	this.marks=marks1;
}
var x,max,maxn;
var s1=new student("Inderpreet","Male",57);
var s2=new student("Emily","Female",67);
var s3=new student("Harry","Male",86);
var s4=new student("Scarlett","Female",47);
var s5=new student("Angie","Female",94);
/* if (s1.marks>s2.marks && s1.marks>s3.marks)
	console.log("a= "+ s1.marks +" is the greatest number..");
else if(s2.marks>s1.marks && s2.marks>s3.marks)
	console.log("b= "+ s2.marks +" is the greatest number..");
else
	console.log("c= "+ s3.marks +" is the greatest number..");
 */
var stud=[];
stud.push(s1,s2,s3,s4,s5);
max=stud[0].marks
for (i=0;i<=stud.length-1;i++)
{
	if (max<stud[i].marks)
	{
		max=stud[i].marks;
		maxn=stud[i].name;
	}
	
}
console.log("Maximum numbers are "+max+ ", held by "+maxn)