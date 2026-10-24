let budget = 20000;
let prix_cahier = 1500;
let quantité_cachier = 4;
let prix_stylo = 500;
let quantité_stylo = 3;

let montant_des_cahiers = prix_cahier * quantité_cachier;
let montant_des_stylos = prix_stylo * quantité_stylo;
let montant_total_achats = montant_des_cahiers + montant_des_stylos;

if(montant_total_achats <= budget) {
    console.log("budget suffisant");
} else {
    console.log("budget insuffisant");
}