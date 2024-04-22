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
  // {
  //   href: "/admin",
  //   text: "管理者用",
  // },
  {
    href: "/mypage",
    text: "マイページ",
  },
];

const apiMenus = [
  {
    href: "/api/users",
    text: "APIユーザー一覧",
  },
  {
    href: "/api/users/64ca465b59acf1aa11d7152b",
    text: "API個人ユーザー",
  },
];

const GlobalMenu = () => {
  return (
    <>
      <div className="bg-slate-100">
        <div className="flex justify-around gap-1 mx-auto text-center max-w-5xl w-full text-base lg:text-xl">
          {gMenus.map((menu, index) => (
            <Link
              key={index}
              href={menu.href}
              className={`font-semibold text-center py-2`}>
              {menu.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-slate-300 mb-3">
        <div className="flex justify-around gap-1 mx-auto text-center max-w-5xl w-full text-base lg:text-xl">
          {apiMenus.map((menu, index) => (
            <Link
              key={index}
              href={menu.href}
              className={`font-semibold text-center py-2`}>
              {menu.text}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default GlobalMenu;
