import { Box, Button } from "@yamada-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <div className="sub_menu flex justify-center gap-3">
          <Box as={"a"} className="bg-blue-500 text-white px-7 py-3 rounded-md hover:bg-blue-500/70 duration-700" href="/mypage">マイページ</Box>
          <Box as={"a"} className="bg-blue-500 text-white px-7 py-3 rounded-md hover:bg-blue-500/70 duration-700" href="/mypage/tasks">タスク</Box>
        </div>
        {children}
      </div>
  );
}
