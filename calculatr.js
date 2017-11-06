function c(a)
{   
	document.getElementById("display").value = a;
}
function calci(a)
{
if(a=='*')
	a='×';
else if(a=='/')
	a=='÷'

	
	document.getElementById("display").value += a;
}

function e()
{var count=0;
	try
	{ 
		c(eval(document.getElementById("display").value.replace(/×/g, '*').replace(/÷/g, '/')).toPrecision(3));
	}
	catch(e)
	{   count=1;
		c('Error');
			
	}
}
function call_enter(eve)
{
	if(eve.which==13)
	{
		
		e();
	}
	
}

