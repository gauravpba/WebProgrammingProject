
var divs = new Array();
    divs[0] = "errFirst";
    divs[1] = "errLast";
    divs[2] = "errEmail";


  function validate()
	{
      var inputs = new Array();
      inputs[0] = document.getElementById('fname').value;
      inputs[1] = document.getElementById('lname').value;
      inputs[2] = document.getElementById('email').value;

      var errors = new Array();
      errors[0] = "<span style='color:red'>Please enter your first name!</span>";
      errors[1] = "<span style='color:red'>Please enter your last name!</span>";
      errors[2] = "<span style='color:red'>Please enter your email!</span>";
      for (i in inputs)
      {
        var errMessage = errors[i];
        var div = divs[i];
        if (inputs[i] == "")
        	document.getElementById(div).innerHTML = errMessage;
        else if (i==2)
        {
          var atpos=inputs[i].indexOf("@");
          var dotpos=inputs[i].lastIndexOf(".");
          if (atpos<1 || dotpos<atpos+2 || dotpos+2>=inputs[i].length)
        	document.getElementById('email').innerHTML = "<span style='color: red'>Enter a valid email address!</span>";
          else
        	document.getElementById(div).innerHTML = "OK!";
        }
        else
        	document.getElementById(div).innerHTML = "OK!";
     }
   }

    function finalValidate()
    {
      var count = 0;
      for(i=0;i<3;i++)
      {
        var div = divs[i];
        if(document.getElementById(div).innerHTML == "OK!")
        count = count + 1;
      }
      if(count == 3)
      	document.getElementById("errFinal").innerHTML = "All the data you entered is correct!!!";
    }
