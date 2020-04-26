// saving user name on every page
//adding date feature at the home page


var x=localStorage.getItem("ffname");
        document.getElementById("usr").innerHTML=x;
        var d= new Date();
        var monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
];
        document.getElementById("cTime").innerHTML=monthNames[d.getMonth()]+ " "+d.getDate()+" "+d.getFullYear();

var cart=document.getElementById("cart");
document.getElementById("watch").onclick= function (){addToCart("watch")};
document.getElementById("iPhone").onclick= function (){addToCart("iPhone")};
document.getElementById("air").onclick= function (){addToCart("air")};
document.getElementById("mac").onclick= function (){addToCart("mac")};
document.getElementById("tablet").onclick= function (){addToCart("tablet")};
document.getElementById("watch").onclick= function (){addToCart("watch")};
document.getElementById("watch").onclick= function (){addToCart("watch")};

var x=0;
var arr=[];
//adding items in car and local storage
function addToCart(item){
            document.getElementById("summary").style.display="block";
            arr.push(item);
            console.log("item is "+arr);
            x++;
                console.log("count is "+x);
            cart.innerHTML=x;   
            localStorage.setItem("shoppingList",arr);
}

function checkCart(){
           console.log("valu is "+document.getElementById("cart").value);
       if (x>0){
           location.href = "./summary.html";
       }
           else{
           alert("Cart is Empty");
           }
       }

//functionality added for searching elements on a page
function myFunction() {
        var input, filter, ul, li, a, i, txtValue, btn, count,cart;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            //btn= li[i].getElementsByTagName("button")[0];

            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
}