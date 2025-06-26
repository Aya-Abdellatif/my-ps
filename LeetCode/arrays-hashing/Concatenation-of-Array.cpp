class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int siz = nums.size();
        vector<int>ans(2 * siz);
        for(int i = 0; i < siz; i++){
            ans[i] = nums[i];
        }
        for(int i = 0; i < siz; i++){
            ans[i + siz] = nums[i];
        }
        return ans;
    }
};