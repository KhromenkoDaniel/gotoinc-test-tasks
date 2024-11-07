import { Metadata } from "next";

import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
    title: "Login",
    description: "Login page for the Next.js Posts App.",
};

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-gray-100">
            <LoginForm />
        </div>
    );
}
