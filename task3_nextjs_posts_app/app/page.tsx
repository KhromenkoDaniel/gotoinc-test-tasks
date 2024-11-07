import Link from 'next/link';

import ButtonToDashboard from "@/components/ButtonToDashboard";
import { Post } from "@/types/post";

export default async function HomePage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }

    const posts: Post[] = await res.json();

    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold mb-6">Posts</h1>
                <ButtonToDashboard className="mb-4" />
            </div>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li key={post.id} className="border p-4 rounded-md hover:bg-gray-100 transition">
                        <Link href={`/posts/${post.id}`}>
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                            <p className="text-gray-600 mt-2">{post.body.slice(0, 100)}...</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
