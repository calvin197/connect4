module.exports = {
    get: (req, res) => {
        var board = strToBoard(req.query.boardStr) ;
        console.log(checkMove(Number(req.query.player), board, req.query.row));
        res.send(checkMove(Number(req.query.player), board, req.query.row))
    }
}

var board =
    [[0,1,0,1,0],
    [0,1,1],
    [0,1,0],
    [1],
    [],
    [],
    []]

var boardStr = "1001.................101.................."
//------this is actually for client

var boardToStr = function(board){
    var result = ''
    for (var i=0; i<board.length; i++){
        for  (var k=0; k<6; k++){
            if (board[i][k]!==undefined){
                result+=board[i][k];
            } else {
                result+='.';
            }
        }
    }
    return result; 
}


//---------------------------------

var strToBoard = function(str){
    var result = []; 
    var row = []; 
    var counter = 0; 
    for (var char of str){
        if (char!=='.') row.push(Number(char));
        counter++; 
        if (counter === 6){
            result.push(row); 
            row = []; 
            counter = 0; 
        }
    }
    return result; 
}



var checkMove = function (player, board, row) {
    var board1 = [];
    for (var i = 0; i < 7; i++) {
        board1.push([...board[i]]);
    }
    // board1[row].push(player);
    if (board1[row].length <= 7) {
        board1[row].push(player);
        return winnerChecker(player, board1, row) ? `Player ${player} win!` : `Please continue`;
    } else {
        return 'Please place else where!'
    }
}

var winnerChecker = function (player, board, row) {
    var count = 0
    count = 0;
    // 1. check row
    for (var i = 0; i < board[row].length; i++) {
        if (board[row][i] === player) count++
        else count = 0
        if (count === 4) return true;
    }
    // 2. check col
    count = 0;
    for (var i = 0; i < 7; i++) {
        if (board[i][board[row].length - 1] === player) count++
        else count = 0
        if (count === 4) return true;
    }
    // 3. diagonal (top left to bottom right) 
    count = 0;
    for (var i = 0; i < 7; i++) {
        if (board[i][board[row].length -1 - row + i] === player) count++
        else count = 0
        if (count === 4) return true;
    }
    // 4. diagonal (top right to bottom left)
    count = 0;
    for (var i = 0; i < 7; i++) {
        var index = Number(board[row].length) + Number(row) - 1 - i; 
        console.log('index: ', index);
        if (board[i][index] === player){
            count++;        
        }
        else count = 0
        if (count === 4) return true;
    }
    console.table(board)
    return false;
}