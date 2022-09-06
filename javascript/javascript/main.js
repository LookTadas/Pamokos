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


if(randomNumber1 >= randomNumber2){
    console.log(Math.round((randomNumber1 / randomNumber2)* 100) / 100);
}
else{
    console.log(Math.round((randomNumber2 / randomNumber1)*100) / 100)
};

console.log ("-----------3 užduotis----------------");

let randomNumber3 = (Math.floor(Math.random() * 25));
let randomNumber4 = (Math.floor(Math.random() * 25));
let randomNumber5 = (Math.floor(Math.random() * 25));

// console.log(randomNumber3);
// console.log(randomNumber4);
// console.log(randomNumber5);

if(randomNumber3 < randomNumber4){
    
        if(randomNumber4 < randomNumber5){
            console.log(randomNumber4);
        }
    
};

if(randomNumber3 < randomNumber5){
    
    if(randomNumber5 < randomNumber4){
        console.log(randomNumber5);
    }

};

if(randomNumber4 < randomNumber3){
    
    if(randomNumber3 < randomNumber5){
        console.log(randomNumber3);
    }

};

if(randomNumber4 < randomNumber5){
    
    if(randomNumber5 < randomNumber3){
        console.log(randomNumber5);
    }

};

if(randomNumber5 < randomNumber4){
    
    if(randomNumber4 < randomNumber3){
        console.log(randomNumber4);
    }

};

if(randomNumber5 < randomNumber3){
    
    if(randomNumber3 < randomNumber4){
        console.log(randomNumber3);
    }

};

if(randomNumber3 == randomNumber4){
    
    if(randomNumber5 < randomNumber3){
        console.log(randomNumber4);
    }

};

if(randomNumber3 == randomNumber5){
    
    if(randomNumber4 < randomNumber3){
        console.log(randomNumber3);
    }

};

if(randomNumber4 == randomNumber5){
    
    if(randomNumber3 < randomNumber4){
        console.log(randomNumber4);
    }

};

if(randomNumber3 == randomNumber4){
    
    if(randomNumber5 > randomNumber3){
        console.log(randomNumber4);
    }

};

if(randomNumber3 == randomNumber5){
    
    if(randomNumber4 > randomNumber3){
        console.log(randomNumber3);
    }

};

if(randomNumber4 == randomNumber5){
    
    if(randomNumber3 > randomNumber4){
        console.log(randomNumber4);
    }

};

console.log("------------------4 užduotis---------------------")

let A = (Math.ceil(Math.random() * 10));
let B = (Math.ceil(Math.random() * 10));
let C = (Math.ceil(Math.random() * 10));
let P = ((A + B + C)/2)
let S = (Math.sqrt(P*(P-A)*(P-B)*(P-C)))

let true1 = "true1";
let true2 = "true2";
let true3 = "true3";
let negative = "negative"

if ((A + B > C) && (A + C > B) && (B + C > A)){
    console.log(((Math.round((S)*100)) / 100));
}
else{
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
let du3 =0
let nulis4 = 0
let vienas4 = 0
let du4 = 0

// let counter1 = 

if((randomizer1 == 0)){
    
    nulis1 = 1;

}

else if(randomizer1 == 1){

    vienas1 = 1;

}
else{

    du1 = 1;

};

if((randomizer2 == 0)){
    
    nulis2 = 1;

}

else if(randomizer2 == 1){

    vienas2 = 1;

}
else{

    du2 = 1;

};

if((randomizer3 == 0)){
    
    nulis3 = 1;

}

else if(randomizer3 == 1){

    vienas3 = 1;

}
else{

    du3 = 1;

};

if((randomizer4 == 0)){
    
    nulis4 = 1;

}

else if(randomizer4 == 1){

    vienas4 = 1;

}
else{

    du4 = 1;

};

console.log("nuliai - " + (nulis1 + nulis2 + nulis3 + nulis4));
console.log("vienetai - " + (vienas1 + vienas2 + vienas3 + nulis4));
console.log("dvejetai - " + (du1 + du2 + du3 + du4));