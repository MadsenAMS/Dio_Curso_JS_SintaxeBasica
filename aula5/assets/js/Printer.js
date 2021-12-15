let output;
const LINEBREAK = "<br> ------------------ <> -------------------- <br>";
const TAB = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";

const printOnHTML = (input = output) => {
  document.getElementById("overwriteMe").innerHTML += "<br>" + input;
}

document.getElementById("overwriteMe").innerHTML = "";


