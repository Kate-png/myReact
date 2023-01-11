import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    li:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 0.5rem',
        border:  '1px solid #ccc',
        borderRadius: '7px',
        marginBottom: '.5rem'

    },
    input:{
        marginRight: '1rem'
    }

}
function TodoItem({todo, index, onChange}){

    const classes = []

    if(todo.completed){
        classes.push('done')
    }
    return(
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type = "checkbox"
                style = {styles.input} 
                checked = {todo.completed}
                onChange = {() => onChange(todo.id)}></input>
                <strong>{index + 1}</strong> 
                {todo.title}
            </span> 

            <button className='rm'>&times;</button>
        </li>
    )
}

TodoItem.prototype = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem