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
    bpmn.elements.push($($("#diagram-container").children()[i]));
  }

  var from, to;
  for (var j = 0; j < lineQuantity; j++){
    from = lines.keys().next().value;
    to = lines.get(from);
    bpmn.lines.push({"from": from, "to": to});
  }

  alert("saved");
  console.log(JSON.stringify(bpmn));
});
