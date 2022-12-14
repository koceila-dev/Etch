let column
let row

function addGridItem(column, row) {

 let elementDiv = document.createElement("div")
 elementDiv.className = 'item-1'
 document.getElementById("container").appendChild(elementDiv)
 document.getElementById('container').style["grid-template-columns"] = `repeat(${column},1.5fr)`;
 document.getElementById('container').style["grid-template-rows"] = `repeat(${row},1.5fr)`;

 let i = 0;

 // La boucle qui ajoute un element div de type grid-item dans le container et cela avec un 
 while (i < (column * row)) {
  let element = document.createElement("div")
  element.id = `grid-item`
  document.getElementById("container").appendChild(element)
  i++

 }
 // selectionner tout les grid items ensuite faire appelà la fonction clickHandler en arrow function pour ajouter le css

 let divs = document.querySelectorAll("#grid-item");
 const clickHandler = (e) => {
  e.target.style["background-color"] = "blue";

 }
 // addin and addEventListener to an array of divs that has the grid-item 
 for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("mouseover", clickHandler);

 }

}
function refresh() {
 window.location.reload("Refresh")
}

let refreshButton = document.getElementById("validation");
console.log(refreshButton)
refreshButton.addEventListener("click", refresh);
//${(column * row) - i}



addGridItem(50, 50)