const modele = document.getElementById("modele");
const prioriteList = document.getElementById("priorite-liste");
const titre=document.getElementById("tache-titre");
const dateTache = document.getElementById("tache-date");
const descriptionTache = document.getElementById("tache-description");
const btnAdd = document.getElementById("bouton-ajouter");
const statusTache = document.getElementById("status")
const formTache = document.getElementById("form-tache");
// Edit
const modeleEdit = document.getElementById("modele-edit");
const prioriteEdit = document.getElementById("priorite-liste-edit");
const titreEdit = document.getElementById("tache-titre-edit");
const descriptionEdit = document.getElementById("tache-description-edit");
const dateEdit = document.getElementById("tache-date-edit");
const btnEdit = document.getElementById("bouton-editer");
const statusEdit = document.getElementById("status-edit")
const formEdit = document.getElementById("form-tache-edit");




document.getElementById("addTache").onclick = () => {
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
                    <svg onclick="showEdit(${index})" xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" class="fill-current text-gray-600">
                        <path d="m14.06 9.02l.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"/>
                    </svg>
                    </div>
                <div class="absolute top-4 right-8" >

                    <svg onclick="deleteTache(${index})" xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="#990000" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"/></svg>
                </div>
                <div class="font-semibold text-black mt-4">${tache.title}</div>
                <div class="font-semibold text-gray-800 mt-4">${tache.description}</div>
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
function showEdit(index){
    const tache = JSON.parse(localStorage.getItem("taches")) || [];
    modeleEdit.style.display = "flex";
    titreEdit.value = tache[index].title;
    prioriteEdit.value = tache[index].priorite;
    statusEdit.value=tache[index].status;
    dateEdit.value=tache[index].date;
    descriptionEdit.value=tache[index].description;

    
    
    modeleEdit.addEventListener("submit",function(){
        let tacheEdit ={
            title:titreEdit.value,
            description:descriptionEdit.value,
            date:dateEdit.value,
            status:statusEdit.value,
            priorite:prioriteEdit.value
        }
        
        tache[index]=tacheEdit;
        localStorage.setItem("taches",JSON.stringify(tache));
    })

    afficherTaches();

}
function deleteTache(index){
    

}