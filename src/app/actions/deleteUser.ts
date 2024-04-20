'use server'

import { revalidatePath } from 'next/cache'

export const deleteUser = async (userId: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASIC_URL}/users/${userId}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Failed to delete user')
  }

  revalidatePath('/users') // ユーザー一覧ページを再検証
}