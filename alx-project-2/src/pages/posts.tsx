import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';

interface ApiPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const Posts = () => {
  const [posts, setPosts] = useState<ApiPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch posts');
        return res.json();
      })
      .then(data => setPosts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 flex flex-col">
      <Header />
      <main className="flex-1 p-8 max-w-5xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-8 text-blue-100 text-center">Posts</h1>
        {loading && <p className="text-blue-200 text-center">Loading posts...</p>}
        {error && <p className="text-red-400 text-center">{error}</p>}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-6">
          {posts.map(post => (
            <PostCard key={post.id} title={post.title} content={post.body} userId={post.userId} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Posts; 