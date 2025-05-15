'use client';

import { login } from '@/features/auth/authSlice';
import { useAppDispatch } from '@/hooks/useRedux';

export default function LoginPage() {
    const dispatch = useAppDispatch();
    return (
        <div className="p-4">
            <h1 className="text-xl">Login</h1>
            <button
                onClick={() => dispatch(login('testuser'))}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Login
            </button>
        </div>
    );
}
