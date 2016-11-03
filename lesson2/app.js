var student = {
  name: "",
  type: "Student"
};

document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded(event) {
  document.getElementById('name').addEventListener('keyup', keyUp);
}

function keyUp(event) {
  calculateNumericOutput();
}

function calculateNumericOutput() {
  student.name = document.getElementById('name').value;

  var totalNumericValue = 0;

  for (var i = 0; i < student.name.length; i++) {
    totalNumericValue += student.name.charAt(i);

  }

  var output = "The total numeric value of the input is " + totalNumericValue;
  document.getElementById('output').innerText = output;
}
