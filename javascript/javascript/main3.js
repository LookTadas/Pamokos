console.log("Masyvai 0 užduotis");
// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

let area = [];

for (let i = 0; i < 30; i++) {
    area.push(5 + Math.round(Math.random() *20));  
}

console.log(area);

//a. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;


let count = 0;

for (let i = 0; i < area.length; i++) {
    if(area[i] > 10){
        count++;
    }
}

console.log(count);

// b. Raskite didžiausią masyvo reikšmę;

let largest = [0]

for (let i = 0; i < area.length; i++) {
    if(area[i] > largest){
        largest = area[i]
    }
}

console.log(largest);

// c.Raskite mažiausią masyvo reikšmę;

let smallest = Math.min(...area);

console.log(smallest);

// // c. Suskaičiuokite visų reikšmių sumą;

let ave = area.reduce((a, b) => a + b, 0) / area.length;
console.log(ave);

// d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

let areaMinus1 = [];


for (let i =0; i < area.length; i++) {
    areaMinus1[i] = area[i] - 1;  
}

// console.log(areaMinus1);

// e. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

for (let i = 0; i < 10; i++) {
    let nr = (5 + Math.round(Math.random() * 20));
    areaMinus1.push(nr);
    
}

console.log(areaMinus1);
// f. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

let area10 = [];

for (let i = 0; i < 10; i++) {
    area.push(5 + Math.round(Math.random() *20));  
}
let am = areaMinus1.concat(area10);

console.log(am);

// Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indekso reikšmių, o kitas iš porinių;
// Masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
// Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
// Naudodami funkciją unset() iš masyvo ištrinkite visus elementus turinčius porinį indeksą;