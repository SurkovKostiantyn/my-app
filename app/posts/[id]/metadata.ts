// app/posts/[id]/metadata.ts
import { fetchPostById } from '@/app/services/api';

interface PostPageProps {
    params: { id: string };
}

export const generateMetadata = async ({ params }: PostPageProps) => {
    const postResponse = await fetchPostById(Number(params.id));
    const post = postResponse.data;

    return {
        title: post.title,
        description: post.body,
        openGraph: {
            title: post.title,
            description: post.body,
            url: `https://localhost/posts/${params.id}`,
            type: 'article',
        },
    };
};
