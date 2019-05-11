var winnerChecker = function (player, board, row) {
    // var board1 = [];
    var count = 0
    // for (var i = 0; i < 6; i++) {
    //     board1.push([...board[i]]);
    // }
    // board1[row].push(player);
    // 1. check row
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

var board =
    [[],
    [],
    [],
    [],
    [],
    []]