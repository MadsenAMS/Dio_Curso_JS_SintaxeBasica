let output;
const LINEBREAK = "<br> ------------------ <> -------------------- <br>";
const TAB = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";

function organizeVectorOutput() {
  vetor.forEach(function (item, index) {
    output += `Item ${index} = ${item}<br>`;
  });
}

function printOnHTML(input = output) {
  document.getElementById("overwriteMe").innerHTML += "<br>" + input;
}

document.getElementById("overwriteMe").innerHTML = "";






