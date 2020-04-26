// saving user name on every page

var x=localStorage.getItem("ffname");
        document.getElementById("usr").innerHTML=x;
        var arra=[];
    document.getElementById("checkin").onclick=moveToNextPage;
        var address=document.getElementById("adr");
        var fname=document.getElementById("fname");
         var email=document.getElementById("email");
         var city=document.getElementById("city");
         var state=document.getElementById("state");
        var zip=document.getElementById("zip");
        
    //address JS validation
        function moveToNextPage(){
          var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  
            if (fname.value==""){
        alert("Please enter Full name");
    }
     else if (email.value==""){
         alert("Please enter Email");
    }
    else if (!re.test(email.value)){
         alert("Please enter valid Email");
    }
     else if (address.value==""){
         alert("Please enter Address");
    }
    else if (city.value.length==""){
         alert("Phone enter City");
    }
       else if (state.value==""){
         alert("Please enter Province");
    }
             else if (zip.value==""){
         alert("Please enter Postal Code");
    }
      else{   
          //pushing items in array and saving in local storage
            arra.push(fname.value);
            arra.push(address.value);
            arra.push(city.value);
            arra.push(state.value);
            localStorage.setItem("address",arra);
            localStorage.setItem("eMail",email.value);
            location.href = "./checkout.html";
      }
}
        