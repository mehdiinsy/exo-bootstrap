// ===========================================================================Method post boo
function stocker(){
    localStorage.setItem("mdp",document.getElementById("mdp").value);
    localStorage.setItem("nom",document.getElementById("nom").value);
    window.location= "login.html";
}

// function charger(){
//     document.getElementById("essai").innerHTML = localStorage.getItem("prenom") + " " + localStorage.getItem("nom");
// }

// ==============================================================================page de co 
function connection(){


    let p1= localStorage.getItem("nom")
    let m1= localStorage.getItem("mdp")
    let pseudo= document.getElementById("Identifiant").value
    let mdp= document.getElementById("mdp_co").value

    if(p1 === pseudo && m1===mdp){
        window.location = "yes.html"}

    else{
        alert("Mot de passe ou identifiant faux")
    }
}

function annuler(){
    window.location= "boo.html"
}