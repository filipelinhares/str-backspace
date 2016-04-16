module.exports = function backspace(str, times) {
  var x = 0;
  var strArray = str.split("");
  times = times || 1;

  while (x < times) {
    str = strArray.pop();
    x++;
  }
  return strArray.join("");
};
