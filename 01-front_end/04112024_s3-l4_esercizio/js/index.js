
// funzione per creare la tabella con ogni singola cella
const creaTabella=function() {
   let tabellone;

   tabellone=document.getElementById("tabellone");

   for(i=0; i<90; i++){
    tabellone.innerHTML+=
        `
        <div class="celle_tabellone">
            <h4>${i+1}</h4>
        </div>
        `
   }
}

// funzione per generare un numero random
const generaNumero=function() {
    let numEstratto, random;
    numEstratto=Math.floor(Math.random()*90+1);
    return numEstratto;
}

const arrayTab=function() {
    let array=[];

    for(i=0; i<90; i++){
        array.push(i+1);
    }
    return array;
}

// funzione per stampare nello spazio il numero generato e associare la classe all'interno della cella
const stampaEaggiungiClasse=function() {
    let celle, random, numeroEstratto, celleCartelle, arr=[];

    celle=document.querySelectorAll(".celle_tabellone");
    celleCartelle=document.querySelectorAll(".celle_cartelle");
    celleCartelle.values();
    random=generaNumero();

    celle[random-1].classList.add("celle_tabellone_estratte");
    numeroEstratto=document.getElementById("numero_estratto");
    numeroEstratto.innerHTML=
        `
        <h3>Numero estratto: ${random}</h3>
        `

    celleCartelle.forEach((cella) => {
        arr.push(parseInt(cella.innerText));
        
    })
    for(i=0; i<arr.length; i++){
        if(arr[i]===random){
            celleCartelle[i].classList.add("celle_tabellone_estratte");
        }
    }
    console.log(arr);

    console.log(random);
}

// funzione per creare le cartelline
const creaCartelline=function (){
    let container, divCelle, inputField, random;

    inputField=document.getElementById("input_field").value;
    console.log(inputField);
    container=document.getElementById("container");

    if(inputField>0){
        for(i=0; i<inputField; i++){
            divCelle=document.createElement("div");
            divCelle.classList.add("cartelle");
            for(j=0; j<20; j++){
                random=generaNumero();
                divCelle.innerHTML+=
                    `
                    <div class="celle_cartelle">
                        <h4>${random}</h4>
                    </div>
                    `
            }
            container.appendChild(divCelle);
        }
    }

}

window.onload=function(){
    let btnGenera, btnCartelle;

    const range=arrayTab();
    btnGenera=document.querySelector("#btn_genera");
    btnCartelle=document.querySelector("#btn_genera_cartella");

    creaTabella();
    btnGenera.addEventListener("click", function(){
        stampaEaggiungiClasse();
    })
    btnCartelle.addEventListener("click", function() {
        creaCartelline();
    })


}




