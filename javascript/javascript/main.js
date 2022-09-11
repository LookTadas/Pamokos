// Negalima naudoti ciklų ir masyvų

console.log("-----------1 užduotis----------------");

// 1Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
// "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

let name = "Tadas";
let surname = "Lukošius";
let birthrngYear = "1991";
let currentrngYear = "2022";


console.log("Aš esu " + name + " " + surname + ". Man rngYra " + (currentrngYear - birthrngYear) + " metai(ų).");

// // console.log("=============math random=============")
// // console.log(Math.random());
// // console.log(Math.random() * 100)

// //Math.ceil skaičius apvalinamas į viršų
// //Math.round apvalinamas skaičius pagal taisrngYkle
// //Math.floor skaičius apvalinamas į apačią

// // console.log (Math.ceil(Math.random()*4));
// // console.log (Math.ceil(Math.random()*4));
// // console.log (Math.ceil(Math.random()*4));

// // console.log (Math.round(Math.random()*4));
// // console.log (Math.round(Math.random()*4));  
// // console.log (Math.round(Math.random()*4));  

// // console.log (Math.floor(Math.random()*4));
// // console.log (Math.floor(Math.random()*4));
// // console.log (Math.floor(Math.random()*4));

// // console.log (35 + Math.round(Math.random()*(35-40)));
// // console.log (35 + Math.ceil(Math.random()*(35-40)));
// // console.log (35 + Math.floor(Math.random()*(35-40)));

// // console.log("---------------sąlrngYginiai sakiniai----------------")

// // if(5 > 4){
// //     console.log("teisingas")
// // }
// // else{
// //     console.log("neteisingas")
// // }

console.log("-----------2 užduotis----------------");
// Naudokite funkcija Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.

let rnNr1 = ((Math.random() * 4));
let rnNr2 = ((Math.random() * 4));


if (rnNr1 >= rnNr2) {
    console.log(Math.round((rnNr1 / rnNr2) * 100) / 100);
}
else {
    console.log(Math.round((rnNr2 / rnNr1) * 100) / 100)
};

console.log("-----------3 užduotis----------------");
// Naudokite funkcija Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.

let rnNr3 = (Math.floor(Math.random() * 25));
let rnNr4 = (Math.floor(Math.random() * 25));
let rnNr5 = (Math.floor(Math.random() * 25));

// console.log(rnNr3);
// console.log(rnNr4);
// console.log(rnNr5);

if (rnNr3 > rnNr4 && rnNr3 > rnNr5) {
    if (rnNr4 > rnNr5) {
        console.log(rnNr4);
    } else {
        console.log(rnNr5);
    }
} else if (rnNr4 > rnNr3 && rnNr4 > rnNr5) {
    if (rnNr3 > rnNr5) {
        console.log(rnNr3);
    } else {
        console.log(rnNr5);
    }
} else if (rnNr5 > rnNr4 && rnNr5 > rnNr3) {
    if (rnNr4 > rnNr3) {
        console.log(rnNr4);
    } else {
        console.log(rnNr3);
    }
}

console.log("------------------4 užduotis---------------------")
// Įvedami skaičiai - a, b, c –kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 


// pataisrngYti su Math.round, nes math.ceil gali būti nulis.
let A = (Math.round(Math.random() * 10));
let B = (Math.round(Math.random() * 10));
let C = (Math.round(Math.random() * 10));
let P = ((A + B + C) / 2)
let S = (Math.sqrt(P * (P - A) * (P - B) * (P - C)))

// let true1 = "true1";
// let true2 = "true2";
// let true3 = "true3";
// let negative = "negative"

if ((A + B > C) && (A + C > B) && (B + C > A)) {
    console.log(((Math.round((S) * 100)) / 100));
}
else {
    console.log("Trikampio pastatrngYti neįmanoma!!!")
}

console.log("------------------5 užduotis---------------------")
// Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems 
// reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. (sprendimui masyvo nenaudoti).


let randomizer1 = (Math.round(Math.random() * 2));
let randomizer2 = (Math.round(Math.random() * 2));
let randomizer3 = (Math.round(Math.random() * 2));
let randomizer4 = (Math.round(Math.random() * 2));

let nulis1 = 0;
let vienas1 = 0;
let du1 = 0;
// let nulis2 = 0;
// let vienas2 = 0;
// let du2 = 0;
// let nulis3 = 0;
// let vienas3 = 0;
// let du3 = 0;
// let nulis4 = 0;
// let vienas4 = 0;
// let du4 = 0;

// let counter1 = 

if ((randomizer1 == 0)) {
    nulis1++;
}
if (randomizer1 == 1) {
    vienas1++;
}
if ((randomizer1 == 2)) {
    du1++;
};

if ((randomizer2 == 0)) {
    nulis1++;
}
if (randomizer2 == 1) {
    vienas1++;
}
if ((randomizer2 == 2)) {
    du1++;
};

