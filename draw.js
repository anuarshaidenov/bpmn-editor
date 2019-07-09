var lineCount = 0;

function drawLinesBetweenElementsAnimate(from, to){
  deleteTheLine(from, to);
  drawALine(from, to);
}

function deleteTheLine(from, to){
  x1 = from.position().left+20;
  y1 = from.position().top+20;

  line = $("line");

  line.remove();
}

function drawALine(from, to) {
  lineCount++;
  var xFrom = (from.position().left + 20).toString();
  var yFrom = (from.position().top + 20).toString();
  var xTo = (to.position().left + 20).toString();
  var yTo = (to.position().top + 20).toString();

  var newLine1 = document.createElementNS('http://www.w3.org/2000/svg','line');
  var newLine2 = document.createElementNS('http://www.w3.org/2000/svg','line');
  var newLine3 = document.createElementNS('http://www.w3.org/2000/svg','line');
  if(xFrom < (xTo - xFrom)){
    newLine1.setAttribute('id',lineCount.toString());
    newLine1.setAttribute('x1',xFrom);
    newLine1.setAttribute('y1',yFrom);
    newLine1.setAttribute('x2',xTo-xFrom);
    newLine1.setAttribute('y2',yFrom);

    newLine2.setAttribute('id',lineCount.toString());
    newLine2.setAttribute('x1',xTo-xFrom);
    newLine2.setAttribute('y1',yFrom);
    newLine2.setAttribute('x2',xTo-xFrom);
    newLine2.setAttribute('y2',yTo);

    newLine3.setAttribute('id',lineCount.toString());
    newLine3.setAttribute('x1',xTo-xFrom);
    newLine3.setAttribute('y1',yTo);
    newLine3.setAttribute('x2',xTo);
    newLine3.setAttribute('y2',yTo);
  }
  else if(xFrom > (xTo - xFrom)){
    newLine1.setAttribute('id',lineCount.toString());
    newLine1.setAttribute('x1',xFrom);
    newLine1.setAttribute('y1',yFrom);
    newLine1.setAttribute('x2',xTo);
    newLine1.setAttribute('y2',yFrom);

    newLine2.setAttribute('id',lineCount.toString());
    newLine2.setAttribute('x1',xTo);
    newLine2.setAttribute('y1',yFrom);
    newLine2.setAttribute('x2',xTo);
    newLine2.setAttribute('y2',yTo);
  }

  else{
    ctx.lineTo(xFrom-xTo, yFrom);
    ctx.lineTo(xFrom-xTo, yTo);
    ctx.lineTo(xTo, yTo);
    newLine1.setAttribute('id', lineCount.toString());
    newLine1.setAttribute('x1',xFrom);
    newLine1.setAttribute('y1',yFrom);
    newLine1.setAttribute('x2',xFrom-xTo);
    newLine1.setAttribute('y2',yFrom);

    newLine2.setAttribute('id',lineCount.toString());
    newLine2.setAttribute('x1',xFrom-xTo);
    newLine2.setAttribute('y1',yFrom);
    newLine2.setAttribute('x2',xFrom-xTo);
    newLine2.setAttribute('y2',yTo);

    newLine3.setAttribute('id',lineCount.toString());
    newLine3.setAttribute('x1',xFrom-xTo);
    newLine3.setAttribute('y1',yTo);
    newLine3.setAttribute('x2',xTo);
    newLine3.setAttribute('y2',yTo);
  }

  newLine1.setAttribute('stroke', 'black');
  newLine2.setAttribute('stroke', 'black');
  newLine3.setAttribute('stroke', 'black');

  $("svg").append(newLine1);
  $("svg").append(newLine2);
  $("svg").append(newLine3);

}
