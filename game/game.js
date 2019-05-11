var game = function (player, board, row){
    if (board[row].length<=6){
        board[row].push(player); 
        return winnerChecker(player, board, row)? `Player ${player} win!` : `Please continue`;
    } else {
        return 'Please place else where!'
    }
}

var winnerChecker = function (player, board, row) {
    var count = 0
    count = 0;
    for (var i = 0; i < board[row].length; i++) {
        if (board[row][i] === player) count++
        else count = 0
        if (count === 4) return true;
    }
    // 2. check col
    count = 0;
    for (var i = 0; i < 6; i++) {
        if (board[i][board[row].length-1] === player) count++
        else count = 0
        if (count ===4 ) return true;
    }
    // 3. diagonal (top left to bottom right) 
    count = 0;
    for (var i = 0; i < 6; i++) {
        if (board[i][board[row].length-5+i] === player) count++
        else count = 0
        if (count ===4 ) return true;
    }
    // 4. diagonal (top right to bottom left)
    count = 0;
    for (var i = 0; i < 6; i++) {
        if (board[i][board[row].length-1-i] === player) count++
        else count = 0
        if (count ===4 ) return true;
    }
    console.table(board)
    return false; 
}