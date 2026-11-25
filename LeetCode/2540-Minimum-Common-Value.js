/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {

    // Hash Map Solution
    // time: O(n + m)
    // space: O(n)
    
    let obj = {};

    let mn = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < nums1.length; i++){
        obj[nums1[i]] = true;
    }

    for(let i = 0; i < nums2.length; i++){
        if(obj[nums2[i]]){
            mn = Math.min(mn, nums2[i]); // O(1) just 2 nums 
        }
    }

    return mn === Number.MAX_SAFE_INTEGER ? -1 : mn;
};