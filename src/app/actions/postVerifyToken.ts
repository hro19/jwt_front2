import { User } from "@/types/User";

export async function postVerifyToken(tokenValue: string): Promise<{ user: User } | undefined> {
    try {
      const response = await fetch('https://jwt-mongo.vercel.app/api/v1/verify-token', {
        cache: 'no-store',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenValue}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };