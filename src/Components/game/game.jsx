import React, { useState } from 'react';
import styles from './game.module.css'
import Board from '../board/board'
import {calculateWinner} from '../../winner'
import PropTypes from 'prop-types'

const GameLayout = ({board, handleClick, winner, xIsNext, startNewGame}) => {
    return (
        <div className={styles.wrapper}>
            <button className={styles.start_btn} onClick={() => startNewGame()}>Начать заново</button>
            <Board squares={board} click={handleClick} /> 
            <p className={styles.p}>
            {winner ? 'Победитель: ' + winner : 'сейчас ходит: ' + ( xIsNext ? 'X' : '0')}
            </p>
        </div>
    )
}

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        if (winner || boardCopy[index]) return
        boardCopy[index] = xIsNext ? 'X' : '0'
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return setBoard(Array(9).fill(null))
    }

    return <GameLayout board={board} handleClick={handleClick} winner={winner} xIsNext={xIsNext} startNewGame={startNewGame} />
}

GameLayout.propTypes = {
    board: PropTypes.array,
    handleClick: PropTypes.func,
    winner: PropTypes.string,
    xIsNext: PropTypes.bool,
    startNewGame: PropTypes.func
}

export default Game;
