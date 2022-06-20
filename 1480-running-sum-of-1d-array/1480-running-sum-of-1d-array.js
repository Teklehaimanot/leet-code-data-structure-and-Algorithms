/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let output = []
    for(let i =0; i< nums.length; i++){
        if(i === 0) output.push(nums[i])
        else{
            output.push(nums[i] + output[i-1])
        }
    }
    
    return output
    
};