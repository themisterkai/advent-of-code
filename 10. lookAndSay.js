var lookAndSay = function(input){

  input = input+""
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


lookAndSay(1113222113);