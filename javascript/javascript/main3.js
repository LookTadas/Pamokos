// Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.

// let rng = Math.round(Math.random()*300)
let count = 0;
let rng1 ="";

for(let i = 0; i <= 300; i++){
    let rng = Math.round(Math.random()*300);
   
    if(rng > 150){
        count++;
    }

    if(rng > 275){
        rng1 += "[" +rng + "] ";
    }
    else{
        rng1 += rng + " ";
    }
}
console.log(rng1);
// console.log(rng1 + " " + "[" +rng1+"]");

console.log("skaičiai didesni yra už 150 - "+ count);


console.log("-----------------------------------------------------------------2----------------------------------------------------------------------------")
// Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.

let rng2 ="";

for(let i = 0; i <= 3000; i++){
    
    if(i % 77 == 0){
        rng2 += i + ",";
    }
}
console.log(rng2.slice(0, -1));

console.log("-----------------------------------------------------------------3----------------------------------------------------------------------------")
// Nupieškite kvadratą iš “*”, kurio kraštines sudaro 100 “*”.
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *


    for(let i = 0; i <= 100; i++){
    let star1 = "";
        for(let i = 0; i <= 100; i++){
            star1 += "*";
            // console.log(star2);
            
        }
        window.alert(star1);
    }