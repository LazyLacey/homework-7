
var counter = 0;

function throughOnce(fn) {
  counter+= 1;
  if (counter%2 != 0){
  var realArgs = [];
  for(var i = 1; i < arguments.length; i++) {
    realArgs.push(arguments[i]);
  }
   fn.apply(this, realArgs);
}
}

throughOnce(console.log, "lol");
throughOnce(console.log, "dont lol");
throughOnce(console.log, "again lol");
throughOnce(console.log, "yesn't lol");

