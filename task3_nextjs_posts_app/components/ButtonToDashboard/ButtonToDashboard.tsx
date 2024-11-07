'use client';

import { Button } from "@/components/ui/button";
import {ButtonToDashboardProps} from "@/types/button";

const ButtonToDashboard = ({ className }: ButtonToDashboardProps) => {
    const checkTokenAndRedirect = () => {
        const token = document.cookie
            .split("; ")
            .find((row) => row.startsWith("token="))
            ?.split("=")[1];

        if (token) {
            window.location.href = "/dashboard";
        } else {
            window.location.href = "/login";
        }
    };

    return (
        <Button onClick={checkTokenAndRedirect} className={className}>
            Go to Dashboard
        </Button>
    );
}

export default ButtonToDashboard;
