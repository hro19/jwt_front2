import { NextRequest, NextResponse } from 'next/server';
import { User } from "@/types/User";

type NextRequestContext = {
  params: {
    id: string;
  };
};

export async function GET(
  request: NextRequest,
  context: NextRequestContext
) {
  const { id } = context.params;  // Destructuring to get the id
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASIC_URL}/users/${id}`;

  try {
    const response = await fetch(apiUrl, {
      next: { 
        revalidate: 0  // Using revalidate instead of 'no-store'
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