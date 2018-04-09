// half christmasTree
function drawTree(heightTree) {
  for (var i = 0 ; i <= heightTree ; i++) {
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

// all christmasTree - the first way
function drawTree(heightTree) {
  for (var iterator = 0 ; iterator < heightTree ; iterator++) {
    // spaces
    for (var amountSpace = heightTree-1 ; amountSpace >= iterator ; amountSpace--) {
      space = "&nbsp&nbsp";
      console.log(space);
      // document.write(space);
    }
    // starts
    for (var amountStar = 0 ; amountStar <= (iterator*2 )-1 ; amountStar++) {
      star = "*";
      console.log(star);
      // document.write(star);
    }
    // new line
    console.log("<br>");
    // document.write("<br>");
  }
};

// all christmasTree- the second way (only one variable)
var heightTree = prompt("Please enter height your Christmastree");
drawTree(heightTree);

function drawTree(heightTree) {
  for (iterator = 0 ; iterator <= heightTree ; iterator++) {
    tree = "";
    for (amountSpace = iterator ; amountSpace < heightTree ; amountSpace++) {
      tree += " ";
    }
    for (amountStar = 0 ; amountStar < (iterator*2)-1 ; amountStar++) {
      tree += "*";
    }
    console.log(tree);
  }
};

var heightTree = prompt("Please enter height your Christmastree");
drawTree(heightTree);
