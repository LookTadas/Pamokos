console.log("1 uzduotis lengvesnis");
// 2. Sukurkite funkciją kuri priimtų du kintamuosius, juos sudaugintų ir atspausdintų sandaugą į konsolę.


function dauginam(a, b) {
    return a * b;

}

// console.log(dauginam(2, 3));

console.log("2 uzduotis lengvesnis");

// Sukurkite funkciją kuri priimtų vieną kintamąjį, vardą. Ir konsolėje išspausdintų “labas “ ir tą paduotą vardą.

function labas(a) {
    return ("Labas " + a);
}

// console.log(labas("Tadas"));

console.log("3 uzduotis lengvesnis");

// Sukurkite funkciją  kuri priimtų vieną kintamąjį, tekstą. Ir konsolėje išspausdintų kiek simbolių yra tame tekste.

function letters(a) {
    let regex = /[a-zA-Z-0-9]/g;
    return console.log(a.match(regex).length);
}

function letters2(a) {
    return console.log(a.length);
}
// letters("hello world 1000");
// letters2("hello world 1000");

// console.log("4 uzduotis lengvesnis");

// Sukurkite funkciją kuri priimtų 2 kintamuosius tekstus, vardą, pavardę ir atspausdintų inicialus. T.y vardo ir pavardės pirmąsias raides DIDŽIOSIOMIS raidėmis.


function inicialai(a) {
    let arr = a.split(" ");
    b = "";
    for (let i = 0; i < arr.length; i++) {
        b += arr[i].charAt() + " ";
    }
    return console.log(b);

}

// inicialai("Jonas Jonaitis")

console.log("5 uzduotis lengvesnis");

//  Sukurkite HTML div’ą su id “numberPlace”. Parašykite funkciją kuri priimtų kintamąjį, skaičių ir jį atspausdintų tame HTML elemente.

function spausdink(a) {
    return document.getElementById("numberPlace").innerHTML = "<p>" + a + "</p>";
}

// spausdink(14);
console.log("6 uzduotis lengvesnis");
// Parašykite funkciją kuri nustatytų kas bus sekantis Lt prezidentas.

console.log("7 uzduotis lengvesnis");
// Parašykite funkciją kuri sugeneruotų 3 random skaičius nuo 0 iki 5 ir atspaustintų koncolėje vienoje eilutėje atskurtus kableliais.

function rnd() {
    let a = (Math.round(Math.random() * 5));
    let b = (Math.round(Math.random() * 5));
    let c = (Math.round(Math.random() * 5));

    return console.log(a + " " + b + " " + c)
}

// rnd();

console.log("8 uzduotis lengvesnis");
// Parašykite funkciją kuri priimtų du kintamuosius “nuo” ir “iki”. Funkcija turi sugeneruoti random skaičių tame intervale ir jį GRAŽINTI.

function exRnd(a, b) {
    let high = 0;
    let low = 0;

    if (a > b) {
        high = a;
    }
    else {
        low = b;
    }

    return console.log((high + Math.round(Math.random() * (low - high))));

}
// exRnd(25, 10);

console.log("9 uzduotis lengvesnis");
// Sukurkite HTML div’ą su id “sequence”. Parašykite funkciją kuri sugeneruotų 10 p tagų su skaičiais juose nuo 1 iki 10 ir atiduotų į tą HTML elementą. Rezultate HTML’e turi matytis 10 p tagų su skaičiais iš eilės. Šie TURI BŪTI SUGENERUOTI JAVASCRIPTU.


function sek() {
    let string = " ";
    for (let i = 0; i < 10; i++) {
        string += document.getElementById("sequence").innerHTML += "<p>" + i + "</p>";
    }
    return string;
}
// sek();

console.log("0 uzduotis middleground");
// 1. Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu, ir gražintų reikšmę (paduodate du parametrus, skaičių ir laipsnį)

function powerUp(a, b) {

    let c = a;
    for (let i = 1; i < b; i++) {
        c *= a;
        // console.log(c);

    }
    return console.log(c);

}

// powerUp(5, 3);


console.log("1 uzduotis middleground");

