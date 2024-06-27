// src/components/Avatar.tsx
import * as React from 'react';
import Avatar from '@mui/material/Avatar';

interface LettersAvatarProps {
    name?: string;
}

const LettersAvatar: React.FC<LettersAvatarProps> = ({ name = 'Anonymous' }) => {
    const getColor = (name: string) => {
        let hash = 0;
        let i;

        for (i = 0; i < name.length; i += 1) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        return color;
    };

    const getInitials = (name: string) => {
        const nameParts = name.split(' ');
        return `${nameParts[0][0]}${nameParts[1] ? nameParts[1][0] : ''}`;
    };

    const initials = getInitials(name); // инициалы
    const backgroundColor = getColor(name); // цвет

    return (
        <Avatar sx={{ bgcolor: backgroundColor, width: 34, height: 34, fontSize: '14px', fontStyle: 'inherit !important' }}>{initials}</Avatar>
    );
}

export default LettersAvatar;
