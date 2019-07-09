//jshint esversion:6

//items in the container
var items = [];

//a unique id of each item
var id = 0;

//lines point to
var lines = new Map();

//get the key by its value
function getByValue(map, searchValue) {
  for (let [key, value] of map.entries()) {
    if (value === searchValue)
      return key;
  }
}

//MENU BUTTONS
//delete button
function deleteTheElement(){
  console.log("removed");
  if(lines.get($(this)[0]) || getByValue(lines, $(this)[0])){
    // TODO: remove a corresponding line
  }
  $(this).parent().parent().remove();
}
//draw a line
function drawLine(){
  console.log("draw");
  var from = $(this).parent().parent();
  var id = prompt("id of the element to draw a line to");
  var to = $("#" + id);
  lines.set(from[0], to[0]);
  drawALine(from, to);
}
//add a comment
function addAComment(){
  console.log("comment");
  var commentInput = "<input type='text' placeholder='text'><button type='button' name='button'>comment</button>";

  var comment = prompt("comment:");

  $(this).parent().parent().append("        " + comment);

}



//drag event functionality
function drag(){
  console.log("dragging");
  if(lines.get($(this)[0]) || getByValue(lines, $(this)[0])){
    var from = $(this);
    var to = $(lines.get($(this)[0]));
    if(to[0]){
      drawLinesBetweenElementsAnimate(from, to);
    }
    else{
      from = $(this);
      to = $(getByValue(lines, $(this)[0]));
      drawLinesBetweenElementsAnimate(from, to);
    }
  }
}


//apply selected class to the item
function select(){
  console.log("selected");
  var menu = "<div id='details'><div type='button' id='detail' class='delete'>delete</div><div type='button' id='detail' class='arrow'>arrow</div><div type='button' id='detail' class='change-text'>text</div></div>";
  $(this).toggleClass("selected");
  if($(this).hasClass("selected")){
    $(this).append(menu);

    //delete button click
    $(".delete").on("click", deleteTheElement);

    //arrow button click
    $(".arrow").on("click", drawLine);

    //comment button click
    $(".change-text").on("click", addAComment);
  }
  else{
    $(this).children()[1].remove();
  }
}

//make .element draggable
$(".element").draggable({
  helper: 'clone',
  grid: [15,15]
});

//make container droppable
$("#diagram-container").droppable({
  accept: '.element',
  //on drop event
  drop: function(event, ui){
    var item = $(ui.helper).clone();
    item.removeClass("element ui-draggable");
    item.addClass("item");
    item.append("<a>" + id + "</a>");
    item.attr("id", id++);
    item.draggable({
      containment: "parent",
      snap: true,
      snapTolerance: 10,
      drag: drag,
      stack: '.item',
      grid: [15, 15],
      delay: 100
    });
    item.on("click", select);
    $(this).append(item);
    items.push(item);

  }
});
