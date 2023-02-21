let column
let row

function addGridItem(column, row) {
 // elle permet de supprimer les grids déja crée .. 
 document.getElementById('container').innerHTML = '';


 document.getElementById('container').style["grid-template-columns"] = `repeat(${column},1fr)`;
 document.getElementById('container').style["grid-template-rows"] = `repeat(${row},1fr)`;

 let i = 0;

 // La boucle qui ajoute un element div de type grid-item dans le container et cela avec un 
 while (i < (column * row)) {
  let element = document.createElement("div")
  element.className = `grid-item`
  document.getElementById("container").appendChild(element)
  i++

 }
 // selectionner tout les grid items ensuite faire appelà la fonction clickHandler en arrow function pour ajouter le css

 let divs = document.querySelectorAll(".grid-item");
 const clickHandler = (e) => {
  e.target.style["background-color"] = "blue";

 }
 // addin and addEventListener to an array of divs that has the grid-item 
 for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("mouseover", clickHandler);

 }



}
addGridItem(64, 64)

let buttonReset = document.getElementById("validation");


function removebackground(event) {
 gridElement = document.querySelectorAll(".grid-item")
 for (i = 0; i < gridElement.length; i++) {
  gridElement[i].style.backgroundColor = ""
 }
}


buttonReset.addEventListener("click", removebackground);
//${(column * row) - i}

let sliderColumn = document.getElementById("column");
let sliderRows = document.getElementById("rows");
let rangeValueColumn = 1;

function valueOfRange() {
 return this.value;

}
sliderColumn.addEventListener("change", function (event) {
 rangeValueColumn = this.value;
 console.log(rangeValueColumn);
 addGridItem(rangeValueColumn, rangeValueColumn);
})




