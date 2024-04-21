import { handleFailed, handleSucceed, app_path } from "./";
import { User } from "@/types/User";
import { Task } from "@/types/Task";

export async function getSingleUser(id: string): Promise<{ user: User, userTasks:Task[] }> {
  return fetch(app_path(`/api/users/${id}`))
    .then(handleSucceed)
    .catch(handleFailed);
}