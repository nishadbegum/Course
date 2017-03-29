 

function validate()
{
	var eid = document.getElementById("email").value; 
	var reid=/^[a-zA-Z0-9\-\.]+(@){1}[a-zA-Z0-9\-]+(\.[a-zA-Z0-9]{2,4}){1,2}$/;
	var one=document.getElementById("one");
	var pw = document.getElementById("pass").value; 
	var rpw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,10}$/;
	var two=document.getElementById("two");
	var phnno=document.getElementById("phone").value;
	var rphnno = /^[1-9]\d{9}$/ ;
	var three=document.getElementById("three");
	var cid= document.getElementById("card").value;
	var rcid = /^((?:3[47][0-9]{13})|(?:4[0-9]{12}(?:[0-9]{3})?)|(?:5[1-5][0-9]{14})|(?:6(?:011|5[0-9][0-9])[0-9]{12})|(?:3(?:0[0-5]|[68][0-9])[0-9]{11})|(?:(?:2131|1800|35\d{3})\d{11}))$/;
	var four=document.getElementById("four");
	//var error =0
	
	
	if (!reid.test(eid))
		
		{
			one.style.visibility= "visible";
				return false;
		//error = 1;
			
		}
		else
		{
			one.style.visibility= "hidden";
			//error= 0;
			//document.write(eid);
			//return true;
		}
		
		if (!rpw.test(pw))
		{
			two.style.visibility= "visible";
		return false;
			//error= 1;
			
		}
		else
		{
			two.style.visibility= "hidden";
			//document.write(pw);
		//error =0;
		//return true;
		}
		if(!rphnno.test(phnno))
		{
			three.style.visibility= "visible";
			return false;
			//error= 1;
		
		}
		else
		{
			three.style.visibility= "hidden";
			//document.write(phnno);
		//error =0;
		//return true;
		}
		var select = document.getElementById('country'); // or in jQuery use: select = this;
     if (select.value) {
  // value is set to a valid option, so submit form
    return true;
        }
		
		if(!rcid.test(cid))
		{
			four.style.visibility= "visible";
			return false;
			//error= 1;
		
		}
		else
		{
			four.style.visibility= "hidden";
			//document.write(cid);
		//error =0;
		//return true;
		}
		
	/*if (!re.test(eid) && !(pw.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,10}$/)) && !(phnno.match(/^[1-9]\d{9}$/)))
	{
	one.style.visibility= "visible";
	two.style.visibility= "visible";
	three.style.visibility= "visible";
	return false;
	}
	
	

	/*var pw = document.getElementById("pass").value; 
	var two=document.getElementById("two");
	if (!(pw.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,10}$/)))
	{
	two.style.visibility= "visible";
	
	
	}
	else{
		two.style.visibility= "hidden";
		
	}
	
	var phnno=document.getElementById("phone").value;
	var three=document.getElementById("three");
	if(!(phnno.match(/^[1-9]\d{9}$/)))
		{
			three.style.visibility= "visible";
			
		
	}
	else{
		three.style.visibility= "hidden";
			
	
	}
	
	/*var cid= document.getElementById("card").value;
	if (!(cid.match(/^((?:3[47][0-9]{13})|(?:4[0-9]{12}(?:[0-9]{3})?)|(?:5[1-5][0-9]{14})|(?:6(?:011|5[0-9][0-9])[0-9]{12})|(?:3(?:0[0-5]|[68][0-9])[0-9]{11})|(?:(?:2131|1800|35\d{3})\d{11}))$/)))
	{
	alert("Please Verify Card Number");
	return false;
	}*/
	
	
	
	}
	
	
	
	
	

/*function myfocus()
{	 
	document.getElementById("card").style.backgroundColor = "red";

	//document.getElementById("card").style.backgroundColor = "red"; 
	//foc.style.backgroundColor = "yellow";
	//pw.style.backgroundColor="ÿellow";
}*/

