import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { User } from "@/types/User";
import { Task } from "@/types/Task";
import { postVerifyToken } from "@/app/actions/postVerifyToken";
import { getSingleUser } from "@/app/actions/getSingleUser";

export default async function Page() {

  //tokenの取得と有効性の確認
  const cookieStore = await cookies()
  const token = cookieStore.get('token');
  if (!token) redirect('/login');

    //task情報を取得
    const result = await postVerifyToken(token.value);
    const loginUserData = result?.user as User;

    //task情報を取得
    const { userTasks } = await getSingleUser(loginUserData._id);
  return (
    <>
      <div className="container mx-auto my-4">
        <h2 className="text-3xl font-bold text-center mb-4">ログインユーザー情報</h2>
        <div className="border-2 p-4">
            <h4><span className="text-pink-500/70">【userID】</span>{loginUserData?._id}</h4>
            <p><span className="text-lime-500/70">【user name】</span>{loginUserData?.username}</p>
        </div>
        <div className="grid gap-4 my-4 mx-2 grid-cols-1 lg:grid-cols-3 lg:mx-3">
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
