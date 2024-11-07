import { Post } from "@/types/post";

export async function fetchPost(id: string): Promise<Post | null> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: 'no-store',
    });
    if (!res.ok) {
        return null;
    }
    return res.json();
}

export async function fetchAllPostIds(): Promise<number[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();
    return posts.map((post) => post.id);
}
