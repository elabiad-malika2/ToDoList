const modele = document.getElementById("modele");
const prioriteList = document.getElementById("priorite-liste");
const titre=document.getElementById("tache-titre");
const dateTache = document.getElementById("tache-date");
const descriptionTache = document.getElementById("tache-description");
const btnAdd = document.getElementById("bouton-ajouter");
const statusTache = document.getElementById("status")
const formTache = document.getElementById("form-tache");
var  aa = []

document.querySelector("button.bg-cyan-900").onclick = () => {
    modele.style.display = "flex";

};
// Task Add
function ajoutTache(e){
    e.preventDefault();
    let tachesAjouter ={
        title:titre.value,
        description:descriptionTache.value,
        date:dateTache.value,
        status:statusTache.value,
        priorite:prioriteList.value
    }
    console.log(tachesAjouter);
    const tache = JSON.parse(localStorage.getItem("taches")) || [];
    tache.push(tachesAjouter)
    localStorage.setItem("taches", JSON.stringify(tache))
}

formTache.addEventListener("submit",ajoutTache);
