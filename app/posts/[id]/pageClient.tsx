'use client';

import React, { useEffect, useState } from 'react';
import { fetchPostById, fetchUserById, fetchCommentsByPostId } from '@/app/services/api';
import useFavoritesStore from '@/app/store/useFavoritesStore';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Navigation from "@/app/components/Navigation";
import { capitalizeFirstLetter } from "@/app/utils/formatText";
import LettersAvatar from "@/app/components/LettersAvatar";
import CircularProgress from "@mui/material/CircularProgress";

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

interface Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}

interface PostPageClientProps {
    params: { id: string };
}

const PostPageClient: React.FC<PostPageClientProps> = ({ params }) => {
    const [post, setPost] = useState<Post | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);

    const addFavorite = useFavoritesStore((state) => state.addFavorite);
    const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
    const favorites = useFavoritesStore((state) => state.favorites);

    const navLinks = [
        { href: '/', label: '...go /home' },
        { href: '/posts', label: '...go /posts' },
    ];

    useEffect(() => {
        async function fetchData() {
            try {
                const postResponse = await fetchPostById(Number(params.id));
                const userResponse = await fetchUserById(postResponse.data.userId);
                const commentsResponse = await fetchCommentsByPostId(Number(params.id));

                setPost(postResponse.data);
                setUser(userResponse.data);
                setComments(commentsResponse.data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        }

        fetchData().catch(error => console.error('Error fetching data:', error));
    }, [params.id]);

    if (!post || !user) {
        return <CircularProgress />;
    }

    return (
        <>
            <Navigation links={navLinks} />
            <div className="w-full max-w-5xl grid items-center gap-4 mt-12 font-mono text-sm">
                <h1 className="px-5 py-4">
                    Theme: {capitalizeFirstLetter(post.title)}
                </h1>
                <div
                    className="rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 dark:border-neutral-700 light:border-neutral-700">
                    <LettersAvatar name={user.name}/>
                    <p className="mt-2">{capitalizeFirstLetter(post.body)}</p>
                    <p className="mb-2 mt-2">
                        Author: {user.name}
                    </p>
                    <button
                        onClick={() => {
                            if (post && post.id !== null) {
                                favorites.includes(post.id) ? removeFavorite(post.id) : addFavorite(post.id);
                            }
                        }}
                    >
                        {post && favorites.includes(post.id) ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                    </button>
                </div>
            </div>
            <div className="w-full max-w-5xl grid items-center gap-4 mt-12 font-mono text-sm">
                <h2 className="px-5 py-4">Comments</h2>
                {comments.map((comment) => (
                    <div key={comment.id}
                         className="rounded-lg border px-5 py-4 transition-colors border-gray-300 dark:border-neutral-700">
                        <h2>{capitalizeFirstLetter(comment.name)}:</h2>
                        <p className="mt-2 mb-2">{capitalizeFirstLetter(comment.body)}</p>
                        <p>Author: <a href={"mailto:" + comment.email}>{comment.email}</a></p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PostPageClient;
