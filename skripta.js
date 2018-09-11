var gotovo = true;





//
function ispuni() {
    
    //var unetiBroj = document.getElementById("unetiBroj").value;
    document.getElementById("triger").disabled = true;
        var niz = [];
        var tabla = document.getElementById("tabla");
        var pk = document.getElementById("prvaKolona");
        pk.innerHTML = "";
        var dk = document.getElementById("drugaKolona");  
        dk.innerHTML = "";
        var span = document.getElementById("izvuceni");
        for(var i = 0;i<20;i++){
            
            prikaziIzvuceniBroj(span,i,niz,pk,dk,tabla);
        
        }
    



    
}

function prikaziIzvuceniBroj(span,i,niz,pk,dk,tabla) {
       setTimeout(() => {
        niz[i] = ran(niz);
        console.log(niz[i]);        
        var node = document.createTextNode(niz[i]);
        var node1 = document.createTextNode(niz[i]);
        span.innerHTML = "";
        span.appendChild(node1);

        //dodaj broj u tablu
        if(i<10){
            
            var td = document.createElement("td");
            td.appendChild(node);

            tabla = "";
            pk.appendChild(td);
            // tabla.appendChild(pk);
            
        }else{
            var td = document.createElement("td");
            td.appendChild(node);
            dk.appendChild(td);
            //ovo ovde odkljucava dugme kada se igra zavrsi da moze opet da se igra...
            if(i==19)document.getElementById("triger").disabled = false;

        }
       }, 1000*i);
}


function ran(izvuceni) {
    var num = -1;
    var izvucen = false;
    while(izvucen==false){
        num = Math.round(80*Math.random())+1;
        var ima = false;
        for(var i = 0;i<izvuceni.length;i++){
            
            if(num==izvuceni[i]){
                ima=true;
            }
        }
        if(ima==false){
            izvucen=true;
        }
        
    }
    return num;
}



function proveriKombinaciju(params) {
    
}


function proveriIzvuceniBroj(niz,broj) {
    var ima = false;
    for (let i = 0; i < niz.length; i++) {
        if(niz[i]==broj){
            ima = true;
        }

        
    }
    return ima;
}