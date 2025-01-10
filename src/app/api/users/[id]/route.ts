import { NextRequest, NextResponse } from 'next/server';
import { User } from "@/types/User";

// contextを使用した正しい型定義
type Context = {
  params: {
    id: string;
  };
};

export async function GET(
  req: NextRequest,
  context: Context
) {
  const id = context.params.id;
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASIC_URL}/users/${id}`;

  try {
    const response = await fetch(apiUrl, {
      next: { revalidate: 0 }
    });
    const user: User = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
  }
}