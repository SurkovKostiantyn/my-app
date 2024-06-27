// components/Counter.tsx
import React from 'react';
import useStore from '@/app/store/useStore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Counter: React.FC = () => {
    const { count, increment, decrement, reset } = useStore();

    return (
        <div className="w-full max-w-5xl flex flex-col justify-center flex-grow">
            <p className="px-4 py-4 text-center font-mono text-sm">Count: {count}</p>
            <div className="w-full flex flex-row justify-center">
                <button onClick={decrement} className="px-4 py-4 text-gray-500 hover:text-black hover:dark:text-white  duration-100">
                    <RemoveIcon/>
                </button>
                <button onClick={reset} className="px-4 py-4 text-gray-500 hover:text-black hover:dark:text-white duration-100">
                    <RestartAltIcon/>
                </button>
                <button onClick={increment} className="px-4 py-4 text-gray-500 hover:text-black hover:dark:text-white duration-100">
                    <AddIcon/>
                </button>
            </div>
        </div>
    );
}

export default Counter;
