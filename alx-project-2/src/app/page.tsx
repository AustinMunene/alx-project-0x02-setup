import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to ALX Project 2</title>
        <meta name="description" content="Next.js Setup and Basics" />
      </Head>
      <Header/>
      <main className="p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">🚀 Welcome to My Next.js + Tailwind CSS project!</h2>
        <p className="mt-4 text-gray-600">This is the starting point for exploring Next.js fundamentals with TypeScript.</p>
      </main>
    </>
  );
}