if ((randomizer3 == 0)) {
    nulis1++;
}
if (randomizer3 == 1) {
    vienas1++;
}
if ((randomizer3 == 2)) {
    du1++;
};

if ((randomizer4 == 0)) {
    nulis1++;
}
if (randomizer4 == 1) {
    vienas1++;
}
if ((randomizer4 == 2)) {
    du1++;
};

console.log("nuliai - " + nulis1);
console.log("vienetai - " + vienas1);
console.log("dvejetai - " + du1);

console.log("-----------------6 užduotis----------------")
// Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}. 

let rnd1 = (Math.round(Math.random() * 20) - 10);
let rnd2 = (Math.round(Math.random() * 20) - 10);
let rnd3 = (Math.round(Math.random() * 20) - 10);


// rnd1 = 0;
// rnd2 = -1;
// rnd3 = 10;
// console.log(rnd1);

if ((rnd1 > 0)) {
    console.log("{" + rnd1 + "}");
}
if ((rnd1 < 0)) {
    console.log("[" + rnd1 + "]");
}
if ((rnd1 == 0)) {
    console.log("(" + rnd1 + ")");
}

if ((rnd2 > 0)) {
    console.log("{" + rnd2 + "}");
}
if ((rnd2 < 0)) {
    console.log("[" + rnd2 + "]");
}
if ((rnd2 == 0)) {
    console.log("(" + rnd2 + ")");
}

if ((rnd3 > 0)) {
    console.log("{" + rnd3 + "}");
}
if ((rnd3 < 0)) {
    console.log("[" + rnd3 + "]");
}
if ((rnd3 == 0)) {
    console.log("(" + rnd3 + ")");
}

console.log("--------------------------------------7 užduotis-----------------------------")
// Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.

let kaina = (3000 + Math.round(Math.random() * (5 - 3000)))
// console.log(kaina);

let štuka = (kaina - (kaina * 0.03))
let duoŠtuka = (kaina - (kaina * 0.04))

if (kaina < 1000) {
    console.log(kaina);
}
if (kaina >= 1000 && kaina < 2000) {
    console.log(štuka);
}
if (kaina >= 2000) {
    console.log(duoŠtuka);
}

console.log("---------------------------------8 užduotis----------------------------")
// Naudokite funkcija Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.


let kintamasis1 = (1 + (Math.round(Math.random() * 100)));
let kintamasis2 = (1 + (Math.round(Math.random() * 100)));
let kintamasis3 = (1 + (Math.round(Math.random() * 100)));
// console.log(kintamasis1);
// console.log(kintamasis2);
// console.log(kintamasis3);

let sk1 = 0;
let sk2 = 0;
let sk3 = 0;

let kintamasis1A = kintamasis1;
let kintamasis2A = kintamasis2;
let kintamasis63A = kintamasis3;


if (kintamasis1 > 10 && kintamasis1 < 90) {
    kintamasis1A = kintamasis1;
}
else {
    kintamasis1A = 0;
}
if (kintamasis2 > 10 && kintamasis2 < 90) {
    kintamasis2A = kintamasis2;
}
else {
    kintamasis2A = 0;
}
if (kintamasis3 > 10 && kintamasis3 < 90) {
    kintamasis3A = kintamasis3;
}
else {
    kintamasis3A = 0;
}

if (kintamasis1 > 10 && kintamasis1 < 90) {
    sk1++;
}
if (kintamasis2 > 10 && kintamasis2 < 90) {
    sk1++;
}
if (kintamasis3 > 10 && kintamasis3 < 90) {
    sk1++;
}

let vidurkis = ((kintamasis1 + kintamasis2 + kintamasis3) / 3);
let vidurkis2 = ((kintamasis1A + kintamasis2A + kintamasis3A) / (sk1));

console.log(vidurkis);
console.log(vidurkis2);

console.log("----------------------papildoma 1---------------------------")
// Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
// Čia panaudojau funkcija https://stackoverflow.com/questions/45302779/javascript-random-generate-time-in-12-hour-format


// randomTime = () = >  {
hrs = Math.round(Math.random() * 12);
mins = Math.round(Math.random() * 60);
secs = Math.round(Math.random() * 60);
let hrsFormat = (hrs < 10 ? "0" : "")
let minFormat = (mins < 10 ? "0" : "")
let secsFormat = (secs < 10 ? "0" : "")
console.log(String(hrsFormat + hrs + ":" + minFormat + mins + ":" + secsFormat + secs));

plius = Math.round(Math.random() * 300);
minutesPlius = Math.floor(plius / 60);
secsPlius = plius - (minutesPlius * 60);

minsNew = mins + minutesPlius
secsNew = secs + secsPlius

if (secsNew > 60) {
    secsNew = secsNew - 60;
    minsNew = minsNew + 1;
}
if (minsNew > 60) {
    minsNew = minsNew - 60;
    hrs = hrs + 1;
}
if (hrs > 12) {
    hrs = hrs - 12;
}

