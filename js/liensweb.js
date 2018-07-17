//Activité 1
let listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];
// fonction qui affiche le tableau pour chaque objet de listeLiens
function refresh() {

    document.getElementById("contenu").innerHTML = null;

    listeLiens.forEach(function (listeLiens) {
        let newdiv = document.createElement("div");//création de la div class .lien
        newdiv.className = "lien";
        document.getElementById("contenu").appendChild(newdiv);

        let lien = document.createElement("h4");//ajout du contenu du tableau 
        lien.innerHTML = "<a href=" + listeLiens.url + " style='color:#428bca;'>" + listeLiens.titre + "</a>" + " <span>" + listeLiens.url + "<br>" + listeLiens.auteur + "</span>";
        newdiv.appendChild(lien);

    })
};
//Activité 2
// création de la fonction du bouton ajouter un lien
function btncreat() {
    document.getElementById("divbtn").innerHTML = null;

    let btn = document.createElement("button");
    btn.id = "btnajout";
    btn.textContent = "ajouter un lien";
    btn.style.margin = "10px";
    document.getElementById("divbtn").appendChild(btn);
    creatForm();
};

function tempDiv() {
    let tempDiv = document.createElement("h2");
    tempDiv.textContent = " Lien Ajouté !";
    tempDiv.style.backgroundColor = "#ccedf0"
    tempDiv.style.padding = "10px"
    document.getElementById("alert").appendChild(tempDiv);
};

refresh(); //appel de la fonction tableau
btncreat();// appel du bouton
//Ajout d'un event sur le bouton btnajout
function creatForm() {
    document.getElementById("btnajout").addEventListener("click", function () {
        document.getElementById("btnajout").style.display = "none" //disparition du bouton "ajouter un lien"

        //déclaration des champs du formulaire
        let form = document.createElement("form");
        let elementTitre = document.createElement("input");
        let elementUrl = document.createElement("input");
        let elementNom = document.createElement("input");
        let elementEnvoyer = document.createElement("input");

        document.getElementById("divbtn").appendChild(form);

        //champ titre
        elementTitre.type = "text";
        elementTitre.name = "titre";
        elementTitre.placeholder = "Ajouter le titre";
        elementTitre.required = true
        form.appendChild(elementTitre);
        //champ url
        elementUrl.type = "text";
        elementUrl.name = "url";
        elementUrl.placeholder = "Ajouter l'url";
        elementUrl.required = true
        form.appendChild(elementUrl);
        //champ nom
        elementNom.type = "text";
        elementNom.name = "nom";
        elementNom.placeholder = "Ajouter votre nom";
        elementNom.required = true
        form.appendChild(elementNom);
        //bouton Ajouter
        elementEnvoyer.type = "button";
        elementEnvoyer.value = "Ajouter";
        elementEnvoyer.name = "boutonEnvoyer";
        form.appendChild(elementEnvoyer);

        //ajouter un nouveau lien au click

        elementEnvoyer.addEventListener("click", function () {
            // création de la nouvelle entrée en fonction des champs
            let newLien = {
                titre: elementTitre.value,
                url: elementUrl.value,
                auteur: elementNom.value
            };

            listeLiens.unshift(newLien); // ajout de l'entrée en haut du tableau
            tempDiv();
            refresh();// actualisation de la div contenu
            btncreat();// réinitialisation du bouton ajouter lien
        });
    });
}
