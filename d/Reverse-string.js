
const reversed = [];
var reverseString = function (s) {
  var left = 0
  var right = s.length - 1;
  while (left < right) {
    var temp = s[right]
    s[right] = s[left]
    s[left] = temp
    left++;
    right--;


  }
  return s;
}


