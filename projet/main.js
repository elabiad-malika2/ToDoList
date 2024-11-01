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
function ajoutTache(){

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

// Show task
function afficherTaches(){
    
    const taches = JSON.parse(localStorage.getItem("taches")) || [] ;
    console.log(taches);
    taches.forEach((tache,index) => {
        const card = document.createElement("div");
        card.className="card w-full h-32 bg-white rounded-bl-3xl rounded-br-3xl flex flex-col mb-8 relative ";
        card.innerHTML = `
            <div class="absolute top-0 left-0 w-full h-2 ${tache.priorite === '1' ? 'bg-red-500' : tache.priorite === '2' ? 'bg-black' : 'bg-green-500'} rounded-t-3xl"></div>
            <div class="flex flex-col px-4 h-full justify-center items-center relative">
                <div class="absolute top-4 right-2" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" class="fill-current text-gray-600">
                        <path d="m14.06 9.02l.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"/>
                    </svg>
                </div>
                <div class="font-semibold text-gray-800 mt-4">${tache.title}</div>
                <div class="text-gray-500 absolute bottom-2 right-8">${tache.date}</div>
            </div>
        `;
        if (tache.status === "todo") {
            document.getElementById("todo-tache").appendChild(card);
        
        } else if (tache.status === "doing"){
            document.getElementById("doing-tache").appendChild(card);
        }else{
            document.getElementById("done-tache").appendChild(card);
        }
    });
    
    

}
afficherTaches();