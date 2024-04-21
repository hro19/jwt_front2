import React from "react";
import UserTable from "@/components/UserTable";
import { User } from "@/types/User";
import { Task } from "@/types/Task";
import { getSingleUser } from "@/app/actions/getSingleUser";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page({ params }: { params: { id: string } }){
  const id = params.id;
  const { user, userTasks } = await getSingleUser(id);
  // console.log(user)
  // console.log(userTasks)

  return (
    <>
      <div className="container mx-auto my-4">
        <h2 className="text-3xl font-bold text-center mb-4">個人ユーザ情報所得</h2>
        <div className="border px-3 py-4 mb-5">
          <p>【ユーザーID】{user._id}</p>
          <p>【ユーザーネーム】{user.username}</p>
        </div>
        <div className="grid gap-4 mx-2 grid-cols-1 lg:grid-cols-3 lg:mx-3">
          {userTasks && userTasks.map((task: Task) => (
            <div key={task._id}>
              <h2>{task._id}</h2> 
              <p>{task.name}</p>
              <p>{task.completed.toString()} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
