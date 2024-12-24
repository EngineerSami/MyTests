function twoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = 1; j < nums.length; j++) {
            for (var a =  2 ; a < nums.length; a++) {
                for (var b = 3 ; b < nums.length; b++) {
            if (nums[i] + nums[j] + nums[a] + nums[b]  == target) {
                return [i, j, a, b];
                
            }
        }
    }
}
}
}

var nums = [1,2,3,4,5,6,7,8,9,10]; //you need to set target from 6-30 or you need to change arr value//
var target = 30;
var result = twoSum(nums, target);
console.log(result);  
 