let hrsFormat1 = (hrs < 10 ? "0" : "")
let minFormat1 = (minsNew < 10 ? "0" : "")
let secsFormat1 = (secsNew < 10 ? "0" : "")

console.log(String(hrsFormat1 + hrs + ":" + minFormat1 + minsNew + ":" + secsFormat1 + secsNew));


// console.log(plius);
// console.log(minutesPlius);
// console.log(secsPlius);

// }
// randomTime();
// console.log(resultTime);
console.log("-----------------------10 užduotis-------------------------------")

let rng1 = (1000 + Math.round(Math.random() * 9000));
let rng2 = (1000 + Math.round(Math.random() * 9000));
let rng3 = (1000 + Math.round(Math.random() * 9000));
let rng4 = (1000 + Math.round(Math.random() * 9000));
let rng5 = (1000 + Math.round(Math.random() * 9000));
let rng6 = (1000 + Math.round(Math.random() * 9000));

let rngA = 0;
let rngB = 0;
let rngC = 0;
let rngD = 0;
let rngE = 0;
let rngF = 0;

let rngX = 0;
let rngX1 = 0;
let rngY = 0;
let rngY2 = 0;

let e = 0;
let d = 0;
let z = 0;

let notRng1 = 0;
let notRng2 = 0;
let notRng3 = 0;
let notRng4 = 0;
let notRng5 = 0;
let notRng6 = 0;
// poros
if (rng1 > rng2) {
    rngA = rng1;
    rngD = rng2;
} else {
    rngA = rng2;
    rngD = rng1;
}

if (rng3 > rng4) {
    rngB = rng3;
    rngE = rng4;
} else {
    rngB = rng4;
    rngE = rng3;
}

if (rng5 > rng6) {
    rngC = rng5;
    rngF = rng6;
} else {
    rngC = rng6;
    rngF = rng5;
}
// didžiausias
if (rngA > rngB && rngA > rngC) {
    notRng6 = rngA;
    if (rngB > rngC) {
        rngX = rngB;
        rngY = rngC;
    } else {
        rngX = rngC;
        rngY = rngB;
    }
}
if (rngB > rngA && rngB > rngC) {
    notRng6 = rngB;
    if (rngA > rngC) {
        rngX = rngA;
        rngY = rngC;
    } else {
        rngX = rngC;
        rngY = rngA;
    }
}
if (rngC > rngB && rngC > rngA) {
    notRng6 = rngC;
    if (rngA > rngB) {
        rngX = rngA;
        rngY = rngB;
    } else {
        rngX = rngA;
        rngY = rngB;
    }
}
// mažiausias
if (rngD < rngE && rngD < rngF) {
    notRng1 = rngD;
    rngX1 = rngE;
    rngY1 = rngF;
}
if (rngE < rngD && rngE < rngF) {
    notRng1 = rngE;
    rngX1 = rngD;
    rngY1 = rngF;

}
if (rngF < rngD && rngF < rngE) {
    notRng1 = rngF;
    rngX1 = rngD;
    rngY1 = rngE;
}
// didesnis
if (rngX > rngX1 && rngX > rngY && rngX > rngY1) {
    notRng5 = rngX;
    e = rngX1;
    d = rngY;
    z = rngY1;
}
if (rngX1 > rngX && rngX1 > rngY && rngX1 > rngY1) {
    notRng5 = rngX1;
    e = rngX;
    d = rngY;
    z = rngY1;
}
if (rngY > rngX && rngY > rngX1 && rngY > rngY1) {
    notRng5 = rngY;
    e = rngX;
    d = rngX1;
    z = rngY1;
}
if (rngY1 > rngX && rngY1 > rngY && rngY1 > rngX1) {
    notRng5 = rngY1;
    e = rngX;
    d = rngY;
    z = rngX1;
}
// didelis mažas mažesnis
if (e > d && e > z) {
    notRng4 = e;
    if (d > z) {
        notRng3 = d;
        notRng2 = z;
    } else {
        notRng3 = z;
        notRng2 = d;
    }
}
if (d > e && d > z) {
    notRng4 = d;
    if (e > z) {
        notRng3 = e;
        notRng2 = z;
    } else {
        notRng3 = z;
        notRng2 = e;
    }
}
if (z > e && z > d) {
    notRng4 = z;
    if (e > d) {
        notRng3 = e;
        notRng2 = d;
    } else {
        notRng3 = d;
        notRng2 = e;
    }
}

// console.log(rng1);
// console.log(rng2);
// console.log(rng3);
// console.log(rng4);
// console.log(rng5);
// console.log(rng6);
// console.log("-------------")
console.log(notRng6 + " " + notRng5 + "" + " " + notRng4 + " " + notRng3 + " " + notRng2 + " " + notRng1);


