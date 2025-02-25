import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

function TodoItem({todo, onToggle, onDelete}) {
    return (
        <li>
            <Checkbox
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                color="success"
            />
            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                {todo.text}
            </span>
            <Button
                variant="contained"
                onClick={() => onDelete(todo.id)}
                endIcon={<DeleteIcon/>}
                color="success"
                size="small"
            >
                Видалити
            </Button>
        </li>
    );
}

export default TodoItem;
