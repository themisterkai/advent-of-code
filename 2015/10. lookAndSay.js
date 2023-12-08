var lookAndSay = function(input){

  var result;
  
  var say = function(string){
    string = string.match(/(\d)\1*/g)
    result = string.map(function(x){return x.length + x[0]}).join("");
  }
  say(input);

  for(var i = 2; i < 51; i++){
    var newString = result;
    result = "";
    say(newString);
    console.log(i + " " +result.length);
  }
}


lookAndSay("1113222113");


var lookAndSay2 = function(str){

  var output = [];
  var current = str[0];
  var count = 0;

  for ( var i = 0; i <= str.length; i++ ){
    if(current === str[i]){
      count++
    } else {
      output.push(""+count,current);
      count = 1;
      current = str[i];
    }
  }
  //output.push(""+count,current);

  return output.join("");

}

var input = "1113222113";
var said = input;

for ( var i = 1; i < 51; i++ ){
  said = lookAndSay2(said);
  console.log(i+" "+said.length);
}


