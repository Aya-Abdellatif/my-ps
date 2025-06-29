class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int siz = nums.size();
        vector<int> res(2);
        for(int i = 0; i < siz; i++){
            for(int j = i + 1; j < siz; j++){
                if(nums[i] + nums[j] == target){
                    res[0] = i;
                    res[1] = j;
                    return res;
                }
            }
        }
        return res;
    }
};