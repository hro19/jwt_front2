import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { User } from "@/types/User";
import { postVerifyToken } from "@/app/actions/postVerifyToken";

export default async function Page() {
  const cookieStore = cookies()
  const token = cookieStore.get('token');
  if (!token) redirect('/login');

    const result = await postVerifyToken(token.value);
    const user = result?.user as User;

  return (
    <>
      <div className="container mx-auto my-4">
        <h2 className="text-3xl font-bold text-center mb-4">マイページ</h2>
        <div className="grid gap-4 mx-2 grid-cols-1 lg:grid-cols-3 lg:mx-3">
          <h2>【userID】{user?._id}</h2>
          <p>【user name】{user?.username}</p>
        </div>
      </div>
    </>
  );
};
