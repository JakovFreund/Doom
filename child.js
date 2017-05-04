document.getElementById("dive").style.visibility="hidden";

function show() {
    if (document.getElementById("dive").style.visibility=="visible"){
        document.getElementById("dive").style.visibility="hidden";

    }
    else {
        document.getElementById("dive").style.visibility = "visible";

    }
}
function dodaj(){
    var a = document.getElementById("tekst").value;

    var b=document.createElement("p");
    var node=document.createTextNode(a);
    b.appendChild(node);
    document.getElementById("div1").appendChild(b);

}

function promj(){
    document.getElementById("abc").style.backgroundColor=document.getElementById("tekst2").value;
}
function check1(){
    var heg = window.innerHeight;
    var wid = window.innerWidth;
    document.getElementById("vis").innerHTML="Visina:"+heg;
    document.getElementById("sir").innerHTML="Širina:"+wid;
}
