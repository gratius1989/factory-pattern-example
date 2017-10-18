function Background(){}

Background.prototype.fill= function(){}

function Pink(){}
Pink.prototype = new Background;
Pink.prototype.fill = function(){
   $("body").css("background","pink");
}

function Purple(){}
Purple.prototype = new Background;
Purple.prototype.fill = function(){
   $("body").css("background","purple");
}

function Green(){}
Green.prototype = new Background;
Green.prototype.fill = function(){
   $("body").css("background","green");
}

function Blue(){}
Blue.prototype = new Background;
Blue.prototype.fill = function(){
   $("body").css("background","blue");
}


$("select").on("change",function(){
  var fill;
  switch($(this).val()){
    case "pink":
      fill = new Pink;
      break;
    case "purple":
      fill = new Purple;
      break;
     case "green":
      fill = new Green;
      break;
     case "blue":
      fill = new Blue;
     break;
  }
  fill.fill();
});