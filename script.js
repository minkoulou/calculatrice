const bouton=document.querySelectorAll("button");
const display=document.querySelector("#affichage");

bouton.forEach(function(btn){
btn.addEventListener("click",function(){
    
    if(btn.textContent==="X"){
        display.value="";
    }

    else if(btn.textContent==="="){
        let calcul=display.value;
        let resultat=eval(display.value);
        display.value=calcul +"\n"+ resultat;
    }
    else{
    display.value += btn.textContent;
    }
    });
});
