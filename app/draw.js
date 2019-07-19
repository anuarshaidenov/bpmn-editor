//jshint esversion:6

function drawLinesBetweenElementsAnimate(from, to){
  deleteTheLine(from, to);
  drawALine(from, to);
}

function deleteTheLine(from, to){
  let pointer, pointee;
  if(lines.get(from[0])){
    pointer = from;
    pointee = to;
  }
  else{
    pointer = to;
    pointee = from;
  }
  const id = pointee.attr("id");
  const line = $("." + id);
  console.log(line);
  line.remove();
}

function drawALine(from, to) {
  let pointer, pointee;
  if(lines.get(from[0])){
    pointer = from;
    pointee = to;
  }
  else{
    pointer = to;
    pointee = from;
  }
  const lineCount = pointee.attr("id");
  const xFrom = (from.position().left + 25);
  const yFrom = (from.position().top + 25);
  const xTo = (to.position().left + 25);
  const yTo = (to.position().top + 25);

  const newLine1 = document.createElementNS('http://www.w3.org/2000/svg','line');
  const newLine2 = document.createElementNS('http://www.w3.org/2000/svg','line');
  const newLine3 = document.createElementNS('http://www.w3.org/2000/svg','line');
  if(xFrom < (xTo - xFrom)){
    newLine1.setAttribute('class',lineCount);
    newLine1.setAttribute('x1',xFrom);
    newLine1.setAttribute('y1',yFrom);
    newLine1.setAttribute('x2',xTo-xFrom);
    newLine1.setAttribute('y2',yFrom);

    newLine2.setAttribute('class',lineCount);
    newLine2.setAttribute('x1',xTo-xFrom);
    newLine2.setAttribute('y1',yFrom);
    newLine2.setAttribute('x2',xTo-xFrom);
    newLine2.setAttribute('y2',yTo);

    newLine3.setAttribute('class',lineCount);
    newLine3.setAttribute('x1',xTo-xFrom);
    newLine3.setAttribute('y1',yTo);
    newLine3.setAttribute('x2',xTo);
    newLine3.setAttribute('y2',yTo);

    newLine1.setAttribute('stroke', 'black');
    newLine2.setAttribute('stroke', 'black');
    newLine3.setAttribute('stroke', 'black');

    newLine1.setAttribute('style', 'stroke-width:2');
    newLine2.setAttribute('style', 'stroke-width:2');
    newLine3.setAttribute('style', 'stroke-width:2');

    $("svg").append(newLine1);
    $("svg").append(newLine2);
    $("svg").append(newLine3);
  }
  else if(xFrom > (xTo - xFrom)){
    newLine1.setAttribute('class',lineCount);
    newLine1.setAttribute('x1',xFrom);
    newLine1.setAttribute('y1',yFrom);
    newLine1.setAttribute('x2',xTo);
    newLine1.setAttribute('y2',yFrom);

    newLine2.setAttribute('class',lineCount);
    newLine2.setAttribute('x1',xTo);
    newLine2.setAttribute('y1',yFrom);
    newLine2.setAttribute('x2',xTo);
    newLine2.setAttribute('y2',yTo);

    newLine1.setAttribute('stroke', 'black');
    newLine2.setAttribute('stroke', 'black');

    newLine1.setAttribute('style', 'stroke-width:2');
    newLine2.setAttribute('style', 'stroke-width:2');

    $("svg").append(newLine1);
    $("svg").append(newLine2);
  }

  else{
    ctx.lineTo(xFrom-xTo, yFrom);
    ctx.lineTo(xFrom-xTo, yTo);
    ctx.lineTo(xTo, yTo);
    newLine1.setAttribute('class', lineCount);
    newLine1.setAttribute('x1',xFrom);
    newLine1.setAttribute('y1',yFrom);
    newLine1.setAttribute('x2',xFrom-xTo);
    newLine1.setAttribute('y2',yFrom);

    newLine2.setAttribute('class',lineCount);
    newLine2.setAttribute('x1',xFrom-xTo);
    newLine2.setAttribute('y1',yFrom);
    newLine2.setAttribute('x2',xFrom-xTo);
    newLine2.setAttribute('y2',yTo);

    newLine3.setAttribute('class',lineCount);
    newLine3.setAttribute('x1',xFrom-xTo);
    newLine3.setAttribute('y1',yTo);
    newLine3.setAttribute('x2',xTo);
    newLine3.setAttribute('y2',yTo);

    newLine1.setAttribute('stroke', 'black');
    newLine2.setAttribute('stroke', 'black');
    newLine3.setAttribute('stroke', 'black');

    newLine1.setAttribute('style', 'stroke-width:2');
    newLine2.setAttribute('style', 'stroke-width:2');
    newLine3.setAttribute('style', 'stroke-width:2');

    $("svg").append(newLine1);
    $("svg").append(newLine2);
    $("svg").append(newLine3);
  }

  $("line").on("click", function (e){
    const lineClass = $(this).attr("class");
    $("." + lineClass).remove();
    lines.delete($("#" + lineClass-1)[0]);
  });


}

