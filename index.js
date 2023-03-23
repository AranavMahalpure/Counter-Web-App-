var countvalue=document.querySelector("#h1")
function dec(){
    let va =parseInt(countvalue.innerText);
    av =va-1;
    document.getElementById("h1").innerText= av ;
}
function inc(){
    let va =parseInt(countvalue.innerText);
 va =parseInt(va+1);
    document.getElementById("h1").innerText= va;
}
