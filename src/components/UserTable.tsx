"use client";

import React from "react";
import { User } from "@/types/User";

const UserTable = ({ user }: {user:User}) => {
  const deleteHandler = async () => {
    try {
      const response = await fetch(`https://jwt-mongo.vercel.app/api/v1/users/${user._id}`, {
        method: 'DELETE',
        cache: 'no-store'
      });
      if (response.ok) {
        // Redirect to the same page
        window.location.reload();
      }
    } catch (error) {
      // Handle fetch error
    }
  };

  return (
    <>
      <div className="border rounded-md p-4 mb-4">
        <h2 className="text-lg font-semibold">{user._id}</h2>
        <p className="text-gray-600">【ユーザー名】{user.username}</p>
        <button onClick={deleteHandler} className="bg-lime-600 text-white mt-4 px-3 py-2 rounded-xl hover:opacity-70">
          削除
        </button>
      </div>
    </>
  );
};

export default UserTable;
