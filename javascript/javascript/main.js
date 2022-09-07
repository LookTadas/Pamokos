console.log("-----------1 užduotis----------------");

let name = "Tadas";
let surname = "Lukošius";
let birthYear = "1991";
let currentYear = "2022";


console.log("Aš esu " + name + " " + surname + ". Man yra " + (currentYear - birthYear) + " metai(ų).");

// console.log("=============math random=============")
// console.log(Math.random());
// console.log(Math.random() * 100)

//Math.ceil skaičius apvalinamas į viršų
//Math.round apvalinamas skaičius pagal taisykle
//Math.floor skaičius apvalinamas į apačią

// console.log (Math.ceil(Math.random()*4));
// console.log (Math.ceil(Math.random()*4));
// console.log (Math.ceil(Math.random()*4));

// console.log (Math.round(Math.random()*4));
// console.log (Math.round(Math.random()*4));  
// console.log (Math.round(Math.random()*4));  

// console.log (Math.floor(Math.random()*4));
// console.log (Math.floor(Math.random()*4));
// console.log (Math.floor(Math.random()*4));

// console.log (35 + Math.round(Math.random()*(35-40)));
// console.log (35 + Math.ceil(Math.random()*(35-40)));
// console.log (35 + Math.floor(Math.random()*(35-40)));

// console.log("---------------sąlyginiai sakiniai----------------")

// if(5 > 4){
//     console.log("teisingas")
// }
// else{
//     console.log("neteisingas")
// }

console.log("-----------2 užduotis----------------");

let randomNumber1 = ((Math.random() * 4));
let randomNumber2 = ((Math.random() * 4));


if (randomNumber1 >= randomNumber2) {
    console.log(Math.round((randomNumber1 / randomNumber2) * 100) / 100);
}
else {
    console.log(Math.round((randomNumber2 / randomNumber1) * 100) / 100)
};

console.log("-----------3 užduotis----------------");

let randomNumber3 = (Math.floor(Math.random() * 25));
let randomNumber4 = (Math.floor(Math.random() * 25));
let randomNumber5 = (Math.floor(Math.random() * 25));

// console.log(randomNumber3);
// console.log(randomNumber4);
// console.log(randomNumber5);

if (randomNumber3 < randomNumber4) {
    if (randomNumber4 < randomNumber5) {
        console.log(randomNumber4);
    }
};

if (randomNumber3 < randomNumber5) {
    if (randomNumber5 < randomNumber4) {
        console.log(randomNumber5);
    }
};

if (randomNumber4 < randomNumber3) {
    if (randomNumber3 < randomNumber5) {
        console.log(randomNumber3);
    }
};

if (randomNumber4 < randomNumber5) {
    if (randomNumber5 < randomNumber3) {
        console.log(randomNumber5);

    };

    if (randomNumber5 < randomNumber4) {
        if (randomNumber4 < randomNumber3) {
            console.log(randomNumber4);
        }
    };

    if (randomNumber5 < randomNumber3) {
        if (randomNumber3 < randomNumber4) {
            console.log(randomNumber3);
        }
    };

    if (randomNumber3 == randomNumber4) {
        if (randomNumber5 < randomNumber3) {
            console.log(randomNumber4);
        }
    };

    if (randomNumber3 == randomNumber5) {
        if (randomNumber4 < randomNumber3) {
            console.log(randomNumber3);
        }
    };

    if (randomNumber4 == randomNumber5) {
        if (randomNumber3 < randomNumber4) {
            console.log(randomNumber4);
        }
    };

    if (randomNumber3 == randomNumber4) {
        if (randomNumber5 > randomNumber3) {
            console.log(randomNumber4);
        }
    };

    if (randomNumber3 == randomNumber5) {
        if (randomNumber4 > randomNumber3) {
            console.log(randomNumber3);
        }
    };

    if (randomNumber4 == randomNumber5)
        if (randomNumber3 > randomNumber4) {
            console.log(randomNumber4);
        }
};

