
var displayElement = document.getElementById('display');
function displayData(parent, data) {
  var textElement = document.createTextNode(data.text);
  parent.appendChild(textElement);
}
displayData(displayElement, getData());
