function count(arr) {
    var count = 0; 
    var Height = 0;

    for ( i = 0; i < arr.length; i++) {
      if (arr[i] > Height) {
            count++; 
            Height = arr[i];
        }
    }

    return count;
}

var arr = [6, 7, 1, 4, 11, 10];
console.log(count(arr));