console.log("------------------4 užduotis---------------------")

let A = (Math.ceil(Math.random() * 10));
let B = (Math.ceil(Math.random() * 10));
let C = (Math.ceil(Math.random() * 10));
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
    console.log("Trikampio pastatyti neįmanoma!!!")
}

console.log("------------------5 užduotis---------------------")


let randomizer1 = (Math.round(Math.random() * 2));
let randomizer2 = (Math.round(Math.random() * 2));
let randomizer3 = (Math.round(Math.random() * 2));
let randomizer4 = (Math.round(Math.random() * 2));

let nulis1 = 0
let vienas1 = 0
let du1 = 0
let nulis2 = 0
let vienas2 = 0
let du2 = 0
let nulis3 = 0
let vienas3 = 0
let du3 = 0
let nulis4 = 0
let vienas4 = 0
let du4 = 0

// let counter1 = 

if ((randomizer1 == 0)) {
    nulis1 = 1;
}

else if (randomizer1 == 1) {
    vienas1 = 1;
}
else {
    du1 = 1;
};

if ((randomizer2 == 0)) {
    nulis2 = 1;
}

else if (randomizer2 == 1) {
    vienas2 = 1;
}
else {
    du2 = 1;
};

if ((randomizer3 == 0)) {
    nulis3 = 1;
}

else if (randomizer3 == 1) {
    vienas3 = 1;
}
else {
    du3 = 1;
}

if ((randomizer4 == 0)) {
    nulis4 = 1;
}

else if (randomizer4 == 1) {
    vienas4 = 1;
}
else {
    du4 = 1;
};

console.log("nuliai - " + (nulis1 + nulis2 + nulis3 + nulis4));
console.log("vienetai - " + (vienas1 + vienas2 + vienas3 + nulis4));
console.log("dvejetai - " + (du1 + du2 + du3 + du4));

console.log("-----------------6 užduotis----------------")

let rnd1 = (Math.round(Math.random() * 20) - 10);
let rnd2 = (Math.round(Math.random() * 20) - 10);
let rnd3 = (Math.round(Math.random() * 20) - 10);

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

let kaina = (3000 + Math.round(Math.random() * (5 - 3000)))
console.log(kaina);

if (kaina < 1000) {
    console.log(kaina);
}
if (kaina >= 1000 && kaina < 2000) {
    console.log(kaina - (kaina * 0.03));


}
else if (kaina >= 2000) {
    console.log(kaina - (kaina * 0.04));
}

console.log("---------------------------------8 užduotis----------------------------")

let kintamasis1 = ((Math.round(Math.random() * 100)));
let kintamasis2 = ((Math.round(Math.random() * 100)));
let kintamasis3 = ((Math.round(Math.random() * 100)));

let sk1 = 0;
let sk2 = 0;
let sk3 = 0;

let kintamasis4 = kintamasis1;
let kintamasis5 = kintamasis2;
let kintamasis6 = kintamasis3;


if (kintamasis1 > 10 && kintamasis1 < 90) {
    kintamasis4 = kintamasis1;
}
else {
    kintamasis4 = 0;
}

if (kintamasis2 > 10 && kintamasis2 < 90) {
    kintamasis5 = kintamasis2;
}
else {
    kintamasis5 = 0;
}

if (kintamasis3 > 10 && kintamasis3 < 90) {
    kintamasis6 = kintamasis3;
}
else {
    kintamasis6 = 0;
}

if (kintamasis1 > 10 && kintamasis1 < 90) {
    sk1 = 1;
}
else {
    sk1 = 0;
}

if (kintamasis2 > 10 && kintamasis2 < 90) {
    sk2 = 1;
}
else {
    sk2 = 0;
}

if (kintamasis3 > 10 && kintamasis3 < 90) {
    sk3 = 1;
}
else {
    sk3 = 0;
}

// console.log(kintamasis1);
// console.log(kintamasis2);
// console.log(kintamasis3);

