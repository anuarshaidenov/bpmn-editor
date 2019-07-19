//jshint esversion:6

//initialize bpmn object
var bpmn ={
  "elements": [],
  "lines": []
};

//add an event listener to the save button
$(".save").on("click", function (){
  var elementQuantity = $("#diagram-container").children().length;
  var lineQuantity = lines.size;

//push the existing elements to the object
  for (var i = 2; i < elementQuantity; i++){
    let element = {};
    console.log($($("#diagram-container").children()[i])[0].className);
    element.id = $($("#diagram-container").children()[i])[0].id;
    element.className = $($("#diagram-container").children()[i])[0].className;
    element.position = $($("#diagram-container").children()[i]).position();
    bpmn.elements.push(element);
  }
  console.log(bpmn.elements);

  var from, to;
  var elem = $(lines.keys().next().value);
  console.log(elem);

  //push the existing lines into the bpmn object
  for (var j = 0; j < lineQuantity; j++){
    from = {x: elem.position().left, y: elem.position().top};
    to = {x: $(lines.get(elem[0])).position().left, y: $(lines.get(elem[0])).position().top};
    bpmn.lines.push({"from": from, "to": to});
  }

  alert("saved");
  var jsonBPMN = JSON.stringify(bpmn);
  console.log(jsonBPMN);
});
