// store/useStore.ts
import create from 'zustand';

interface State {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const useStore = create<State>(set => ({
    count: 0,
    increment: () => set(state => ({ count: state.count + 1 })),
    decrement: () => set(state => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 })
}));

export default useStore;
