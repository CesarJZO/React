import { WINNING_COMBINATIONS } from '../constants.js'

export const checkWinner = (board) => {
    for (const combination of WINNING_COMBINATIONS) {
        const [a, b, c] = combination

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]
        }
    }
    return null
}

export const checkGameOver = (board) => {
    return board.every(s => s !== null)
}
