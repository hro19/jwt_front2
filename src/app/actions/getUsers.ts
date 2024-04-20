import { app_path, handleFailed, handleSucceed } from './';
import { User } from '@/types/User';

export const getUsers = async () => {
  try {
    const response = await fetch(app_path('/api/users'), { cache: 'no-store' });
    const users: User[] = await handleSucceed(response);
    return users;
  } catch (error) {
    await handleFailed(error);
    throw error;
  }
};