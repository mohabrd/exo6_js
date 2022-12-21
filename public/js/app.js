// BOUCLE #1.2

// for (let index = 1; index <= 20; index++) {
//     modulo = index %3;
//     (modulo==0) && console.log(index);
// }

// BOUCLE #2.2

let nbr;
do {
    nbr= +prompt("Saisie un nombre pair!");

    if (nbr % 2 != 0) {
        alert("Ce nombre n'est pas pair. REESSAYE");
      }

} while (nbr % 2);
nbr= alert("BIEN JOUER")