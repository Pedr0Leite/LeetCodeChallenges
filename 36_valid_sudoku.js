var isValidSudoku = function(board) {
    let columns = {};
    let squares = [];
    var columnsOrganized = [];
    
    function validateUniqueness(arr){
        var answer = true;

        for(var i = 0; i < arr.length; i++){
            let line = arr[i].join('').replace(/[.]/g,'');
            let lineNoDuplicates = [... new Set(arr[i])]
            lineNoDuplicates = lineNoDuplicates.join('').replace('.','');
            
            if(lineNoDuplicates != line){
                answer = false;
            }
        }
        return answer;
    }

    //Lines
    var confirmLine = validateUniqueness(board);
    
    // //Columns
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board[i].length; j++){
            if(columns[j]){
                columns[j]+=board[i][j]
            }else{
                columns[j]=board[i][j]
            }
        }
    }
    
    Object.values(columns).forEach(x =>{
        columnsOrganized.push(x.split(''))
    })
    
    var confirmColumns = validateUniqueness(columnsOrganized);
    
    // //Squares
    for(var i = 0; i < board.length; i+=3){
        let square1 = [];
        let square2 = [];
        let square3 = [];
        
        square1.push(...board[i].splice(0, 3))
        square1.push(...board[i + 1].splice(0, 3))
        square1.push(...board[i + 2].splice(0, 3))
        
        square2.push(...board[i].splice(0, 3))
        square2.push(...board[i + 1].splice(0, 3))
        square2.push(...board[i + 2].splice(0, 3))
        
        square3.push(...board[i].splice(0, 3))
        square3.push(...board[i + 1].splice(0, 3))
        square3.push(...board[i + 2].splice(0, 3))
        squares.push(square1, square2, square3);
    }
    
    var confirmSquares = validateUniqueness(squares);

    if(confirmLine && confirmColumns && confirmSquares){
        return true;
    }else{
        return false;
    }
};

let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]; //true

let board2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]; //false

// console.log(isValidSudoku(board));
console.log(isValidSudoku(board2));