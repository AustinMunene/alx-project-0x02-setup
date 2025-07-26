import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';

interface ApiUser {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

const Users = () => {
  const [users, setUsers] = useState<ApiUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then(data => setUsers(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 flex flex-col">
      <Header />
      <main className="flex-1 p-8 max-w-5xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-8 text-blue-100 text-center">Users</h1>
        {loading && <p className="text-blue-200 text-center">Loading users...</p>}
        {error && <p className="text-red-400 text-center">{error}</p>}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-6">
          {users.map(user => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Users; 