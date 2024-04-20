"use client";

import React from "react";
import { User } from "@/types/User";
import { Button } from "@yamada-ui/react";
import { deleteUser } from '@/app/actions/deleteUser'

const UserTable = ({ user }: {user:User}) => {
  const deleteHandler = async () => {
    try {
      await deleteUser(user._id);
    } catch (error) {
    }
  };

  return (
    <>
      <div className="border rounded-md p-4 mb-4">
        <h2 className="text-lg font-semibold">{user._id}</h2>
        <p className="text-gray-600">【ユーザー名】{user.username}</p>
        <Button colorScheme="fuchsia" onClick={deleteHandler} mt={2}>
          削除
        </Button>
      </div>
    </>
  );
};

export default UserTable;
