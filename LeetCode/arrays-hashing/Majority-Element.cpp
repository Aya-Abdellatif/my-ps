class Solution {
public:
    int majorityElement(vector<int>& nums) {
        map<int, int>mp;
        int mx = INT_MIN;
        for (int num : nums) {
            mp[num]++;
            mx = max(mx, mp[num]);
        }
        for (auto& pair : mp) {
            if(pair.second == mx){
                return pair.first;
                break;
            }
        }
        return nums[0];
    }
};