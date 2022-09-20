// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

///////////////////////road//////////////////////////////////////
/*

nowTime();
function nowTime (){
let paragraphe = document.querySelector('p');
console.log(paragraphe);

let current = new Date(); 

let heures = current.getHours(); 
let minutes = current.getMinutes();
let secondes = current.getSeconds();

let heureAAfficher = heures + ':' + minutes + ':' + secondes; 

paragraphe.innerText = heureAAfficher;
setInterval(nowTime, 1000);
}
*/
let currentHour = new Date ();
let mn = currentHour.getMinutes();
let secondes = currentHour.getSeconds();
let Hrs = currentHour.getHours();
// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

// 1 sec = (360/60 = 6 degres
// 1 mn = 360/60 /60= 0.1 degres
// 1 hr = 1mn/60 = 0.6/60 = 0,001666 degres
let angleSec =  6 ;
let angleMn = 0.1;
let angleHr = 0.00166;

// Déplacer les aiguilles 

function demarrerLaMontre() {
angleMn  += 0.1;
angleSec  += 6 ;
angleHr += 0.00166 ;
AIGUILLESEC.style.transform = 'rotate(' + angleSec + 'deg)';
AIGUILLEMIN.style.transform = 'rotate(' + angleMn + 'deg)';
AIGUILLEHR.style.transform = 'rotate(' + angleHr + 'deg)';

//setTimeout(demarrerLaMontre,1000);
//setInterval(demarrerLaMontre, 1000);

}
setInterval(demarrerLaMontre, 1000);
// Exercuter la fonction chaque second
