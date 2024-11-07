import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { fetchAllPostIds, fetchPost } from '@/utils/fetchPosts';
import { PostPageProps } from "@/types/post";

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const { id } = await params;
    const post = await fetchPost(id);

    if (!post) {
        return {
            title: 'Post not found',
            description: 'The requested post could not be found',
        };
    }

    return {
        title: post.title,
        description: post.body.slice(0, 150),
    };
}

export async function generateStaticParams() {
    const ids = await fetchAllPostIds();
    return ids.map((id) => ({
        id: id.toString(),
    }));
}

export default async function PostPage({ params }: PostPageProps) {
    const { id } = await params;
    const post = await fetchPost(id);

    if (!post) {
        notFound();
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-800">{post.body}</p>
        </div>
    );
}
