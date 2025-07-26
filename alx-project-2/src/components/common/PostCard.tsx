import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => (
  <div className="bg-gray-900 border border-blue-700 rounded-xl p-6 shadow-md text-left text-blue-100 hover:shadow-lg transition">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-xl font-bold text-blue-300">{title}</h3>
      <span className="text-xs bg-blue-700 text-white px-2 py-1 rounded-full">User #{userId}</span>
    </div>
    <p className="text-blue-200 mt-2">{content}</p>
  </div>
);

export default PostCard; 