import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('');
    };

    return (
        <form>
            <TextField
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Нове завдання..."
                variant="outlined"
            />
            <br/>
            <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleSubmit}
                color="success"
                size="small"
            >
                Додати
            </Button>
        </form>
    );
}

export default TodoForm;
