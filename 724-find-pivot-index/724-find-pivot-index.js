/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
let sum = 0;
   for(let i = 0; i< nums.length; i++){
      sum = sum + nums[i] 
   }
   
   let left = 0; right = sum
   for(let i = 0; i< nums.length; i++){
       right = right - nums[i]
       if(right === left){
           return i
       }else{
           left = left + nums[i]
       }
   }
return -1;
};
