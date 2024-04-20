import React from "react";
import { User } from "@/types/User";

const UserTable = ({ user }: {user:User}) => {
  return (
    <>
      <div className="border rounded-md p-4 mb-4">
        <h2 className="text-lg font-semibold">{user._id}</h2>
        <p className="text-gray-600">【ユーザー名】{user.username}</p>
        <button className="bg-lime-600 text-white mt-4 px-3 py-2 rounded-xl hover:opacity-70">
          削除
        </button>
      </div>
    </>
  );
};

export default UserTable;
