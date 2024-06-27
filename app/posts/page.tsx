// app/posts/page.tsx
'use client';

import { useEffect } from 'react';
import useApiStore from '@/app/store/useApiStore';
import useFavoritesStore from '@/app/store/useFavoritesStore';
import Link from 'next/link';
import { fetchPosts, fetchUsers } from '@/app/services/api';
import LettersAvatar from "@/app/components/LettersAvatar";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Navigation from "@/app/components/Navigation";
import { capitalizeFirstLetter, truncateText } from '@/app/utils/formatText';
import CircularProgress from '@mui/material/CircularProgress';

interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

interface User {
    id: number;
    name: string;
}

const PostsPage: React.FC = () => {
    const loadPosts = useApiStore((state) => state.loadPosts);
    const loadUsers = useApiStore((state) => state.loadUsers);
    const posts = useApiStore((state) => state.posts);
    const users = useApiStore((state) => state.users);

    const userMap = new Map<number, string>(
        users.map(user => [user.id as number, user.name as string])
    );

    const addFavorite = useFavoritesStore((state) => state.addFavorite);
    const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
    const favorites = useFavoritesStore((state) => state.favorites);

    const navLinks = [
        { href: '/', label: '...go /home'},
    ];

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            const postsResponse = await fetchPosts();
            const usersResponse = await fetchUsers();
            loadPosts(postsResponse.data);
            loadUsers(usersResponse.data);
        };

        fetchData().catch(error => console.error('Error fetching data:', error));
    }, [loadPosts, loadUsers]);

    if (!posts.length || !users.length) {
        return <CircularProgress />;
    }

    return (
        <>
            <Navigation links={navLinks} />

            <div className="w-full max-w-5xl grid items-center gap-4 mt-12 font-mono text-sm">
                <p className="px-5 py-4">
                    It&apos;s Posts page
                </p>
                {posts.map((post: Post) => (
                    <div key={post.id} className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                        <Link href={`/posts/${post.id}`}>
                            <LettersAvatar name={userMap.get(post.userId) || 'Anonymous'} />
                            <h2 className="mb-2 mt-2">Theme: {capitalizeFirstLetter(post.title)}</h2>
                            <p>{post.body}</p>
                            <p className="mb-2 mt-2">
                                Author: {userMap.get(post.userId) || 'Anonymous'}
                            </p>
                        </Link>
                        <button
                            onClick={() =>
                                favorites.includes(post.id)
                                    ? removeFavorite(post.id)
                                    : addFavorite(post.id)
                            }
                        >
                            {favorites.includes(post.id) ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                        </button>
                    </div>
                ))}
            </div>

        </>
    );
};

export default PostsPage;
