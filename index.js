let column
let row

function addGridItem(column, row) {

 let elementDiv = document.createElement("div")
 elementDiv.className = 'item-1'
 document.getElementById("container").appendChild(elementDiv)
 document.getElementById('container').style["grid-template-columns"] = `repeat(${column},1fr)`;
 document.getElementById('container').style["grid-template-rows"] = `repeat(${row},1fr)`;
 let i = 0;
 while (i < (column * row)) {
  let element = document.createElement("div")
  element.id = `item-${(column * row) - i}`
  document.getElementById("container").appendChild(element)
  i++
  document.getElementsByClassName
 }

}



addGridItem(10, 10)