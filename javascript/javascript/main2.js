let firstName = "Woody";
let surname= "Harrelson";

if(firstName.length < surname.length){
    console.log(firstName);
}
else{
    console.log(surname);
}


console.log("----------------------------------------------------2-------------------------------------");

console.log(firstName.toUpperCase() + " " + surname.toLowerCase());

console.log("----------------------------------------------------3-------------------------------------");

let inicialai = (firstName.charAt(0) + surname.charAt(0));

console.log(inicialai);

console.log("----------------------------------------------------4-------------------------------------");

let paskutinėsRaidės = firstName.slice(-3) + surname.slice(-3);

console.log(paskutinėsRaidės);

console.log("----------------------------------------------------5-------------------------------------");

let title1 = "An American in Paris"

let title1Change = title1.replace(/[a,A]/g, '*');

console.log (title1Change);

console.log("-----------------------------------------------6----------------------------------------")

let title2 = "Breakfast at Tiffany's";
let title3 = "2001: A Space Odyssey";
let title4 = "It's a Wonderful Life";

console.log(title1.replace(/[aeiou]/gi, ''));
console.log(title2.replace(/[aeiou]/gi, ''));
console.log(title3.replace(/[aeiou]/gi, ''));
console.log(title4.replace(/[aeiou]/gi, ''));

console.log("-----------------------------------------------7----------------------------------------")


console.log("Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 1))+ (Math.ceil (Math.random()*1) +5) + " - A New Hope");

console.log("-----------------------------------------------8----------------------------------------")

let sentence1 = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood”";

console.log(sentence1.length);
console.log(sentence1.replace(/[a-z]^(?:\w{3}|\w{5})$/gi, ''));