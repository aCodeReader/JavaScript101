function startGame() {
    document.turn ='X';
    setMess(document.turn + " goes first")
}

function setMess(msg){
document.getElementById('message').innerText = msg;
}

function mark(column){
    if(column.innerText == '') {
    column.innerText = document.turn;
    switchT();
    } else {
        setMess('Pick new space')
    }
}

function switchT() {
    if (checkForWinner(document.turn)){
        console.log('winner')
        setMess("Winner!! " + document.turn + " is the Winner!!")
    } else if(document.turn == 'X') {
        document.turn = 'O';
        setMess("It is " + document.turn + "'s turn")
    } else {
        document.turn = 'X'
        setMess("It is " + document.turn + "'s turn")
    }

}

    function checkForWinner(move){
        let result = false;
        console.log('checking')
     if(checkRow(1,2,3, move) ||
        checkRow(4,5,6, move) ||
        checkRow(7,8,9, move) ||
        checkRow(1,4,7, move) ||
        checkRow(2,5,8, move) ||
        checkRow(3,6,9, move) ||
        checkRow(1,5,9, move) ||
        checkRow(3,5,7, move)) {
        return result = true;
    }
        return result;
    }

function checkRow(a, b, c, move){
    console.log('checkrow')
    let result = false;
    console.log(getBox(a))
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move ){
        result = true;
    }
    return result;
}
function getBox(number) {
    console.log(number)
    return document.getElementById("s" + number).innerText;
    
}