/**
 * 
 */
var s="I can have as many as 10 meals a day of fantastic food or room service \
       \which means I can have breakfast in bed every day of the week."
var re1=/ [aeiou]/gi;
var re2= / [^aeiou]/gim;
var re3=/ \w /;
var re4= / \W /gim;
var re5= / \d /;
//var r= s.match(re2);
//console.log(re1.test(s));
//console.log(re2.test(s));
console.log(re3.test(s));
//console.log(re4.test(s));
//console.log(re5.test(s));

//console.log(s.match(re1));
//console.log(r);
console.log(s.match(re3));
console.log(s.match(re4));
//console.log(s.match(re5));