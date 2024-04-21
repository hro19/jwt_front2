import React from "react";
import Link from "next/link";

const gMenus = [
  {
    href: "/",
    text: "ホーム",
  },
  {
    href: "/users",
    text: "ユーザー一覧",
  },
  {
    href: "/users/64ca465b59acf1aa11d7152b",
    text: "個人ユーザ情報所得", 
  },
  {
    href: "/tasks",
    text: "タスク一覧",
  },
  {
    href: "/api/users",
    text: "APIユーザー一覧",
  },
  {
    href: "/api/users/64ca465b59acf1aa11d7152b",
    text: "API個人ユーザー",
  },
  {
    href: "/api/tasks",
    text: "APIタスク一覧",
  },
  {
    href: "/admin",
    text: "管理者用",
  },
  {
    href: "/mypage",
    text: "マイページ",
  },
  // {
  //   href: "/currency/php",
  //   text: "Ph通貨",
  // },
  // {
  //   href: "/currency/jay",
  //   text: "通貨計算",
  // },
];

const GlobalMenu = () => {
  return (
    <div className="bg-slate-200 mb-3">
      <div className="grid gap-1 text-center max-w-5xl w-full mx-auto grid-cols-7 text-base lg:text-xl">
        {gMenus.map((menu, index) => (
          <Link
            key={index}
            href={menu.href}
            className={`font-semibold text-center py-2`}
          >
            {menu.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GlobalMenu;
