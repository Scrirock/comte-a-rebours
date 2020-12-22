let Decompte = function (jours, heures, minutes, secondes){
    this.jours = jours;
    this.heures = heures;
    this.minutes = minutes;
    this.secondes = secondes;

    document.getElementById("nbrSecondes").innerHTML = this.secondes;
    document.getElementById("nbrMinutes").innerHTML = this.minutes;
    document.getElementById("nbrHeures").innerHTML = this.heures;
    document.getElementById("nbrJours").innerHTML = this.jours;

    this.start = function (){
        let decompte = setInterval(()=>{
            if (secondes <= 0 && minutes !== 0) {
                secondes = 60;
                minutes--;
                document.getElementById("nbrMinutes").innerHTML = minutes;
            }
            else if (minutes <= 0 && secondes === 0 && heures !== 0) {
                minutes = 60;
                heures--;
                document.getElementById("nbrHeures").innerHTML = heures;
            }
            else if (heures <= 0 && minutes <= 0 && jours !== 0){
                jours--;
                heures = 24;
                document.getElementById("nbrJours").innerHTML = jours;
            }
            else if (secondes === 0 && minutes === 0 && heures === 0 && jours === 0){
                clearInterval(decompte);
            }
            secondes--;
            document.getElementById("nbrSecondes").innerHTML = secondes;
        }, 1000)}
}

let createElement = function (){
    let container = document.createElement("div");
    container.id = "container";
    document.body.append(container);

    let divJours = document.createElement("div");
    divJours.className = "case";
    container.append(divJours);
    let infoJours = document.createElement("p");
    infoJours.className = "info";
    infoJours.innerHTML = "Jours";
    divJours.append(infoJours);
    let nbrJours = document.createElement("p");
    nbrJours.id = "nbrJours"
    divJours.append(nbrJours);

    let divHeures = document.createElement("div");
    divHeures.className = "case";
    container.append(divHeures);
    let infoHeures = document.createElement("p");
    infoHeures.className = "info";
    infoHeures.innerHTML = "Heures";
    divHeures.append(infoHeures);
    let nbrHeures = document.createElement("p");
    nbrHeures.id = "nbrHeures"
    divHeures.append(nbrHeures);

    let divMinutes = document.createElement("div");
    divMinutes.className = "case";
    container.append(divMinutes);
    let infoMinutes = document.createElement("p");
    infoMinutes.className = "info";
    infoMinutes.innerHTML = "Minutes";
    divMinutes.append(infoMinutes);
    let nbrMinutes = document.createElement("p");
    nbrMinutes.id = "nbrMinutes"
    divMinutes.append(nbrMinutes);

    let divSeconde = document.createElement("div");
    divSeconde.className = "case";
    container.append(divSeconde);
    let infoSecondes = document.createElement("p");
    infoSecondes.className = "info";
    infoSecondes.innerHTML = "Secondes";
    divSeconde.append(infoSecondes);
    let nbrSecondes = document.createElement("p");
    nbrSecondes.id = "nbrSecondes"
    divSeconde.append(nbrSecondes);
}

document.getElementById("create").addEventListener("click", ()=>{
    createElement();
    let jour = document.getElementById("jours").value;
    let heure = document.getElementById("heures").value;
    let minute = document.getElementById("minutes").value;
    let seconde = document.getElementById("secondes").value;

    let decomtpe = new Decompte(jour, heure, minute, seconde);
    decomtpe.start();
});