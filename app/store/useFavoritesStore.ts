// store/useFavoritesStore.ts
import { create } from 'zustand'

interface FavoritesState {
    favorites: number[];
    addFavorite: (postId: number) => void;
    removeFavorite: (postId: number) => void;
}

const useFavoritesStore = create<FavoritesState>((set) => ({
    favorites: [],
    addFavorite: (postId) => {
        set((state) => ({
            favorites: [...state.favorites, postId],
        }));
    },
    removeFavorite: (postId) => {
        set((state) => ({
            favorites: state.favorites.filter((id) => id !== postId),
        }));
    },
}));

export default useFavoritesStore;
