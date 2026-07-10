class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
		let rows = Array.from({ length: 9 }, () => new Set());
	let cols = Array.from({ length: 9 }, () => new Set());
	let boxes = Array.from({ length: 9 }, () => new Set());
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
			if (board[i][j] >= '1' && board[i][j] <= '9') {
				if (
					rows[i].has(board[i][j]) ||
					cols[j].has(board[i][j]) ||
					boxes[boxIndex].has(board[i][j])
				) {
					return false;
				}

				rows[i].add(board[i][j]);
				cols[j].add(board[i][j]);
				boxes[boxIndex].add(board[i][j]);
			}
		}
	}
	return true;
	}
}
