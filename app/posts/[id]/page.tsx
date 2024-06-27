// app/posts/[id]/page.tsx
import PostPageClient from './pageClient';
import { generateMetadata } from './metadata';
import React from "react";

interface PostPageProps {
    params: { id: string };
}

const PostPage: React.FC<PostPageProps> = ({ params }) => {
    return <PostPageClient params={params} />;
};

export { generateMetadata };
export default PostPage;


