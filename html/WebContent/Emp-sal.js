/**
 * 
 */
function emp (emp_id,emp_name,emp_post,emp_bs)
{
	this.id=emp_id;
	this.name=emp_name
	this.post=emp_post
	this.basic_salary=emp_bs
}
var pf=12, hra=50;
var a=[],in_hand;
var emp1=new emp("CH5701", "John Snow", "Chief Information Officer", 250000);
var emp2=new emp("CH5702", "Cersei Lannister", "Director Of Technology", 160000);
var emp3=new emp("CH5703", "Sam Williams", "Software Devoloper", 130000);
var emp4=new emp("CH5704", "Jason Stamath", "Marketing Head", 95000);
var emp5=new emp("CH5705", "Samwell Tarley", "Networking Manager", 75000);
a.push(emp1,emp2,emp3,emp4,emp5);

for (i=0;i<a.length;i++)
{
	in_hand= a[i].basic_salary + ((hra/100)*a[i].basic_salary) - ((pf/100)*a[i].basic_salary);
	console.log("In-hand salary of "+a[i].name+" ("+a[i].id+") is: INR "+in_hand+"/-")
}