#include<bits/stdc++.h>
using namespace std;

//One-pass Hash Table Approach
class Solution {
    //Time: O(n) // one for loop
    //Space: O(n) //adding at most n items to my map
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, int> m;
        for(int i=0; i < nums.size(); i++){
            // curr + x = target
            // x = target - curr
            int complement = target - nums[i];
            if(m.count(complement) && m[complement] != i){
                return {m[complement], i};
            }
            m[nums[i]] = i;
        }
        return {};
    }
};
