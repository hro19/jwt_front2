"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import ErrorBox from "@/components/ErrorBox";
import authApi from "@/api/authApi";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { Button, Input } from "@yamada-ui/react";

function Login() {

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [errorMessage, setErrorMessage] = useState<string | null>(null); // 初期値は null とする

  // DBのUser情報のユーザー名とパスワードの一致についてのエラー文を設置
  const [usernameErrText, setUsernameErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { username, password } = data; // react-hook-formによりdataオブジェクトから入力値を取得
    //ログイン用APIを叩く
    try {
      const res = await authApi.login({
        username,
        password,
      });
      setCookie("token", res.data.token, { maxAge: 60 * 60 * 24 });
      router.push(`mypage`);
    } catch (err) {
      // console.log(err);
      const cherrors = (err as any).data.errors;
      console.log(cherrors);
      cherrors.forEach((e: any) => {
        if (e.param === "username") {
          setUsernameErrText(e.msg);
        }
        if (e.param === "password") {
          setPasswordErrText(e.msg);
        }
      });
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
          <ErrorBox errors={errors} errorMessage={errorMessage} />
          <p className="text-red-600">
            {usernameErrText}
            {passwordErrText}
          </p>
          <Button
            colorScheme="secondary" variant="solid"
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-[60%] mx-auto"
          >
            ログイン
          </Button>
        </div>
        <p className="text-sm mt-4">
          アカウントを持っていませんか？
          <Link href="/register" className="text-blue-500 underline">
            新規登録
          </Link>
          へ
        </p>
      </form>
    </div>
  );
}

export default Login;
