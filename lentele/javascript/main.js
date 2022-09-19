console.log("do it");

let data = [
    ['spiecies','animal','age', 'size'],
    ['mammal','tiger','1',26],
    ['mammal','lion','0',4],
    ['lizard','geko','1',0.3],
    ['fish','goldfish','0',0.6],
    ['canis','wolf','1',3],
    ['feline','car','0',4],
    ['fish','pike-perch','1',26],
    ['insect','stick-bug','0',0.2],
];
console.log(data);
// document.getElementById(ID)	Get the element for the given ID.
// document.createElement(TAG)	Creates a new DOM element.
// ELEMENT.appendChild(OBJECT)	Append the given object into the specified element.
// TABLE.insertRow()	Add a new row to the table.
// ROW.insertCell()	Add a new cell to the table row.
// document.createTextNode('JavaScript DOM');

let div = document.getElementById("alfa");
// let row = table.insertRow();
// let cell = row.insertCell();

function arrayCrawler(a, b){
    let alfa  = []
    alfa = a;
    sum = 0;
    let table = "<tr>";
    for (let i = 0; i < alfa.length; i++) {
        let a = i;
        let beta = alfa[i];
        for (let i = 0; i < beta.length; i++) {
            if(i == 0){
                table += `<tr id = "line${a}"><td id = ${a}>${beta[i]}</td>`
                
            }
            else if( i < beta.length - 1 && i != 0){
                table += `<td>${beta[i]}</td>`;
            }
            else if(i == beta.length - 1){
                table += `<td>${beta[i]}</td></tr>`
            }
                    
                        
        }
                   
    }
    return document.getElementById("alfa").innerHTML += `<table id = ${b}>` + table + "</table>";
}

arrayCrawler(data, "table");

let table = document.getElementById("table");
let line0 = document.getElementById("line0")


// div.style.position = "relative";
// div.style.margin = "auto";
// div.style.width = "1400px";
// div.style.height = "500px";
// div.style.backgroundColor = "green";
// table.style.position = "absolute";
// table.style.margin = "auto";
// table.style.float = "center";
// // table.style.left = "150px";
// // table.style.top = "150px";
// table.style.width = "1000px";
// line0.style.backgroundColor = "red";
// line0.style.padding = "10px";