let vidurkis = ((kintamasis1 + kintamasis2 + kintamasis3) / 3);
let vidurkis2 = ((kintamasis4 + kintamasis5 + kintamasis6) / (sk1 + sk2 + sk3));

console.log(Math.round(vidurkis));
console.log(Math.round(vidurkis2));


console.log("----------------------papildoma 1---------------------------")

// randomTime = () => {
hrs = Math.round(Math.random() * 12);
mins = Math.round(Math.random() * 60);
secs = Math.round(Math.random() * 60);
let hrsFormat = (hrs < 10 ? "0" : "")
let minFormat = (mins < 10 ? "0" : "")
let secsFormat = (secs < 10 ? "0" : "")
console.log(String(hrsFormat + hrs + ":" + minFormat + mins + ":" + secsFormat + secs));

plius = Math.round(Math.random() * 300)
minutesPlius = Math.floor (plius / 60);
secsPlius = plius - (minutesPlius * 60);

minsNew = mins + minutesPlius
secsNew = secs + secsPlius

if(secsNew > 60){
    secsNew = secsNew - 60;
    minsNew = minsNew + 1;
}
if(minsNew > 60){
    minsNew = minsNew - 60;
    hrs = hrs + 1;
}
if(hrs > 12){
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

let rng1 = (1000 + Math.round(Math.random()* 9000));
let rng2 = (1000 + Math.round(Math.random()* 9000));
let rng3 = (1000 + Math.round(Math.random()* 9000));
let rng4 = (1000 + Math.round(Math.random()* 9000));
let rng5 = (1000 + Math.round(Math.random()* 9000));
let rng6 = (1000 + Math.round(Math.random()* 9000));

let notRng1 = "";
let notRng2 = "";
let notRng3 = "";
let notRng4 = "";
let notRng5 = "";
let notRng6 = "";

if(rng1>rng2 && rng1>rng3 && rng1>rng4 && rng1>rng5 && rng1>rng6){
    notRng1 = rng1;
}
else if(rng6>rng1 && rng6>rng2 && rng6>rng3 && rng6>rng4 && rng6>rng5){
    notRng1 = rng6;
}
else if(rng5>rng6 && rng5>rng1 && rng5>rng2 && rng5>rng3 && rng5>rng4){
    notRng1 = rng5;
}
else if(rng4>rng5 && rng4>rng6 && rng4>rng1 && rng4>rng2 && rng4>rng3){
    notRng1 = rng4;
}
else if(rng3>rng4 && rng3>rng5 && rng3>rng6 && rng3>rng1 && rng3>rng2){
    notRng1 = rng3;
}
else if(rng2>rng3 && rng2>rng4 && rng2>rng5 && rng2>rng6 && rng2>rng1){
    notRng1 = rng2;
}
else{

}
// --------------------------------2------------------------------
if(rng1>rng2 && rng1>rng3 && rng1>rng4 && rng1>rng5 && rng1<rng6){
    notRng2 = rng1;
}
else if(rng6>rng1 && rng6>rng2 && rng6>rng3 && rng6>rng4 && rng6<rng5){
    notRng2 = rng6;
}
else if(rng5>rng6 && rng5<rng1 && rng5>rng2 && rng5>rng3 && rng5<rng4){
    notRng2 = rng5;
}
else if(rng4>rng5 && rng4>rng6 && rng4>rng1 && rng4>rng2 && rng4<rng3){
    notRng2 = rng4;
}
else if(rng3>rng4 && rng3>rng5 && rng3>rng6 && rng3>rng1 && rng3<rng2){
    notRng2 = rng3;
}
else if(rng2>rng3 && rng2>rng4 && rng2>rng5 && rng2>rng6 && rng2<rng1){
    notRng2 = rng2;
}
else{

}
 // ------------------------------3--------------------------------   
 if(rng1>rng2 && rng1>rng3 && rng1>rng4 && rng1<rng5 && rng1<rng6){
    notRng3 = rng1;
}
else if(rng6>rng1 && rng6>rng2 && rng6>rng3 && rng6<rng4 && rng6<rng5){
    notRng3 = rng6;
}
else if(rng5>rng6 && rng5>rng1 && rng5>rng2 && rng5<rng3 && rng5<rng4){
    notRng3 = rng5;
}
else if(rng4>rng5 && rng4>rng6 && rng4>rng1 && rng4<rng2 && rng4<rng3){
    notRng3 = rng4;
}
else if(rng3>rng4 && rng3>rng5 && rng3>rng6 && rng3<rng1 && rng3<rng2){
    notRng3 = rng3;
}
else if(rng2>rng3 && rng2>rng4 && rng2<rng5 && rng2<rng6 && rng2<rng1){
    notRng3 = rng2;
}
else{

}
 // -----------------------------4---------------------------------   
 if(rng1>rng2 && rng1>rng3 && rng1<rng4 && rng1<rng5 && rng1<rng6){
    notRng4 = rng1;
}
else if(rng6>rng1 && rng6>rng2 && rng6<rng3 && rng6<rng4 && rng6<rng5){
    notRng4 = rng6;
}
else if(rng5>rng6 && rng5>rng1 && rng5<rng2 && rng5<rng3 && rng5<rng4){
    notRng4 = rng5;
}
else if(rng4>rng5 && rng4>rng6 && rng4<rng1 && rng4<rng2 && rng4<rng3){
    notRng4 = rng4;
}
else if(rng3>rng4 && rng3>rng5 && rng3<rng6 && rng3<rng1 && rng3<rng2){
    notRng4 = rng3;
}
else if(rng2>rng3 && rng2>rng4 && rng2<rng5 && rng2<rng6 && rng2<rng1){
    notRng4 = rng2;
}
else{
}
 // -----------------------------5---------------------------------   
 if(rng1>rng2 && rng1<rng3 && rng1<rng4 && rng1<rng5 && rng1<rng6){
    notRng5 = rng1;
}
else if(rng6>rng1 && rng6<rng2 && rng6<rng3 && rng6<rng4 && rng6<rng5){
    notRng5 = rng6;
}
else if(rng5>rng6 && rng5<rng1 && rng5<rng2 && rng5<rng3 && rng5<rng4){
    notRng5 = rng5;
}
else if(rng4>rng5 && rng4<rng6 && rng4<rng1 && rng4<rng2 && rng4<rng3){
    notRng5 = rng4;
}
else if(rng3>rng4 && rng3<rng5 && rng3<rng6 && rng3<rng1 && rng3<rng2){
    notRng5 = rng3;
}
else if(rng2>rng3 && rng2<rng4 && rng2<rng5 && rng2>rng6 && rng2<rng1){

    notRng5 = rng2;
}
else{
    
}
// -----------------------------6---------------------------------
if(rng1<rng2 && rng1<rng3 && rng1<rng4 && rng1<rng5 && rng1<rng6){
    notRng6 = rng1;
}
else if(rng6<rng1 && rng6<rng2 && rng6<rng3 && rng6<rng4 && rng6<rng5){
    notRng6 = rng6;
}
else if(rng5<rng6 && rng5<rng1 && rng5<rng2 && rng5<rng3 && rng5<rng4){
    notRng6 = rng5;
}
else if(rng4<rng5 && rng4<rng6 && rng4<rng1 && rng4<rng2 && rng4<rng3){
    notRng6 = rng4;
}
else if(rng3<rng4 && rng3<rng5 && rng3<rng6 && rng3<rng1 && rng3<rng2){
    notRng6 = rng3;
}
else if(rng2<rng3 && rng2<rng4 && rng2<rng5 && rng2<rng6 && rng2<rng1){

    notRng6 = rng2;
}
else{
    
}

console.log(rng1);
console.log(rng2);
console.log(rng3);
console.log(rng4);
console.log(rng5);
console.log(rng6);
console.log("-------------")
console.log(notRng1+ " " + notRng2 +" "+ notRng3 +" "+ notRng4 +" "+ notRng5 +" "+ notRng6);


