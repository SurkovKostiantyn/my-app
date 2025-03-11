import React from 'react';
import { List, Paper, Typography } from '@mui/material';
import TodoItem from './TodoItem.jsx';

function TodoList({ todos, onToggle, onDelete }) {
    if (!todos || todos.length === 0) {
        return (
            <Typography variant="body1" align="center" sx={{ mt: 2 }}>
                Немає завдань для відображення.
            </Typography>
        );
    }

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
