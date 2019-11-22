// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on
let row, column;

// Solution Functions...
function level1Solution() {
  // USE BINARY IF STATEMENT

  if (column <= 4) {
    document.getElementById("currentTile").innerHTML = "sand"; // Set output text
  } else {
    document.getElementById("currentTile").innerHTML = "water"; // Set output text
  }
}

function level2Solution() {
  // USE CHAINED IF STATEMENT
  if (column <= 2) {
    document.getElementById("currentTile").innerHTML = "hills"; // Set output text
  } else if (column <= 7) {
    document.getElementById("currentTile").innerHTML = "sand"; // Set output text
  } else {
    document.getElementById("currentTile").innerHTML = "water"; // Set output text
  }
}

function level3Solution() {
  // USE BINARY IF STATEMENT

  if (column >= 3 && column <= 7) {
    document.getElementById("currentTile").innerHTML = "sand"; // Set output text
  } else {
    document.getElementById("currentTile").innerHTML = "hills";
  }
}

function level4Solution() {
  // USE BINARY IF STATEMENT
  if (row >= 3 && row <= 7) {
    document.getElementById("currentTile").innerHTML = "sand"; // Set output text
  } else {
    document.getElementById("currentTile").innerHTML = "hills";
  }
}

function level5Solution() {
  // USE CHAINED IF STATEMENT
  if (row >= 6 && row <= 7) {
    document.getElementById("currentTile").innerHTML = "water"; // Set output text
  } else if (row >= 3 && row <= 5) {
    document.getElementById("currentTile").innerHTML = "sand";
  } else {
    document.getElementById("currentTile").innerHTML = "hills";
  }
}

function level6Solution() {
  // USE BINARY IF STATEMENT
  if (row >= 6 && row <= 7) {
    document.getElementById("currentTile").innerHTML = "water"; // Set output text
  } else if (row >= 2 && row <= 5) {
    document.getElementById("currentTile").innerHTML = "sand";
  } else {
    document.getElementById("currentTile").innerHTML = "water";
  }
}

function level7Solution() {
  // USE BINARY IF STATEMENT
  if (row == 4 && column == 7) {
    document.getElementById("currentTile").innerHTML = "water"; // Set output text
  } else {
    document.getElementById("currentTile").innerHTML = "sand";
  }
}

function level8Solution() {
  // USE BINARY IF STATEMENT
  if (row == 5 || column == 2) {
    document.getElementById("currentTile").innerHTML = "tree"; // Set output text
  } else {
    document.getElementById("currentTile").innerHTML = "sand";
  }
}

function level9Solution() {
  // USE BINARY IF STATEMENT
  if (row <= 5 && column <= 5) {
    document.getElementById("currentTile").innerHTML = "water"; // Set output text
  } else {
    document.getElementById("currentTile").innerHTML = "sand";
  }
}

function level10Solution() {
  // USE CHAINED IF STATEMENT
  if (column <= 1) {
    document.getElementById("currentTile").innerHTML = "hills"; // Set output text
  } else if (column <= 3) {
    document.getElementById("currentTile").innerHTML = "tree";
  } else if (column <= 7) {
    document.getElementById("currentTile").innerHTML = "sand";
  } else {
    document.getElementById("currentTile").innerHTML = "water";
  }
}

function level11Solution() {
  // USE CHAINED IF STATEMENT
  if (column <= 5 && row <= 3) {
    document.getElementById("currentTile").innerHTML = "water"; // Set output text
  } else if (column >= 6 && row >= 4) {
    document.getElementById("currentTile").innerHTML = "tree";
  } else if (column >= 6 && row <= 3) {
    document.getElementById("currentTile").innerHTML = "hills";
  } else {
    document.getElementById("currentTile").innerHTML = "sands";
  }
}

function level12Solution() {
  // USE BINARY IF STATEMENT
  if (row <= 4 && column <= 5) {
    document.getElementById("currentTile").innerHTML = "water"; // Set output text
  } else if (row>=5  && column>=6 ) {
    document.getElementById("currentTile").innerHTML = "water";
  }
  else{
    document.getElementById("currentTile").innerHTML = "sand";
  }
}

function level13Solution() {
  // USE BINARY IF STATEMENT
  if(row>=0 && column <=3){
  document.getElementById("currentTile").innerHTML = "hills"; // Set output text
}else if(row <=6 && column >= 11){
  document.getElementById("currentTile").innerHTML = "hills";

}
else{
  document.getElementById("currentTile").innerHTML = "sands";
}
}

function level14Solution() {
  // USE CHAINED IF STATEMENT

  document.getElementById("currentTile").innerHTML = "----"; // Set output text
}
