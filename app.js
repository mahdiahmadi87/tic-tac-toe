let  board = [0,0,0,
         0,0,0,
         0,0,0,
]

let turn = "X"
    

function select(n){
    n = Number(n)
    if (board[n] == 0){
        document.getElementById(`${n}`).innerHTML =  `<h1>${turn}</h1>`
        board[n] = turn
        if (full() && !win(turn)){
            // alert("draw!")
            modal.style.display = "block";
            document.getElementById("text").innerText = "Draw!"
            reset()
        }
        if (win(turn)){
            // alert(`${turn} wins!`)
            modal.style.display = "block";
            document.getElementById("text").innerText = turn + "\nwins!"
            reset()
        }
    turn = turn == "X"? "O" : "X"
    document.getElementById("turn").innerText = turn + " turn"
    }
    
}

function reset(){
    board = [0,0,0,
         0,0,0,
         0,0,0,
    ]
    turn = "X"
    for (let i = 0; i < 9; i++){
        document.getElementById(`${i}`).innerHTML =  `<h1></h1>`
    }
}

function full() {
    return board.filter(e => typeof e == 'number').length == 0;
}

function win(player) {
    return (
        /* 1 2 3 — */ (board[0] == player && board[1] == player && board[2] == player) ||
        /* 4 5 6 — */ (board[3] == player && board[4] == player && board[5] == player) ||
        /* 7 8 9 — */ (board[6] == player && board[7] == player && board[8] == player) ||
        /* 1 4 7 | */ (board[0] == player && board[3] == player && board[6] == player) ||
        /* 2 5 8 | */ (board[1] == player && board[4] == player && board[7] == player) ||
        /* 3 6 9 | */ (board[2] == player && board[5] == player && board[8] == player) ||
        /* 1 5 9 \ */ (board[0] == player && board[4] == player && board[8] == player) ||
        /* 3 5 7 / */ (board[2] == player && board[4] == player && board[6] == player)
    )
}

var modal = document.getElementById("myModal");


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// modal.style.display = "block";
