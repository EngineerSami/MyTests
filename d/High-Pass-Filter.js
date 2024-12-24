function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > cutoff) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
}
var result = highPass([1,2,3,4,5,6,7,8,9], 5);
console.log(result); 
