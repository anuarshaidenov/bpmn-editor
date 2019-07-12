//jshint esversion:6

var bpmn ={
  "elements": [],
  "lines": []
};
$(".save").on("click", function (){
  bpmn ={
    "elements": [],
    "lines": []
  };
  var elementQuantity = $("#diagram-container").children().length;
  var lineQuantity = lines.size;
  var linesObj = [];


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
  for (var j = 0; j < lineQuantity; j++){
    from = lines.keys().next().value;
    to = lines.get(from);
    bpmn.lines.push({"from": from, "to": to});
  }

  alert("saved");
  var jsonBPMN = JSON.stringify(bpmn);
  console.log(jsonBPMN);
});
