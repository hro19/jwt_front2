import { handleFailed, handleSucceed, path } from "./";
import { User } from "@/types/User";

export async function postVerifyToken(tokenValue: string): Promise<{ user: User } | undefined> {
    try {
      const response = await fetch(path(`/verify-token`), {
        cache: 'no-store',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenValue}`
        }
      })
      const data = handleSucceed(response)
      return data;
    } catch (error) {
      handleFailed(error)
    }
  };