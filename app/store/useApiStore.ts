// store/useApiStore.ts
import { create } from 'zustand'

interface ApiState {
    posts: any[];
    users: any[];
    loadPosts: (posts: any[]) => void;
    loadUsers: (users: any[]) => void;
}

const useApiStore = create<ApiState>((set) => ({
    posts: [],
    users: [],
    loadPosts: (posts) => {
        set({ posts });
    },
    loadUsers: (users) => {
        set({ users });
    },
}));

export default useApiStore;
