import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // paramsから直接idを取得
  const { id } = params

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 0 }
    })
    const data = await res.json()

    if (res.ok) {
      return NextResponse.json({ data })
    } else {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 })
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}