function scrollToForm() {
    document.getElementById("form").scrollIntoView({behavior: "smooth"});
}

document.getElementById("commandeForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nom = document.getElementById("nom").value;
    let telephone = document.getElementById("telephone").value;
    let type = document.getElementById("type").value;
    let texte = document.getElementById("texte").value;

    let numero = "22890766459"; // ton numéro

    let message = "Commande de cachet:\n"
        + "Nom: " + nom + "\n"
        + "Téléphone: " + telephone + "\n"
        + "Type: " + type + "\n"
        + "Texte: " + texte + "\n"
        + "Je vais envoyer mon logo après.";

    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
});