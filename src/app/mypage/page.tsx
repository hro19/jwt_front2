import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { User } from "@/types/User";
import { postVerifyToken } from "@/app/actions/postVerifyToken";

export default async function Page() {
  const cookieStore = cookies()
  const token = cookieStore.get('token');
  if (!token) redirect('/login');

    const result = await postVerifyToken(token.value);
    const loginUserData = result?.user as User;

  return (
    <>
      <div className="container mx-auto my-4">
        <h2 className="text-3xl font-bold text-center mb-4">ログインユーザー情報</h2>
        <div className="border-2 p-4">
            <h4><span className="text-pink-500/70">【userID】</span>{loginUserData?._id}</h4>
            <p><span className="text-lime-500/70">【user name】</span>{loginUserData?.username}</p>
        </div>
        <div className="grid gap-4 mx-2 grid-cols-1 lg:grid-cols-3 lg:mx-3">
        </div>
      </div>
    </>
  );
};