// Sukurkite funkciją kuri priims tris parametrus. skaičių, laipsnį ir HTML elemento id.
// ši funkcija naudos pirmają funkciją ir jos rezultatą gražins į HTML elementą.

function powUpHTML(a, b) {
    let c = a;
    for (let i = 1; i < b; i++) {
        c *= a;
    }

    return document.getElementById("vidurkis").innerHTML = "<p>" + c + "<p>";
}

powUpHTML(4, 3);

console.log("2 uzduotis middleground");
// Sukurkite funkciją kuri priimtų vieną parametrą, HTML elemento id. Ši funkcija paims prieš tai jau minėtą HTML elementą, iš jo paims skaičių, ir išspausdins visus variantus koks galėjo būti pirminis skaičius kurį kėlėme laipsniu. pvz jei į antrąją funkciją padavėme 2 ir kėlėme 4 laipsniu, ir gavome skaičių 16, tai ši funkcija turėtų išspausdinti, kad pradžioje greičiausiai turėjome skaičių 2 pakeltą 4 laipsniu, arba skaičių 4 pakeltą 2 laipsniu.
// !!! NEVEIKIA JEIGU IŠJUNGTA 1 UŽDUOTIS !!!

function posabilities() {
    let prime = document.getElementById("vidurkis").outerHTML;
    let num = (prime.match(/\d+/)[0]);
    let resArr = [];
    for (let i = 1; i < num; i++) {
        let posRes = i;
        for (let a = 1; a < num; a++) {
            posRes *= i;
            // if(posRes > num){
            //     break;
            // }
            if (posRes == num) {
                resArr.push([i, a + 1])
                if (a == 1) {
                    i = num;
                }
                break;
            }

        }

    }
    return console.log(resArr);

}

posabilities();

console.log("0 užduotis sunkesni")
// Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra įterpiamas į h1 tagą;

function print(a) {
    return document.getElementById("text").innerHTML = "<h1>" + a + "<h1>";
}

print("Niekada nepamiršk.");

console.log("1 užduotis sunkesni")
// Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas į h tagą, o antrasis tago numeris (1-6). Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;

function headLine(a, b) {
    let witchH = ["<h1>", "<h2>", "<h3>", "<h4>", "<h5>", "<h6>"];
    return document.getElementById("headLine").innerHTML = witchH[a] + b + witchH[a];
}

headLine(1, "Pats svarbiausias dalykas - tvarkingas kodas, lygiai taip pat kaip ir tvarkingas stalas.");

console.log("2 užduotis sunkesni")
// Sugeneruokite atsitiktinį stringą iš raidžių ir skaičių. Visus skaitmenis stringe įdėkite į h1 tagą. Raides palikite. Jegu iš eilės eina keli skaitmenys, juos į tagą reikią dėti kartu (h1 atsidaro prieš pirmą ir užsidaro po paskutinio) Keitimui naudokite pirmo patobulintą (jeigu reikia) uždavinio funkciją.

function makeid(lenght) {
    let result = [];
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < lenght; i++) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
        console.log(result);
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i] == result[i].match(/[0-9]/)) {
            document.getElementById("randomText").innerHTML += "<h1>" + result[i] + "<h1>";
        }

    }
}
// console.log(makeid(20));

console.log("3 užduotis sunkesni")
// Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.

randomizerSortorizer(100)
function randomizerSortorizer(a) {
    let alfa = [];
    for (let i = 0; i < a; i++) {
        alfa.push((33 + Math.round(Math.random() * (44))));
    }

    let resArr = [];
    let resArr1 = [];
    for (let b = 0; b < alfa.length; b++) {
        let num = alfa[b];
        for (let i = 1; i < num; i++) {
            let posRes = i;
            for (let a = 1; a < num; a++) {
                posRes *= i;
                // if(posRes > num){
                //     break;
                // }
                if (posRes == num) {
                    resArr.push([i, a + 1]);
                    resArr1.push(alfa[b]);

                    if (a == 1) {
                        i = num;
                    }
                    break;
                }

            }

        }
        resArr.sort(function (a, b) {
            return b[1] - a[1];
        })
    }
    console.log(resArr);
    // console.log(resArr1);
    // console.log(alfa);
    return

}

