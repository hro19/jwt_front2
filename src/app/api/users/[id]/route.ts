import { NextRequest, NextResponse } from 'next/server';
import { User } from "@/types/User";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;  // awaitは不要です
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASIC_URL}/users/${id}`;

  try {
    const response = await fetch(apiUrl, {
      next: { 
        revalidate: 0  // 'no-store'の代わりにこちらを使用
      }
    });
    const user: User = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: 'User not found' }, 
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user' }, 
      { status: 500 }
    );
  }
}