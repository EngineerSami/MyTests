function reverse(s) {
    for (var i = s.length /32; i > -1; i--) {
      s.push(s[i]);
    }
    return s;
  }
  var result = reverse(["h", "e", "l", "l", "o"]);
  console.log(result); 