console.log("4 užduotis sunkesni")
// Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.

function randomaizer(a) {
    let alfa = [];
    for (let i = 0; i < a; i++) {
        alfa.push((333 + Math.round(Math.random() * (444))));
    }

    let alfa2 = [];
    for (let b = 0; b < alfa.length; b++) {
        let num = alfa[b];
        let b1 = b;
        for (let i = 1; i < num; i++) {
            let posRes = i;
            let b2 = b1;
            for (let a = 1; a < num; a++) {
                posRes *= i;
                // if(posRes > num){
                //     break;
                // }
                if (posRes == num) {
                    alfa2.push(num);
                }
                if (a > num && a == 1) {
                    alfa.splice(b1);
                }
            }

        }

    }

    console.log(alfa2);
    return

}
randomaizer(100);

console.log("5 užduotis sunkesni")
// Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;

rngMasyvas(10, 20);
function rngMasyvas(a, b) {
    let alfa = [0];
    index = a + Math.round(Math.random() * (b - a))
    for (let i = 0; i < index; i++) {
        let omega = i;
        let a = [];
        alfa[i] = a;
        if (i < index - 1) {
            for (let i = 0; i < index; i++) {
                if (i < index - 1) {
                    a[i] = Math.round(Math.random() * (10));
                }
                else if (i == index - 1) {
                    a[i] = omega;
                }
            }
        }
        else if (i == index - 1) {
            let alfa2 = [0];
            a[i] = alfa2;            
            for (let i = 0; i < index; i++) {
                let a2 = [];
                alfa2[i] = a2;
                if (i < index - 1) {
                    for (let i = 0; i < index; i++) {
                            a2[i] = Math.round(Math.random() * (10));
                }
            }
            return alfa;
        }
        }
    }
}

    console.log(rngMasyvas(10, 10));
console.log("6 užduotis sunkesni");
// Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. Skaičiuoti reikia visuose masyvuose ir submasyvuose.

function calculate(a){
    let alfa  = []
    alfa = a;
    sum = 0;

    for (let i = 0; i < alfa.length; i++) {
        let a = i
        let omega = alfa[i];
            if(i < alfa.length - 1){
                for (let i = 0; i < omega.length; i++) {
                    if(i < omega.length - 1){
                    sum += omega[i];
                    }else{
                        let zulu = []
                        zulu = omega[i];
                        for (let i = 0; i < zulu.length; i++) {
                            sum += zulu[i];
                            
                        }
                    }                              
                }
            }
                   
    }
    return sum;
}
console.log(calculate(rngMasyvas(10, 10)));

console.log("6 užduotis sunkesni");
// Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33. Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33. Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. Kartokite, kol sąlyga nereikalaus pridėti elemento. 



console.log("9 uzduotis hard");
// Sukurkite funkciją kuri priimtų vieną parametrą, HTML elemento id. Ši funkcija paims prieš tai jau minėtą HTML elementą, iš jo paims skaičių, ir išspausdins visus variantus koks galėjo būti pirminis skaičius kurį kėlėme laipsniu. pvz jei į antrąją funkciją padavėme 2 ir kėlėme 4 laipsniu, ir gavome skaičių 16, tai ši funkcija turėtų išspausdinti, kad pradžioje greičiausiai turėjome skaičių 2 pakeltą 4 laipsniu, arba skaičių 4 pakeltą 2 laipsniu.
// !!! NEVEIKIA JEIGU IŠJUNGTA 1 UŽDUOTIS !!!

function posabilities() {
    let prime = document.getElementById("vidurkis").outerHTML;
    let num = (prime.match(/\d+/)[0]);
    let resArr = [];
    for (let i = 1; i < num; i++) {
        let posRes = i;
        for (let a = 1; a < num; a++) {
            posRes *= i;
            // if(posRes > num){
            //     break;
            // }
            if (posRes == num) {
                resArr.push([i, a + 1])
                if (a == 1) {
                    i = num;
                }
                break;
            }

        }

    }
    return console.log(resArr);

}

posabilities();


