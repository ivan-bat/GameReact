import PropTypes from 'prop-types'
import React from 'react';
import styles from './board.module.css'
import Square from '../square/square';

const Board = ({squares, click}) => {
    return (
        <div className={styles.board}>
            {
                squares.map((square, i) => (
                    <Square key={i} value={square} onClick={() => click(i)} />
                ))
            }
        </div>
    );
}

Board.propTypes = {
    squares: PropTypes.array,
    click: PropTypes.func
}

export default Board;
