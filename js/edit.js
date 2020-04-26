
// saving user name on every page
var x=localStorage.getItem("ffname");
        document.getElementById("usr").innerHTML=x;

//ediitng cart by first taking values from loacal storage and after that adding again in it using arrays and loops
        var arrayEdit=[];
        var watchCount=0, tabletCount=0,macCount=0,airPodsCount=0,iPhoneCount =0;
        var list=localStorage.getItem("shoppingList");
         if (list.match(/watch/g)!=null){
          watchCount=list.match(/watch/g).length;
         }
         if (list.match(/tablet/g)!=null){
          tabletCount=list.match(/tablet/g).length;
         }
         if (list.match(/mac/g)!=null){
          macCount=list.match(/mac/g).length;
         }
         if (list.match(/air/g)!=null){
          airPodsCount=list.match(/air/g).length;
         }
         if (list.match(/iPhone/g)!=null){
          iPhoneCount=list.match(/iPhone/g).length;
         }
        var wCount=document.getElementById("wtc");
        var mc=document.getElementById("mc");
        var tb=document.getElementById("tb");
        var ip=document.getElementById("ip");
        var pod=document.getElementById("pod");
        wCount.value=watchCount;
        mc.value=macCount;
        tb.value=tabletCount;
        ip.value=iPhoneCount;
        pod.value=airPodsCount;
        
        document.getElementById("doneEditing").onclick=function(){
             var cont=document.getElementById("continues");
            cont.style.display="block";
            for (var i=0;i<wCount.value;i++){
                arrayEdit.push("watch");
            }
            for (var i=0;i<mc.value;i++){
                arrayEdit.push("mac");
            }
            for (var i=0;i<tb.value;i++){
                arrayEdit.push("tablet");
            }
            for (var i=0;i<ip.value;i++){
                arrayEdit.push("iPhone");
            }
            for (var i=0;i<pod.value;i++){
                arrayEdit.push("air");
            }
            localStorage.setItem("shoppingList",arrayEdit);
                                 
            
        }
        document.getElementById("continues").onclick=function(){
        
        location.href = "./summary.html";
        }
        
   