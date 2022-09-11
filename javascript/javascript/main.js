// console.log("-----------1 užduotis----------------");

// let name = "Tadas";
// let surname = "Lukošius";
// let birthYear = "1991";
// let currentYear = "2022";


// console.log("Aš esu " + name + " " + surname + ". Man yra " + (currentYear - birthYear) + " metai(ų).");

// // console.log("=============math random=============")
// // console.log(Math.random());
// // console.log(Math.random() * 100)

// //Math.ceil skaičius apvalinamas į viršų
// //Math.round apvalinamas skaičius pagal taisykle
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

// // console.log("---------------sąlyginiai sakiniai----------------")

// // if(5 > 4){
// //     console.log("teisingas")
// // }
// // else{
// //     console.log("neteisingas")
// // }

// console.log("-----------2 užduotis----------------");

// let randomNumber1 = ((Math.random() * 4));
// let randomNumber2 = ((Math.random() * 4));


// if (randomNumber1  > = randomNumber2) {
//     console.log(Math.round((randomNumber1 / randomNumber2) * 100) / 100);
// }
// else {
//     console.log(Math.round((randomNumber2 / randomNumber1) * 100) / 100)
// };

// console.log("-----------3 užduotis----------------");
// // pataisyti
// let randomNumber3 = (Math.floor(Math.random() * 25));
// let randomNumber4 = (Math.floor(Math.random() * 25));
// let randomNumber5 = (Math.floor(Math.random() * 25));

// // console.log(randomNumber3);
// // console.log(randomNumber4);
// // console.log(randomNumber5);

// if (randomNumber3  <  randomNumber4) {
//     if (randomNumber4  <  randomNumber5) {
//         console.log(randomNumber4);
//     }
// };

// if (randomNumber3  <  randomNumber5) {
//     if (randomNumber5  <  randomNumber4) {
//         console.log(randomNumber5);
//     }
// }

// if (randomNumber4  <  randomNumber3) {
//     if (randomNumber3  <  randomNumber5) {
//         console.log(randomNumber3);
//     }
// }

// if (randomNumber4  <  randomNumber5) {
//     if (randomNumber5  <  randomNumber3) {
//         console.log(randomNumber5);

//     }

//     if (randomNumber5  <  randomNumber4) {
//         if (randomNumber4  <  randomNumber3) {
//             console.log(randomNumber4);
//         }
//     }

//     if (randomNumber5  <  randomNumber3) {
//         if (randomNumber3  <  randomNumber4) {
//             console.log(randomNumber3);
//         }
//     }

//     if (randomNumber3 == randomNumber4) {
//         if (randomNumber5  <  randomNumber3) {
//             console.log(randomNumber4);
//         }
//     }

//     if (randomNumber3 == randomNumber5) {
//         if (randomNumber4  <  randomNumber3) {
//             console.log(randomNumber3);
//         }
//     }

//     if (randomNumber4 == randomNumber5) {
//         if (randomNumber3  <  randomNumber4) {
//             console.log(randomNumber4);
//         }
//     }

//     if (randomNumber3 == randomNumber4) {
//         if (randomNumber5 > randomNumber3) {
//             console.log(randomNumber4);
//         }
//     }

//     if (randomNumber3 == randomNumber5) {
//         if (randomNumber4 > randomNumber3) {
//             console.log(randomNumber3);
//         }
//     }

//     if (randomNumber4 == randomNumber5)
//         if (randomNumber3 > randomNumber4) {
//             console.log(randomNumber4);
//         }
// }

// console.log("------------------4 užduotis---------------------")

// // pataisyti su Math.round, nes math.ceil gali būti nulis.
// let A = (Math.ceil(Math.random() * 10));
// let B = (Math.ceil(Math.random() * 10));
// let C = (Math.ceil(Math.random() * 10));
// let P = ((A + B + C) / 2)
// let S = (Math.sqrt(P * (P - A) * (P - B) * (P - C)))

// // let true1 = "true1";
// // let true2 = "true2";
// // let true3 = "true3";
// // let negative = "negative"

// if ((A + B > C) && (A + C > B) && (B + C > A)) {
//     console.log(((Math.round((S) * 100)) / 100));
// }
// else {
//     console.log("Trikampio pastatyti neįmanoma!!!")
// }

// console.log("------------------5 užduotis---------------------")


// let randomizer1 = (Math.round(Math.random() * 2));
// let randomizer2 = (Math.round(Math.random() * 2));
// let randomizer3 = (Math.round(Math.random() * 2));
// let randomizer4 = (Math.round(Math.random() * 2));

// let nulis1 = 0;
// let vienas1 = 0;
// let du1 = 0;
// let nulis2 = 0;
// let vienas2 = 0;
// let du2 = 0;
// let nulis3 = 0;
// let vienas3 = 0;
// let du3 = 0;
// let nulis4 = 0;
// let vienas4 = 0;
// let du4 = 0;

// // let counter1 = 

// if ((randomizer1 == 0)) {
//     nulis1 = 1;
// }

