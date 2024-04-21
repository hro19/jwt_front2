"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

const Page = () => {
  const router = useRouter();
  const ref = useRef(false);

  useEffect(() => {
    if (!ref.current) {
      deleteCookie("token");
      router.push("/");
      ref.current = true;
    }
  }, [router]);

  return <></>;
};

export default Page;
