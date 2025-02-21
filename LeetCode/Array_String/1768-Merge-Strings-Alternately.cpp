class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int l1 = word1.length(), l2 = word2.length();
        string merged;
        merged.reserve(l1 + l2);  // Preallocate memory
        //If you concatenate without preallocating space, a new string is allocated when needed, 
        //and old contents are copied over.

        int i = 0;
        while (i < l1 || i < l2) {
            if (i < l1) 
                //push_back() is more efficient for adding single characters,
                //and only appends a single character and does not check string capacity explicitly.
                merged.push_back(word1[i]); 

            if (i < l2) 
                merged.push_back(word2[i]);
            
            i++;
        }
        return merged;
    }
};