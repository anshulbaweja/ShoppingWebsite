// saving user name on every page
 var x=localStorage.getItem("ffname");
        document.getElementById("usr").innerHTML=x;

//order summary page using random no generator
document.getElementById("order").innerHTML=Math.round(Math.random()*4000);
document.getElementById("mail").innerHTML=localStorage.getItem("eMail");
    document.getElementById("create").onclick= function create(){
        localStorage.setItem("Total","");
        localStorage.setItem("shoppingList","");
        location.href = "./home.html";
        };
    document.getElementById("out").onclick= function out(){
        localStorage.clear();
        location.href = "./main.html";
        };
