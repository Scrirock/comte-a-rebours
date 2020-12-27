document.getElementById("create").addEventListener("click", () =>{
    let secondde = document.getElementById("secondes").value;
    let minute = document.getElementById("minutes").value;
    let heure = document.getElementById("heures").value;
    let jours = document.getElementById("jours").value;


    let nbrSec = parseInt(parseInt(secondde) + parseInt(minute*60) + parseInt(heure*3600) + parseInt(jours*3600*24));

    createElement();
    Rebours(nbrSec);
});

let Rebours = function (sec){
    this.secondeTotal = sec;

    this.compteRebour = setInterval(()=>{
        this.secondeTotal --;

        this.resteJours = Math.floor(this.secondeTotal / 86400);
        this.resteHeures = Math.floor((this.secondeTotal - (this.resteJours * 86400)) / 3600 );
        this.resteMinutes = Math.floor((this.secondeTotal - (this.resteJours * 86400) - (this.resteHeures * 3600)) / 60);
        this.resteSecondes = Math.floor(this.secondeTotal - (this.resteJours * 86400) - (this.resteHeures * 3600) - (this.resteMinutes * 60));

        document.getElementById("nbrJours").innerHTML = this.resteJours;
        document.getElementById("nbrHeures").innerHTML = this.resteHeures;
        document.getElementById("nbrMinutes").innerHTML = this.resteMinutes;
        document.getElementById("nbrSecondes").innerHTML = this.resteSecondes;

        if (this.secondeTotal === 0){
            clearInterval(this.compteRebour);
        }
    }, 1000)

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

    document.getElementById("paf").style.display = "none";
}