import { NextResponse } from 'next/server';
import { User } from "@/types/User";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const {id} = await params;
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASIC_URL}/users/${id}`;

  try {
    const response = await fetch(apiUrl, {
      cache: 'no-store',
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