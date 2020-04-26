  

$(document).ready(function(){
     $("#loginMain").click(function(){
       
       location.href = "./login.html";
    });
    $("#signMain").click(function(){
       
       location.href = "./signup.html";
    });
    
     $("#continue").click(function(){
        
       continued();
    });
    
      $("#fromsub").click(function(){
     
       formSubmit();
    });
    
      $("#login").click(function(){
       
       login();
    });
});


//basic sign up validations
function formSubmit(){
    
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (document.getElementById("myFName").value==""){
        alert("Please enter first name");
    }
    else if (document.getElementById("myLName").value==""){
         alert("Please enter last name");
    }
     else if (document.getElementById("myEmail").value==""){
         alert("Please enter Email");
    }
    else if (!re.test(document.getElementById("myEmail").value)){
         alert("Please enter valid Email");
    }
     else if (document.getElementById("myPhone").value==""){
         alert("Please enter Phone No");
    }
    else if (document.getElementById("myPhone").value.length!=10){
         alert("Phone number should be of 10 digits");
    }
       else if (document.getElementById("myPass").value==""){
         alert("Please create your password");
    }
    else{
        // saving user name on every page
    localStorage.setItem("ffname",document.getElementById("myFName").value);
    location.href = "./success.html";
    }
}

//basic login validations
function login(){
    
    if (document.getElementById("myFName").value==""){
        alert("Please enter user name");
    }
    else if (document.getElementById("myPass").value==""){
         alert("Please enter password");
    }
    else{
    localStorage.setItem("ffname",document.getElementById("myFName").value);
    location.href = "./home.html";
    }
}

function continued(){
   
    location.href = "./addAddress.html";
    console.log("user now is "+user.value);
   
}

 

