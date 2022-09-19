console.log("do it");

let data = [
    {id: 1, type: 'mammal', title: 'Tiger',sideOfBinary: '1', size: '26', pictureUrl: "images/cropp/el_tigre.jpg"},
    {id: 2, type: 'mammal',title: 'Lion',sideOfBinary:'0', size: "4", pictureUrl: "images/cropp/el_leone.jpg"},
    {id: 2, type: 'lizard',title: 'Gecko',sideOfBinary:'1', size: 0.3, pictureUrl: "images/cropp/el_gecko.jpg"},
    {id: 2, type: 'fish',title: 'Goldfish',sideOfBinary:'0', size: 0.6, pictureUrl: "images/cropp/el_orofish.jpg"},
    {id: 2, type: 'canis',title: 'wolf',sideOfBinary:'1', size: 3, pictureUrl: "images/cropp/el_lupus.jpg"},
    {id: 2, type: 'feline',title: 'cat',sideOfBinary:'0', size: 4, pictureUrl: "images/cropp/el_cat.jpg"},
    {id: 2, type: 'fish' ,title: 'pike-perch',sideOfBinary:'1', size: 26, pictureUrl: "images/cropp/el_pikePerch.jpg"},
    {id: 2, type: 'insect',title: 'stick-bug',sideOfBinary:'0', size: 0.2, pictureUrl: "images/cropp/el_stickbug.jpg"},
]
// let data = [
//     ['mammal','tiger','1',26, "images/cropp/el_tigre.jpg"],
//     ['mammal','lion','0',4],
//     ['lizard','geko','1',0.3],
//     ['fish','goldfish','0',0.6],
//     ['canis','wolf','1',3],
//     ['feline','car','0',4],
//     ['fish','pike-perch','1',26],
//     ['insect','stick-bug','0',0.2],
// ];
console.log(data);

function dived(params) {
    
let htmlCode =
`
<div class="container" id="container">
    <div class = "row" id ="row">
`;

data.forEach(function(objects){
    htmlCode = htmlCode +
            `
            <div class="col-sm" id="colmd">
                <article>
                    <div class="image" id="image">
                        <img src="${objects.pictureUrl}">
                    <h3> ${objects.title} <h3>
                    <p> ${objects.type} <p>
                    <p> size (m): ${objects.size}<p>
                    </div>
                </article>
            </div>
            `
});

htmlCode +=
`
    </div>
<div>
`;


document.getElementById("alfa").innerHTML = htmlCode;
};
dived(data)

let main = document.getElementById("alfa");
let container = document.getElementById("container");
let grid = document.getElementById("row");
let card =  document.getElementById("colmd");
let image = getElementById("image");



