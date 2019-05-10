const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var inputArr = [];
var lineNum = 0;
rl.on("line", function(line) {
  inputArr.push(line);
  var n = parseInt(inputArr[0]);

  if (lineNum === n) {
    var arr = inputArr.slice(1);
    console.log(arr);
    inputArr = [];
    rl.close();
  } else {
    lineNum++;
  }
});

rl.on("close", function() {
  console.log("程序结束");
  process.exit(0);
});
