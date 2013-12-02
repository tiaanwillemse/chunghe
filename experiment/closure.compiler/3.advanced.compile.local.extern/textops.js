

function textDiv(text) {
  var divElement = document.createElement('div');
  var textElement = document.createTextNode(text);
  divElement.appendChild(textElement);
  return divElement;
}
