import React, { useState } from 'react';
import { Box, Button, TextField, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Stack spacing={2} direction="row">
                <TextField
                    fullWidth
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Нове завдання..."
                    variant="outlined"
                />
                <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    color="success"
                >
                    Додати
                </Button>
            </Stack>
        </Box>
    );
}

export default TodoForm;
