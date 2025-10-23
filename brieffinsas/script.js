const prompt=require('prompt-sync')();

let livers=[];
 let Id_livre=1;
//Introduire un livre
function Introduireliver(){
    let aut=prompt("Enter le Auteur: ")
    let t=prompt("Enter le titre :");
    let a=Number(prompt("Enter le annee:"));
    let disponible = prompt("Disponible (oui/non) :");
    livers.push({
        id:Id_livre++,
        auteur:aut,
        titre:t,
        Année:a,
        disponible: disponible === 'oui' ? true : false
    });
     livers.map((element) =>{
      console.log(`-------- Id_livre: ${element.id} . Auteure:${element.auteur} .titre:${element.titre} Année: ${element.Année} . Disponible: ${element.disponible}--------`);
      })
     console.log("-----------Le livre a été ajouté avec succès !--------------"); 
}
//Ajouter plusieurs livres
function Ajouterplusieurslivres(){
     let liverEntre=Number(prompt("Enter le nomber de liver ajouter: "));
     for(let i=0 ;i <liverEntre;i++){
        console.log(" ===> Ente un liver");
        let aut=prompt("Enter le Auteur: ")
        let t=prompt("Enter le titre :");
        let a=Number(prompt("Enter le annèe:"));
        let disponible = prompt("Disponible (oui/non) :");
        livers.push({
            id:Id_livre++ ,
            auteur:aut,
            titre:t ,
            Année:a ,
            disponible: disponible === 'oui' ? true : false
        });
      }
      livers.map((element) =>{
      console.log(`-------- Id_livre: ${element.id} . Auteure:${element.auteur} .titre:${element.titre} Année: ${element.Année} . Disponible: ${element.disponible}--------`);
      }) 
    console.log("---------Les livres a été ajouté avec succès !---------------");  
}
// Afficher tous les livres
function Afficherlivers(){
    livers.map((element )=> 
        console.log(`------------Id_livre: ${element.id} . Auteure:${element.auteur} .titre:${element.titre} Année: ${element.Année} . Disponible: ${element.disponible}----------`))
}
//Trier les livres par titre (ascendant/descendant)
function Trierleslivrespartitre(){
    if(livers.length===0){
        console.log("------- aucune livers----------");
    }
    else{
        console.log("=======>1: Trier les livres par titre ascendant.");
        console.log("=======>2: Trier les livres par titre descendant.");
        let ascdesc=prompt("=====>Trier les livres (1.ascendant) / (2.descendant) : ");
        switch(ascdesc){
            case "1":
               //ascendant();
                let trierasc= livers.sort((a, b) => a.titre.localeCompare(b.titre));
                console.log("--------- Livres triés par titre (ascendant) ------- :");
                Afficherlivers(trierasc);
                break;
            case "2":
               // descendant();
               const trierdesc= livers.sort((a, b) => b.titre.localeCompare(a.titre));
               console.log("-----------Livres triés par titre (descendant)----------- :");
               Afficherlivers(trierdesc);
                break;    
        }
    }
}
// Opérations sur les livres
function Opérationssurleslivres(){
    let Operations;
     do{
      console.log("----------------- Opérations sur les livres ----------------------") 
      console.log("1:======>Afficher tous les livres")
      console.log("2:======>Trier les livres par titre (ascendant/descendant)");
      console.log("3:======>Trier les livres par année de publication");
      console.log("4:======>Afficher uniquement les livres disponibles");
      console.log("5:======>Rechercher un livre par ID_livre");
      console.log("6:======>routore a la menu principale");
      Operations=prompt("choisir un Opérations sur les livres: ");
      switch(Operations){
         case "1":
             Afficherlivers();
             break;
         case "2":
            Trierleslivrespartitre();
             break;
        case "3":
             // Trier par annee 
            let trierleslivresparannée= livers.sort((a,b)=>a.Année - b.Année);
            Afficherlivers(trierleslivresparannée);
            break;
        case "4":
            //Les livres disponibles
            console.log("--------- Les livres disponibles -------");
            let liver_disponibles = livers.filter((l) => l.disponible === true);
            liver_disponibles.map((element) => {
            console.log(`-------- Id_livre: ${element.id} . Auteur: ${element.auteur} . Titre: ${element.titre} . Année: ${element.Année} . Disponible: ${element.disponible} --------`);
            });
            break;   
        case "5":
            //Rechercher un livre par ID_livre
            let id_liver;
            id_liver = Number(prompt("Id_livre à rechercher : "));
            let id_Rechercher = livers.find((element) => element.id === id_liver);
        
            if (id_Rechercher) {
                console.log("-------- Livre trouvé par ID ------------");
                console.log(`--------Id_livre: ${id_Rechercher.id} . Auteur: ${id_Rechercher.auteur} . Titre: ${id_Rechercher.titre} . Année: ${id_Rechercher.Année} . Disponible: ${id_Rechercher.disponible}--------`);
            } else {
                console.log("--------------- Aucun livre trouvé -------------");
            }
            break;

        case "6":
            console.log("routore a la menu principale") ;
            break;       
      }
      } while(Operations !== "6")
}
//Gestion des abonnes
let abonnes=[];
function gestiondesabonnes(){
    let choixabonner;
     let id_abonne=1;
     // Ajouter un abonne 
    function ajouterunabonnes(){
        let n=prompt("Enter le Nom: ");
        let p=prompt("Enter le Prénom: ");
        let e=prompt("enter le  Email: ");
       
        abonnes.push({id:id_abonne++,nom:n,prenom:p,email:e}); 
    }
    // Afficher tous les abonnes
    function afficherabonnés(){
        if(abonnes.length===0){
            console.log("-----------------aucune abonne ajouter-----------------");
        }
        else{
            console.log(abonnes)
        }
    }
    do{
        console.log("------------------- Gestion des abonnes----------------");
        console.log("1:=========> Ajouter un abonne :  ");
        console.log("2:=========> Afficher tous les abonnes: ");
        console.log("3:=========> quiter")
        choixabonner=prompt("Enter un choix: ");
        console.log("------------------------------------------------------");
         switch(choixabonner){
            case "1":
                ajouterunabonnes();
                break;
            case "2":
                afficherabonnés();
                break;
            case "3":
                console.log("------------- retour a la menu principale----------------")
                break;    
         }
    }while(choixabonner !== "3");
}

//menu principale
function menu(){
   let choix;
   while(choix !=="5"){
    console.log("----------------------------Bibliothèque--------------------------------------")
    
    console.log("1:=========> Introduire un livre");
    console.log("2:=========> Ajouter plusieurs livres");
    console.log("3:=========> Opérations sur les livres");
    console.log("4:=========> Gestion des abonnés");
    console.log("5:=========> Quitter l'application");
    choix=prompt("===========> choisir un opération :")
 
    switch(choix){
        case "1":
            Introduireliver();
            break;
        case "2":
            Ajouterplusieurslivres();  
            break;
        case "3":
            Opérationssurleslivres();
            break;     
        case "4":
            gestiondesabonnes();
            break;         
        case "5":
            console.log("------------ Quitter l'application---------------");
            break; 
        default:
            console.log("------------------Aucun choix.----------------")        
    }
   };
}
menu();