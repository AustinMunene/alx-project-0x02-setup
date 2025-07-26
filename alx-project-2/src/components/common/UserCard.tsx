import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => (
  <div className="bg-gray-900 border border-blue-700 rounded-xl p-6 shadow-md text-left text-blue-100 hover:shadow-lg transition">
    <h3 className="text-xl font-bold text-blue-300 mb-2">{name}</h3>
    <p className="text-blue-200 mb-1"><span className="font-semibold">Email:</span> {email}</p>
    <p className="text-blue-200 text-sm">
      <span className="font-semibold">Address:</span> {address.street}, {address.suite}, {address.city}, {address.zipcode}
    </p>
  </div>
);

export default UserCard; 