"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorBox from "@/components/ErrorBox";
import authApi from "@/api/authApi";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { Button, Input } from "@yamada-ui/react";

function Resister() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [errorMessage, setErrorMessage] = useState<string | null>(null); // 初期値は null とする
  const onSubmit = async (data: any) => {
    try {
      const newuser = await authApi.register(data);
      setCookie("token", newuser.data.token, { maxAge: 60 * 60 * 24 });
      // localStorage.setItem("token", newuser.data.token);
      // console.log(newuser.data.user._id);
      router.push(`/users/${newuser.data.user._id}`);
    } catch (error: any) {
      console.error(error);
      const errorMessage = error.data?.errors[0]?.msg;
      // console.log(errorMessage);
      setErrorMessage(errorMessage); // エラーメッセージを更新
    }
  };

  // username のフォーカス時にエラーメッセージを空にする
  const handleUsernameFocus = () => {
    setErrorMessage(null);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-8 max-w-[240px] w-[80%]">
        <Image src="/logo.png" alt="ロゴ" width={230} height={57} />
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
        <div className="flex flex-col w-72 mx-2">
          <label htmlFor="username" className="mb-1">
            ユーザー名
          </label>
          <Input
            defaultValue=""
            {...register("username", {
              required: "名前は必須です",
              minLength: {
                value: 4,
                message: "名前は4文字以上で入力してください",
              },
              maxLength: {
                value: 12,
                message: "名前は12文字以下で入力してください",
              },
            })}
            className="p-2 mb-4 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
            id="username"
            onFocus={handleUsernameFocus} // フォーカス時のイベントハンドラを追加
          />

          <label htmlFor="password" className="mb-1">
            パスワード
          </label>
          <Input
            {...register("password", {
              required: "パスワードは必須です",
              minLength: {
                value: 6,
                message: "パスワードは6文字以上で入力してください",
              },
            })}
            className="p-2 mb-4 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
            id="password"
          />

          <label htmlFor="confirmPassword" className="mb-1">
            確認用パスワード
          </label>
          <Input
            {...register("confirmPassword", {
              required: "確認用パスワードは必須です",
              validate: (value) =>
                value === watch("password") || "確認用パスワードが一致しません",
            })}
            className="p-2 mb-4 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
            id="confirmPassword"
          />
          <ErrorBox errors={errors} errorMessage={errorMessage} />
          <Button
            colorScheme="secondary"
            variant="solid"
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-[60%] mx-auto"
          >
            新規登録
          </Button>
        </div>
        <p className="text-sm mt-4">
          既に登録済みの方は
          <Link href="/login" className="text-blue-500 underline">
            ログインページ
          </Link>
          へ
        </p>
      </form>
    </div>
  );
}

export default Resister;
