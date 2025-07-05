class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        nums.erase(remove(nums.begin(), nums.end(), val), nums.end());
        return nums.size();
    }
};

/*
 remove(v.begin(), v.end(), 20)
remove does not actually erase elements from the vector.

Instead, it rearranges the elements by moving all elements not equal to 20 to the front.

It returns an iterator (new_end) that points to the new logical end of the vector (the part after that contains undefined or "garbage" values).

v.erase(new_end, v.end())
Now, this erase() call actually removes the "garbage" or duplicate elements from the vector.

It erases everything from the new_end to the real v.end(), effectively shrinking the vector.
*/
