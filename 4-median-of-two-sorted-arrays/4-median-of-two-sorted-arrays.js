/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    const newnum = [...nums1, ...nums2]
    newnum.sort((a,b)=> a - b)
    console.log(newnum)
    const mid = Math.floor(newnum.length / 2)
    console.log(mid)
    if(newnum.length % 2 === 0){
        return (newnum[mid-1] + newnum[mid])/2
}else return newnum[mid]
    
};