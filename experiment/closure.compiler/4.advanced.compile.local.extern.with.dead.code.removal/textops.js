

function textDiv(text) {
  var divElement = document.createElement('div');
  var textElement = document.createTextNode(text);
  divElement.appendChild(textElement);
  return divElement;
}

function useless() {
  console.log('useless function will not be included after closure compile since not called')
}
