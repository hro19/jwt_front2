'use server'

import { handleFailed, handleSucceed, path } from "./";
import { revalidatePath } from 'next/cache'

export const deleteUser = async (userId: string) => {

    try {
        const response = await fetch(path(`/users/${userId}`), {
            method: 'DELETE',
        })

        handleSucceed(response)
        revalidatePath('/users') // ユーザー一覧ページを再検証
    } catch (error) {
        handleFailed(error)
    }
}