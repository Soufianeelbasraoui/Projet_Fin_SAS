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
//Gestion des emprunts

let emprunts = [];
function gestiondesemprunts() {
    //Enregistrer un emprunt
    function enregistrer_emprunt() {
        let idabonne = Number(prompt("Entrer l'id abonne : "));
        let abonne = abonnes.find(a => a.id === idabonne);

        if (!abonne) {
            console.log("aucun Abonné !");
            return;
        }

        let id_livre = Number(prompt("Entrer l'id du livre : "));
        let livre = livers.find(l => l.id === id_livre);

        if (!livre) {
            console.log("Livre introuvable !");
            return;
        }

        if (!livre.disponible) {
            console.log("Ce livre est deja emprunte !");
            return;
        }

        livre.disponible = false;
        emprunts.push({ idabonne, id_livre });
        console.log(`${abonne.nom} a emprunté "${livre.titre}" `);
    }

    // Enregistrer un retour 
    function enregistrer_retour() {
        let id_livre = Number(prompt("Entrer l'id du livre à retourner : "));
        let emprunt = emprunts.find(e => e.id_livre === id_livre);

        if (!emprunt) {
            console.log("------------------Aucun emprunt trouve pour ce livre !-----------------");
            return;
        }

        let livre = livers.find(l => l.id === id_livre);
        livre.disponible = true;

      
        emprunts = emprunts.filter(e => e.id_livre !== id_livre);

        console.log(`Le livre "${livre.titre}" a ete retourne.`);
    }

    //Afficher les livres empruntés par un abonné 
    function afficher_livres_empruntes() {
        let idabonne = Number(prompt("Entrer l'id de l'abonne : "));
        let abonne = abonnes.find(a => a.id === idabonne);

        if (!abonne) {
            console.log("------------aucune Abonne !----------------");
            return;
        }

        let livresEmpruntes = emprunts.filter(e => e.idabonne === idabonne);

        if (livresEmpruntes.length === 0) {
            console.log("---------aucun emprunté aucun livre.------------");
            return;
        }

        console.log(`Livres empruntés par ${abonne.nom} ${abonne.prenom}:`);
        livresEmpruntes.map(e => {
            let livre = livers.find(l => l.id === e.id_livre);
            console.log(`${livre.titre} `);
        });
    }
    //Menu de gestion des emprunts
    let choix;
    do {
        console.log("--------- Gestion des emprunts ----------");
        console.log("1: Enregistrer un emprunt");
        console.log("2: Enregistrer un retour");
        console.log("3: Afficher les livres empruntés par un abonné");
        console.log("4: Quitter");
        choix = prompt("Votre choix : ");

        switch (choix) {
            case "1":
                enregistrer_emprunt();
                break;
            case "2":
                enregistrer_retour();
                break;
            case "3":
                afficher_livres_empruntes();
                break;
            case "4":
                console.log("----------------Retour au menu principal...");
                break;
            default:
                console.log("Choix invalide !");
        }
    } while (choix !== "4");
}
//menu principale
function menu(){
   let choix;
   while(choix !=="6"){
    console.log("----------------------------Bibliothèque--------------------------------------")
    
    console.log("1:=========> Introduire un livre");
    console.log("2:=========> Ajouter plusieurs livres");
    console.log("3:=========> Opérations sur les livres");
    console.log("4:=========> Gestion des abonnés");
    console.log("5:=========> Gestion des emprunts");
    console.log("6:=========> Quitter l'application");
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
            gestiondesemprunts();
            break;        
        case "6":
            console.log("------------ Quitter l'application---------------");
            break; 
        default:
            console.log("------------------Aucun choix.----------------")        
    }
   };
}
menu();