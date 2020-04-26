
//custom function
//custom function with parameters
//jquery plugin 
//used a global variable
//Create an XMLHttpRequest object
//Use a logical AND operator
//Use the XMLHttpRequest object to get XML/JSON data


// saving user name on every page
var x=localStorage.getItem("ffname");
        document.getElementById("usr").innerHTML=x;

$(document).ready(function(){
var count=0;
  $("#ab").click(function(){
     $("#lists").toggle("slow");
        if (count===0){      
    count++;
    addRows("ab")
         
        }
    
  });
})

var c1=0;

  
document.getElementById("finalSum").onclick=function(){  
    if (c1<1){
           c1++;
    addRows("finalSum");}};

document.getElementById("continue").onclick=continued;

//taking values and count for local storage and creating table elements and aadding in nodes and representing it
var list=localStorage.getItem("shoppingList");
         if (list.match(/watch/g)!=null){
         var watchCount=list.match(/watch/g).length;
         }
         if (list.match(/tablet/g)!=null){
         var tabletCount=list.match(/tablet/g).length;
         }
         if (list.match(/mac/g)!=null){
         var macCount=list.match(/mac/g).length;
         }
         if (list.match(/air/g)!=null){
         var airPodsCount=list.match(/air/g).length;
         }
         if (list.match(/iPhone/g)!=null){
         var iPhoneCount=list.match(/iPhone/g).length;
         }
         var tab = document.querySelector("table");
         

         
         function addRows(identifier){
             var sum=0;
             var xhttp = new XMLHttpRequest();
               xhttp.onreadystatechange = function() {
                   console.log("insisss "+this.readyState  +" "+this.status);
                   //AJAX feature, will showcase through running from server on brackets
    if (this.readyState == 4 && this.status == 200) {
                          
      document.getElementById("ab").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
             
             var tr=document.createElement("tr");
             var tr1=document.createElement("tr");
             var td= document.createElement("td");
             var td1= document.createElement("td");
             var td2= document.createElement("td");
             var th =document.createElement("th");
            th.appendChild(document.createTextNode("Items Added In Cart"));
          
             td.appendChild(document.createTextNode("Item"));        
             td1.appendChild(document.createTextNode("Price"));
             td2.appendChild(document.createTextNode("Count"));
             tr.append(td);
            tr.append(td1);
            tr.append(td2);
             if(identifier=="finalSum"){
                 var td3= document.createElement("td");
                 td3.appendChild(document.createTextNode("Total"));
                  tr.append(td3);
             }
              tab.append(th);
             tab.append(tr);
             
             

             if (watchCount>0){
                
             var td= document.createElement("td");
             var td1= document.createElement("td");
             var td2= document.createElement("td");
             var td3= document.createElement("td");
             var tr=document.createElement("tr");
                
             td.appendChild(document.createTextNode("Apple Watch"));
                  
             td1.appendChild(document.createTextNode("800$"));
             td2.appendChild(document.createTextNode(watchCount));
                   
              tr.appendChild(td);
              tr.appendChild(td1);
              tr.appendChild(td2);
                   if(identifier=="finalSum"){
                       sum+=eval(watchCount*800);
             td3.appendChild(document.createTextNode(eval(watchCount*800)+"$")); 
               tr.appendChild(td3);
                   }
            tab.appendChild(tr);
                   
             }
               if (tabletCount>0){
             //var row=document.createElement("tr");
             var td= document.createElement("td");
             var td1= document.createElement("td");
             var td2= document.createElement("td");
             var td3= document.createElement("td");
                   var tr=document.createElement("tr");
                
             td.appendChild(document.createTextNode("Tablet"));
                  
             td1.appendChild(document.createTextNode("2500$"));
             td2.appendChild(document.createTextNode(tabletCount));
                   
              tr.appendChild(td);
              tr.appendChild(td1);
              tr.appendChild(td2);
                   if(identifier=="finalSum"){
                       sum+=eval(tabletCount*2500);
             td3.appendChild(document.createTextNode(eval(tabletCount*2500)+"$")); 
               tr.appendChild(td3);
                   }
            tab.appendChild(tr);
                   
             }
             
             if (iPhoneCount>0){
             //var row=document.createElement("tr");
             var td= document.createElement("td");
             var td1= document.createElement("td");
             var td2= document.createElement("td");
             var td3= document.createElement("td");
             var tr=document.createElement("tr");
                
             td.appendChild(document.createTextNode("iPhone"));
                  
             td1.appendChild(document.createTextNode("1500$"));
             td2.appendChild(document.createTextNode(iPhoneCount));
                   
              tr.appendChild(td);
              tr.appendChild(td1);
              tr.appendChild(td2);
                   if(identifier=="finalSum"){
                       sum+=eval(iPhoneCount*1500);
             td3.appendChild(document.createTextNode(eval(iPhoneCount*1500)+"$")); 
               tr.appendChild(td3);
                   }
            tab.appendChild(tr);
                   
             }
             if (airPodsCount>0){
             //var row=document.createElement("tr");
             var td= document.createElement("td");
             var td1= document.createElement("td");
             var td2= document.createElement("td");
             var td3= document.createElement("td");
             var tr=document.createElement("tr");
                
             td.appendChild(document.createTextNode("Air Pods"));
                  
             td1.appendChild(document.createTextNode("320$"));
             td2.appendChild(document.createTextNode(airPodsCount));
                   
              tr.appendChild(td);
              tr.appendChild(td1);
              tr.appendChild(td2);
                   if(identifier=="finalSum"){
                       sum+=eval(airPodsCount*320);
             td3.appendChild(document.createTextNode(eval(airPodsCount*320)+"$")); 
               tr.appendChild(td3);
                   }
            tab.appendChild(tr);
                   
             }
            if (macCount>0){
             //var row=document.createElement("tr");
             var td= document.createElement("td");
             var td1= document.createElement("td");
             var td2= document.createElement("td");
             var td3= document.createElement("td");
             var tr=document.createElement("tr");
                
             td.appendChild(document.createTextNode("Macbook"));
                  
             td1.appendChild(document.createTextNode("5000$"));
             td2.appendChild(document.createTextNode(macCount));
                   
              tr.appendChild(td);
              tr.appendChild(td1);
              tr.appendChild(td2);
                   if(identifier=="finalSum"){
                       sum+=eval(macCount*5000);
             td3.appendChild(document.createTextNode(eval(macCount*5000)+"$")); 
               tr.appendChild(td3);
                   }
            tab.appendChild(tr);
                   
             }
             localStorage.setItem("Total",sum);
         }


function continued(){
   
    location.href = "./addAddress.html";
    console.log("user now is "+user.value);
   
}