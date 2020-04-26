
    //basic payment validations
        document.getElementById("amt").value=localStorage.getItem("Total")+"$";
        document.getElementById("pay").onclick= function pay(){
        
            if (document.getElementById("cname").value==""){
        alert("Please enter Card Holder Name");
    }
     else if (document.getElementById("ccnum").value==""){
         alert("Please enter Card Number");
    }
    else if (document.getElementById("ccnum").value.length!=16){
         alert("Card Number should be of 16 digits");
    }
       else if (document.getElementById("expmonth").value==""){
         alert("Please enter Expiry Month");
    }
            else if (document.getElementById("expyear").value==""){
         alert("Please enter Expiry Year");
    }
              else if (document.getElementById("cvv").value==""){
         alert("Please enter CVV");
    }
    else if (document.getElementById("cvv").value.length!=3){
         alert("CVV should be of 3 digits");
    }
            else            
         location.href = "./order.html";
        };
