import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="p-8 flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard!</h1>
                <p className="mb-6">Only authenticated users can access this page.</p>
                <Link href="/">
                    <Button variant="default">Return to Home</Button>
                </Link>
            </div>
        </div>
    );
}