function drawALineImport(fromX, fromY, toX, toY){
  const  lineCount = bpmn.lines.length;
  const xFrom = (fromX+25);
  const yFrom = (fromY+25);
  const xTo = (toX+25);
  const yTo = (toY+25);

  console.log(xFrom, yFrom);
  console.log(xTo, yTo);

  const newLine1 = document.createElementNS('http://www.w3.org/2000/svg','line');
  const newLine2 = document.createElementNS('http://www.w3.org/2000/svg','line');
  const newLine3 = document.createElementNS('http://www.w3.org/2000/svg','line');
  if(xFrom < (xTo - xFrom)){
    newLine1.setAttribute('class',lineCount);
    newLine1.setAttribute('x1',xFrom);
    newLine1.setAttribute('y1',yFrom);
    newLine1.setAttribute('x2',xTo-xFrom);
    newLine1.setAttribute('y2',yFrom);

    newLine2.setAttribute('class',lineCount);
    newLine2.setAttribute('x1',xTo-xFrom);
    newLine2.setAttribute('y1',yFrom);
    newLine2.setAttribute('x2',xTo-xFrom);
    newLine2.setAttribute('y2',yTo);

    newLine3.setAttribute('class',lineCount);
    newLine3.setAttribute('x1',xTo-xFrom);
    newLine3.setAttribute('y1',yTo);
    newLine3.setAttribute('x2',xTo);
    newLine3.setAttribute('y2',yTo);

    newLine1.setAttribute('stroke', 'black');
    newLine2.setAttribute('stroke', 'black');
    newLine3.setAttribute('stroke', 'black');

    newLine1.setAttribute('style', 'stroke-width:2');
    newLine2.setAttribute('style', 'stroke-width:2');
    newLine3.setAttribute('style', 'stroke-width:2');

    $("svg").append(newLine1);
    $("svg").append(newLine2);
    $("svg").append(newLine3);
  }
  else if(xFrom > (xTo - xFrom)){
    newLine1.setAttribute('class',lineCount);
    newLine1.setAttribute('x1',xFrom);
    newLine1.setAttribute('y1',yFrom);
    newLine1.setAttribute('x2',xTo);
    newLine1.setAttribute('y2',yFrom);

    newLine2.setAttribute('class',lineCount);
    newLine2.setAttribute('x1',xTo);
    newLine2.setAttribute('y1',yFrom);
    newLine2.setAttribute('x2',xTo);
    newLine2.setAttribute('y2',yTo);

    newLine1.setAttribute('stroke', 'black');
    newLine2.setAttribute('stroke', 'black');

    newLine1.setAttribute('style', 'stroke-width:2');
    newLine2.setAttribute('style', 'stroke-width:2');

    $("svg").append(newLine1);
    $("svg").append(newLine2);
  }

  else{
    newLine1.setAttribute('class', lineCount);
    newLine1.setAttribute('x1',xFrom);
    newLine1.setAttribute('y1',yFrom);
    newLine1.setAttribute('x2',xFrom-xTo);
    newLine1.setAttribute('y2',yFrom);

    newLine2.setAttribute('class',lineCount);
    newLine2.setAttribute('x1',xFrom-xTo);
    newLine2.setAttribute('y1',yFrom);
    newLine2.setAttribute('x2',xFrom-xTo);
    newLine2.setAttribute('y2',yTo);

    newLine3.setAttribute('class',lineCount);
    newLine3.setAttribute('x1',xFrom-xTo);
    newLine3.setAttribute('y1',yTo);
    newLine3.setAttribute('x2',xTo);
    newLine3.setAttribute('y2',yTo);

    newLine1.setAttribute('stroke', 'black');
    newLine2.setAttribute('stroke', 'black');
    newLine3.setAttribute('stroke', 'black');

    newLine1.setAttribute('style', 'stroke-width:2');
    newLine2.setAttribute('style', 'stroke-width:2');
    newLine3.setAttribute('style', 'stroke-width:2');

    $("svg").append(newLine1);
    $("svg").append(newLine2);
    $("svg").append(newLine3);
  }

  $("line").on("click", function (e){
    const lineClass = $(this).attr("class");
    $("." + lineClass).remove();
    lines.delete($("#" + lineClass-1)[0]);
  });
}
