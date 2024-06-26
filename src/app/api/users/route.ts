import { NextResponse } from 'next/server';
import { User } from "@/types/User";

export async function GET() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASIC_URL}/users`, {
        cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data:User[] = await response.json();
    return NextResponse.json(data);
}
