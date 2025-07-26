import React, { useState, useEffect } from 'react';

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      setTimeout(() => setShow(false), 200);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
    onClose();
  };

  if (!isOpen && !show) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-200 ${isOpen ? 'opacity-100 bg-black bg-opacity-60' : 'opacity-0 pointer-events-none'}`}>
      <div className={`relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-blue-500 transition-transform duration-200 ${isOpen ? 'scale-100' : 'scale-95'}`}>
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-blue-400 text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-blue-300 tracking-wide">Add a New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label className="block text-sm font-semibold text-blue-200 mb-1" htmlFor="modal-title">Title</label>
            <input
              id="modal-title"
              className="w-full border border-blue-400 bg-gray-900 text-white p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              type="text"
              placeholder="Enter a catchy title..."
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="text-left">
            <label className="block text-sm font-semibold text-blue-200 mb-1" htmlFor="modal-content">Content</label>
            <textarea
              id="modal-content"
              className="w-full border border-blue-400 bg-gray-900 text-white p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              placeholder="Share your thoughts..."
              value={content}
              onChange={e => setContent(e.target.value)}
              required
              rows={4}
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-700 text-blue-200 rounded hover:bg-gray-600 transition"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold shadow-md transition"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal; 