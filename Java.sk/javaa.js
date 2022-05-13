function korinish(){
    document.getElementById("bir").style.display="block";
    
}
b=4
for(var i=0;i<b;i++){
    console.log(i+".alima");
}
var ism=document.getElementById("name"); 
var raqam=document.getElementById("tel");
function elon(){
    document.getElementById("print").innerHTML="Salom "+ism.value;
    if(raqam.value<330000000 || raqam.value>998999999999){
        document.getElementById("over").innerHTML="Telifon raqam ko'rinishi noto'g'ri"
    }
    else{
        document.getElementById("over").innerHTML="Iltimos kuting..."
    }
}