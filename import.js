//jshint esversion:6

$(".import").on("click", function () {
  let elements = [];
  let lines = [];
  let elemetQuantity = bpmn.elements.length;
  let linesQuantity = bpmn.lines.length;
  let elementsHTML = [];
  //push the elements to the array
  for(let i = 0; i < elemetQuantity; i++){
    elements.push(bpmn.elements[i]);
  }
  console.log(elements);

  //push lines to the array
  for(let i = 0; i < linesQuantity; i++){
    lines.push(bpmn.lines[i]);
  }
  //set elements as HTML
  for(let i = 0; i < elemetQuantity; i++){
    elementsHTML.push("<div id = " + elements[i].id + " class = ' " + elements[i].className + " " + " ' style='position: absolute; left: " + elements[i].position.left.toString() + "px; top: " + elements[i].position.top.toString() +  "px'>"  );
  }
  console.log(elementsHTML[0]);

  //place elements at the diagram
  for(let i = 0; i < elemetQuantity; i++){
    $("#diagram-container").append(elementsHTML[i]);
  }

  alert("imported");

});