// if (randomizer1 == 1) {
//     vienas1 = 1;
// }
// else {
//     du1 = 1;
// };

// if ((randomizer2 == 0)) {
//     nulis2 = 1;
// }

// if (randomizer2 == 1) {
//     vienas2 = 1;
// }
// else {
//     du2 = 1;
// };

// if ((randomizer3 == 0)) {
//     nulis3 = 1;
// }

// if (randomizer3 == 1) {
//     vienas3 = 1;
// }
// else {
//     du3 = 1;
// }

// if ((randomizer4 == 0)) {
//     nulis4 = 1;
// }

// if (randomizer4 == 1) {
//     vienas4 = 1;
// }
// else {
//     du4 = 1;
// };

// console.log("nuliai - " + (nulis1 + nulis2 + nulis3 + nulis4));
// console.log("vienetai - " + (vienas1 + vienas2 + vienas3 + nulis4));
// console.log("dvejetai - " + (du1 + du2 + du3 + du4));

// console.log("-----------------6 užduotis----------------")

// let rnd1 = (Math.round(Math.random() * 20) - 10);
// let rnd2 = (Math.round(Math.random() * 20) - 10);
// let rnd3 = (Math.round(Math.random() * 20) - 10);


// // rnd1 = 0;
// // rnd2 = -1;
// // rnd3 = 10;
// // console.log(rnd1);

// if ((rnd1 > 0)) {
//     console.log("{" + rnd1 + "}");
// }
// if ((rnd1  <  0)) {
//     console.log("[" + rnd1 + "]");
// }
// if ((rnd1 == 0)) {
//     console.log("(" + rnd1 + ")");
// }

// if ((rnd2 > 0)) {
//     console.log("{" + rnd2 + "}");
// }
// if ((rnd2  <  0)) {
//     console.log("[" + rnd2 + "]");
// }
// if ((rnd2 == 0)) {
//     console.log("(" + rnd2 + ")");
// }

// if ((rnd3 > 0)) {
//     console.log("{" + rnd3 + "}");
// }
// if ((rnd3  <  0)) {
//     console.log("[" + rnd3 + "]");
// }
// if ((rnd3 == 0)) {
//     console.log("(" + rnd3 + ")");
// }

// console.log("--------------------------------------7 užduotis-----------------------------")

// let kaina = (3000 + Math.round(Math.random() * (5 - 3000)))
// console.log(kaina);

// if (kaina  <  1000) {
//     console.log(kaina);
// }
// if (kaina  > = 1000 && kaina  <  2000) {
//     console.log(kaina - (kaina * 0.03));


// }
// if (kaina  > = 2000) {
//     console.log(kaina - (kaina * 0.04));
// }

// console.log("---------------------------------8 užduotis----------------------------")

// let kintamasis1 = (1+(Math.round(Math.random() * 100)));
// let kintamasis2 = (1+(Math.round(Math.random() * 100)));
// let kintamasis3 = (1+(Math.round(Math.random() * 100)));

// let sk1 = 0;
// let sk2 = 0;
// let sk3 = 0;

// let kintamasis4 = kintamasis1;
// let kintamasis5 = kintamasis2;
// let kintamasis6 = kintamasis3;


// if (kintamasis1 > 10 && kintamasis1  <  90) {
//     kintamasis4 = kintamasis1;
// }
// else {
//     kintamasis4 = 0;
// }

// if (kintamasis2 > 10 && kintamasis2  <  90) {
//     kintamasis5 = kintamasis2;
// }
// else {
//     kintamasis5 = 0;
// }

// if (kintamasis3 > 10 && kintamasis3  <  90) {
//     kintamasis6 = kintamasis3;
// }
// else {
//     kintamasis6 = 0;
// }

// if (kintamasis1 > 10 && kintamasis1  <  90) {
//     sk1 = 1;
// }
// else {
//     sk1 = 0;
// }

// if (kintamasis2 > 10 && kintamasis2  <  90) {
//     sk2 = 1;
// }
// else {
//     sk2 = 0;
// }

// if (kintamasis3 > 10 && kintamasis3  <  90) {
//     sk3 = 1;
// }
// else {
//     sk3 = 0;
// }

// // console.log(kintamasis1);
// // console.log(kintamasis2);
// // console.log(kintamasis3);

// let vidurkis = ((kintamasis1 + kintamasis2 + kintamasis3) / 3);
// let vidurkis2 = ((kintamasis4 + kintamasis5 + kintamasis6) / (sk1 + sk2 + sk3));

// console.log(Math.round(vidurkis));
// if((kintamasis4 + kintamasis5 + kintamasis6) != 0 && (sk1 + sk2 + sk3) != 0){
//     console.log(Math.round(vidurkis2));
// }else{
//     console.log("Vidurkio apskaičiuoti negalima!!!");
// }



// console.log("----------------------papildoma 1---------------------------")

