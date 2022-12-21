// BOUCLE #1.2

// for (let index = 1; index <= 20; index++) {
//     modulo = index %3;
//     (modulo==0) && console.log(index);
// }

// BOUCLE #2.2

// let nbr;
// do {
//     nbr= +prompt("Saisie un nombre pair!");

//     if (nbr % 2 != 0) {
//         alert("Ce nombre n'est pas pair. REESSAYE");
//       }

// } while (nbr % 2);
// nbr= alert("BIEN JOUER")

// BOUCLE #2.3

// for (let index = 1; index <=10; index++) {
//     console.log(index);
//     if (index >6) {
//         break;
//     }
// }

// BOUCLE #2.4

// for (let index = 1; index <=10; index++) {
//     if (index % 2) {
//         continue;
//     }
//     console.log(index);
// }

// BOUCLE #2.5

for (let index = 1; index <= 10; index++) {
    console.log(index);
    if (index > 4) {
        console.log('La boucle a été intérrompue')
        break;        
    }
}