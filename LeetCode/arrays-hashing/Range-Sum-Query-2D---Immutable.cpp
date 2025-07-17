class NumMatrix {
public:
    vector<vector<int>> prefixSumMatrix;

    NumMatrix(vector<vector<int>>& matrix) {
        int r = matrix.size(), c = matrix[0].size();
        prefixSumMatrix = vector<vector<int>>(r+1, vector<int>(c+1, 0));
        for(int i = 0; i < r; i++){
            int prefix = 0;
            for(int j = 0; j < c; j++){
                prefix += matrix[i][j];
                int upper = prefixSumMatrix[i][j + 1];
                prefixSumMatrix[i + 1][j + 1] = prefix + upper;
            }
        }
    }
    
    int sumRegion(int row1, int col1, int row2, int col2) {
        int bottomRight = prefixSumMatrix[row2 + 1][col2 + 1];
        int upper = prefixSumMatrix[row1][col2 + 1];
        int left = prefixSumMatrix[row2 + 1][col1];
        int upperLeft = prefixSumMatrix[row1][col1];

        return bottomRight - upper - left + upperLeft;

    }
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix* obj = new NumMatrix(matrix);
 * int param_1 = obj->sumRegion(row1,col1,row2,col2);
 */