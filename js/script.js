
var start=1;
var val;
function fun(){
   
setTimeout(function(){
    if(start>val){
        var audio = new Audio('beep.mp3');
    audio.play();
        alert("Counter reached to "+ val);
        document.getElementById("display").innerHTML='0';
        return;
    }
    document.getElementById("display").innerHTML=start;
    start++;
    fun();
},1000)
   

}

document.getElementById("btn").addEventListener('click',function(e){
    var audio = new Audio('beep.mp3');
    audio.play();
    val=document.getElementById("num").value;
   start=1;
   fun();
   
    
})


