import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

const AVATAR_URL = 'https://avatars.githubusercontent.com/u/9919?s=200&v=4'; // Example avatar, replace as needed

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: 'Welcome to the Project!', content: 'This project demonstrates a modern Next.js app with reusable components, dynamic modals, and a clean, professional design.' },
    { title: 'Why Next.js?', content: 'Next.js offers SSR, API routes, and a great developer experience. It is widely used in the tech industry.' },
    { title: 'How to Use', content: 'Click "Add New Post" to contribute your own ideas. Posts appear instantly below.' },
  ]);

  const handleAddPost = (data: { title: string; content: string }) => {
    setPosts(prev => [data, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 flex flex-col">
      <Header />
      <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-blue-200">Recent Posts</h2>
          <button
            className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 font-semibold transition"
            onClick={() => setModalOpen(true)}
          >
            + Add New Post
          </button>
        </div>
        <PostModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post, idx) => (
            <Card key={idx} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
      <footer className="py-6 text-center text-blue-300 bg-gray-950 border-t border-blue-900 mt-8">
        &copy; {new Date().getFullYear()} Austin Munene &mdash; ALX School Project
      </footer>
    </div>
  );
};

export default Home; 