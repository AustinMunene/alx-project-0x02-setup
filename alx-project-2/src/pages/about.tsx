import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 flex flex-col">
    <Header />
    <main className="flex-1 p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <p className="mb-8">This is the About page of the project.</p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
        <Button size="small" shape="rounded-sm">Small Button</Button>
        <Button size="medium" shape="rounded-md">Medium Button</Button>
        <Button size="large" shape="rounded-full">Large Button</Button>
      </div>
    </main>
  </div>
);

export default About; 