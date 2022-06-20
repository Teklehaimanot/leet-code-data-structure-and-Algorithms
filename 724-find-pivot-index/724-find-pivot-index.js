/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let left = 0;
    for(let i = 0; i < nums.length; i++){
        let sum = 0
        for(let j = i+1; j< nums.length; j++){
            sum = sum + nums[j]
        }
        if(left === sum){
            return i
        }else left = left + nums[i]
    }
    
    return -1
};
