
// to fetch the values of the Id
var eid = document.getElementById("email").value;
var pw = document.getElementById("pass").value; 
var phnno=document.getElementById("phone").value;

//for the span tag;
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");

//setting eventlistener

username.addEventListener("blur", nameverify, true);
password.addEventListener("blur", passwordverify, true);
mobile.addEventListener("blur", mobileverify, true);


// reg expression

var re=/^[a-zA-Z0-9\-\.]+(@){1}[a-zA-Z0-9\-]+(\.[a-zA-Z0-9]{2,4}){1,2}$/;

// validating the fields.

function validate()
{
	
	if (eid != re)
		one.style.visibility = "visible";
	   eid.focus();
	   return fasle;
}