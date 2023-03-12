var boxes=document.querySelectorAll(".box");
boxes.forEach(box=>{
    box.onclick=check;
    function check(){
        var ele=box.innerText;
        switch(ele){
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
            case "+":
            case "-":
            case "*":
            case "/":
            case "%":
            case ".":
            var t=document.getElementById("display").innerText;
            t=t.trim()+ele;
            document.getElementById("display").innerHTML=t;
            break;
            case "AC":
            document.getElementById("display").innerText="";
            break;
            case "=":
            var text=document.getElementById("display").innerText;
            var index=text.search("%");
            var res;
            //checking for % symbol in expression
            if(index>0){
                var ex1=text.substring(0,index);
                var ex2=text.substring(index+1,text.length);
                console.log(ex1);
                console.log(ex2);
                let res1=eval(ex1);
                let res2=eval(ex2);
                res=res1*res2/100;
            }
            else{
                var res=eval(text);
            }
            document.getElementById("display").innerHTML=res;
            break;
            case "+/-":
            var len=document.getElementsByTagName("span");
            var sign=document.getElementById("sign");
            
            if(sign==null){
                var text=document.getElementById("display").innerText;
                let pattern=/[\+\*\-\%\.\/]/g;
                let res=pattern.test(text);
                if(!res){
                    var text="<span id='sign'>-</span>"+text; 
                }else{
                    var text=text.substring(0,text.length-1)+"<span id='sign'>-</span>"+text.substring(text.length-1,text.length);
                }
                var text=document.getElementById("display").innerHTML=text;
            }else{
                sign.remove();
            }
            break;

        }
    }
 
})
document.getElementById("cross").onclick=hide;
function hide(){
    document.querySelector(".app").style.display="none";
    document.querySelector("#btn").style.display="block";
}
document.getElementById("btn").onclick=show;
function show(){
    document.querySelector(".app").style.display="grid";
}
window.onkeydown=type;

function type(e){
    var keyText=document.getElementById("display").innerText;
    if(e.key=="1"||e.key=="2" || e.key=="3"
    ||e.key=="4" || e.key=="5"
    ||e.key=="6" || e.key=="7"
    ||e.key=="8" || e.key=="9"
    ||e.key=="0" || e.key=="+"
    ||e.key=="-" || e.key=="/"
    ||e.key=="." || e.key=="%"
    || e.key=="*"
    ){
        keyText=keyText+e.key;
        document.getElementById("display").innerHTML=keyText;
    }
    
}
