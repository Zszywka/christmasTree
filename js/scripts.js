function drawTree(heightTree) {
  for (var i = 1 ; i <= heightTree ; i++) {
    var star = " ";
    for (var j = 1 ; j <= i ; j++) {
      star += '*';
    }
    console.log(star);
    document.write("<br>"+star);
  }
};

var heightTree = prompt("Please enter height your Christmastree");
drawTree(heightTree);
