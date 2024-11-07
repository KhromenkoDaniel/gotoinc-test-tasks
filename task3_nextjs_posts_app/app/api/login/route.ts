import { NextResponse } from 'next/server';

import { loginSchema } from './schema';
import { VALID_CREDENTIALS } from './credentials';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const result = loginSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
        }

        const { username, password } = result.data;

        if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
            const response = NextResponse.json({ message: "Login successful" });
            response.cookies.set("token", "dummyToken", { httpOnly: true, maxAge: 60 * 1200 });
            return response;
        } else {
            return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
        }

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
