//jshint esversion:6

$(".import").on("click", function () {
  let elements = [];
  let lines = [];
  let elemetQuantity = bpmn.elements.length;
  let linesQuantity = bpmn.lines.length;
  let elementsHTML = [];
  let linesHTML = [];
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
    elementsHTML.push("<div id = " + elements[i].id + " class = ' " + elements[i].className + " imported" + " " + " ' style='position: absolute; left: " + elements[i].position.left.toString() + "px; top: " + elements[i].position.top.toString() +  "px'>"  );
  }
  console.log(elementsHTML[0]);

  //set lines as HTML
  for(let i = 0; i < linesQuantity; i++){
    let fromX = bpmn.lines[i].from.x;
    let fromY = bpmn.lines[i].from.y;
    let toX = bpmn.lines[i].to.x;
    let toY = bpmn.lines[i].to.y;
    let from = {
      position: {
        left: fromX,
        top: fromY
      }
    };
    let to = {
      position: {
        left: toX,
        top: toY
      }
    };
    drawALineImport(from.position.left, from.position.top, to.position.left, to.position.top);
  }

  //place elements at the diagram
  for(let i = 0; i < elemetQuantity; i++){
    $("#diagram-container").append(elementsHTML[i]);
  }
  $(".imported").draggable({
    containment: "parent",
    grid: [15, 15]
  });

  alert("imported");

});
