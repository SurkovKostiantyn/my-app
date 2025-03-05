import React from 'react';
import { List, Paper } from '@mui/material';
import TodoItem from './TodoItem.jsx';

function TodoList({ todos, onToggle, onDelete }) {
    return (
        <Paper elevation={3} sx={{ mt: 2, p: 1 }}>
            <List>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;
