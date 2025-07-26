import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 text-center shadow">
      <h1 className="text-xl font-bold tracking-wide drop-shadow">ALX Project 2 – Next.js Setup</h1>
      <nav className="mt-3 flex justify-center gap-6 text-base font-medium">
        <Link href="/home" className="hover:text-blue-200 transition">Home</Link>
        <Link href="/about" className="hover:text-blue-200 transition">About</Link>
        <Link href="/posts" className="hover:text-blue-200 transition">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
