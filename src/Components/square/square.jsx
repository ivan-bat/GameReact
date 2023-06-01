import PropTypes from 'prop-types'
import React from 'react';
import styles from './square.module.css';

const Square = ({onClick, value}) => {
    return (
        <button className={styles.square} onClick={onClick}>{value}</button>
    );
}

Square.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
}

export default Square;
