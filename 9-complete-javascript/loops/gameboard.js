const gameBoard = [
    [4,32,8,4],
    [64,8,32,2],
    [8,32,16,4],
    [2,8,4,2]
];
for(let i=0;i < gameBoard.length;i++){
    // console.log(gameBoard[i]);
    for(let j=0;j<gameBoard[i].length;j++)
    {
        console.log(gameBoard[i][j]);
    }
}
// output---
/*
4
32
8
4
64
8
32
2
8
32
16
4
2
8
4
2
*/