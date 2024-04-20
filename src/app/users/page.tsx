import React from "react";
import UserTable from "@/components/UserTable";
import { User } from "@/types/User";
import { getUsers } from "@/app/actions/getUsers";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {
  const users = await getUsers();

  return (
    <>
      <div className="container mx-auto my-4">
        <h2 className="text-3xl font-bold text-center mb-4">ユーザー一覧</h2>
        <div className="grid gap-4 mx-2 grid-cols-1 lg:grid-cols-3 lg:mx-3">
          {users && users.map((user: User) => (
            <UserTable user={user} key={user._id} />
          ))}
        </div>
      </div>
    </>
  );
};
