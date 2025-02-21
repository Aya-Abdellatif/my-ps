class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int l1 = word1.length(), l2 = word2.length(), max_l = max(l1,l2);
        string merged = "";

        for(int i = 0; i < max_l; i++){
            if(i<l1){
                merged += word1[i];
            }
            if(i<l2){
                merged += word2[i];
            }
        }
        return merged;
    }
};