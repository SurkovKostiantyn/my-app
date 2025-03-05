import React from 'react';
import { ListItem, ListItemIcon, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => onDelete(todo.id)}>
                    <DeleteIcon color="error" />
                </IconButton>
            }
            disablePadding
        >
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    color="success"
                />
            </ListItemIcon>
            <ListItemText
                primary={todo.text}
                sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            />
        </ListItem>
    );
}

export default TodoItem;