// // randomTime = () = >  {
// hrs = Math.round(Math.random() * 12);
// mins = Math.round(Math.random() * 60);
// secs = Math.round(Math.random() * 60);
// let hrsFormat = (hrs  <  10 ? "0" : "")
// let minFormat = (mins  <  10 ? "0" : "")
// let secsFormat = (secs  <  10 ? "0" : "")
// console.log(String(hrsFormat + hrs + ":" + minFormat + mins + ":" + secsFormat + secs));

// plius = Math.round(Math.random() * 300);
// minutesPlius = Math.floor (plius / 60);
// secsPlius = plius - (minutesPlius * 60);

// minsNew = mins + minutesPlius
// secsNew = secs + secsPlius

// if(secsNew > 60){
//     secsNew = secsNew - 60;
//     minsNew = minsNew + 1;
// }
// if(minsNew > 60){
//     minsNew = minsNew - 60;
//     hrs = hrs + 1;
// }
// if(hrs > 12){
//     hrs = hrs - 12;
// }

// let hrsFormat1 = (hrs  <  10 ? "0" : "")
// let minFormat1 = (minsNew  <  10 ? "0" : "")
// let secsFormat1 = (secsNew  <  10 ? "0" : "")

// console.log(String(hrsFormat1 + hrs + ":" + minFormat1 + minsNew + ":" + secsFormat1 + secsNew));


// // console.log(plius);
// // console.log(minutesPlius);
// // console.log(secsPlius);

// // }
// // randomTime();
// // console.log(resultTime);
console.log("-----------------------10 užduotis-------------------------------")

let rng1 = (1000 + Math.round(Math.random() * 9000));
let rng2 = (1000 + Math.round(Math.random() * 9000));
let rng3 = (1000 + Math.round(Math.random() * 9000));
let rng4 = (1000 + Math.round(Math.random() * 9000));
let rng5 = (1000 + Math.round(Math.random() * 9000));
let rng6 = (1000 + Math.round(Math.random() * 9000));

let notRngA = 0;
let notRngB = 0;
let notRngC = 0;
let notRngD = 0;
let notRngE = 0;
let notRngF = 0;

let x = 0;
let x1 = 0;
let y = 0;
let y2 = 0;
let e = 0;
let d = 0;
let z = 0;

let notRng1 = 0;
let notRng2 = 0;
let notRng3 = 0;
let notRng4 = 0;
let notRng5 = 0;
let notRng6 = 0;
// ------------poros-------------
if (rng1 > rng2) {
    notRngA = rng1;
    notRngD = rng2;
} else {
    notRngA = rng2;
    notRngD = rng1;
}

if (rng3 > rng4) {
    notRngB = rng3;
    notRngE = rng4;
} else {
    notRngB = rng4;
    notRngE = rng3;
}

if (rng5 > rng6) {
    notRngC = rng5;
    notRngF = rng6;
} else {
    notRngC = rng6;
    notRngF = rng5;
}
// 6
if (notRngA > notRngB && notRngA > notRngC) {
    notRng6 = notRngA;
    if (notRngB > notRngC) {
        x = notRngB;
        y = notRngC;
    } else {
        x = notRngC;
        y = notRngB;
    }
} 
else if (notRngB > notRngA && notRngB > notRngC) {
    notRng6 = notRngB;
    if (notRngA > notRngC) {
        x = notRngA;
        y = notRngC;
    } else {
        x = notRngC;
        y = notRngA;
    }
}
else if (notRngC > notRngB && notRngC > notRngA) {
    notRng6 = notRngC;
    if (notRngA > notRngB) {
        x = notRngA;
        y = notRngB;
    } else {
        x = notRngA;
        y = notRngB;
    }
}
// 1
if (notRngD < notRngE && notRngD < notRngF) {
    notRng1 = notRngD;
    x1 = notRngE;
    y1 = notRngF;
}
else if (notRngE < notRngD && notRngE < notRngF) {
    notRng1 = notRngE;
    x1 = notRngD;
    y1 = notRngF;

} else if (notRngF < notRngD && notRngF < notRngE) {
    notRng1 = notRngF;
    x1 = notRngD;
    y1 = notRngE;
}
// 5
if (x > x1 && x > y && x > y1) {
    notRng5 = x;
    e = x1;
    d = y;
    z = y1;
}
if (x1 > x && x1 > y && x1 > y1) {
    notRng5 = x1;
    e = x;
    d = y;
    z = y1;
}
if (y > x && y > x1 && y > y1) {
    notRng5 = y;
    e = x;
    d = x1;
    z = y1;
}
if (y1 > x && y1 > y && y1 > x1) {
    notRng5 = y1;
    e = x;
    d = y;
    z = x1;
}
// 4 3 2 
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



console.log(rng1);
console.log(rng2);
console.log(rng3);
console.log(rng4);
console.log(rng5);
console.log(rng6);
console.log("-------------")
console.log(notRng6 + " " + notRng5 + "" + " " + notRng4 + " " + " " + notRng3 + " " + notRng2 + " " + notRng1);


