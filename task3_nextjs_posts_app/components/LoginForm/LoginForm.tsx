"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { loginSchema } from "./schema";

type LoginSchema = z.infer<typeof loginSchema>;

const LoginForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
        if (data.username === "admin" && data.password === "1234") {
            document.cookie = "token=dummyToken; path=/";
            setErrorMessage("");
            window.location.href = "/dashboard";
        } else {
            setErrorMessage("Invalid username or password");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {errorMessage && <div className="text-red-500">{errorMessage}</div>}

                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <input
                                        type="text"
                                        placeholder="Enter your username"
                                        className="w-full p-2 border rounded-md"
                                        autoComplete="username"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="w-full p-2 border rounded-md"
                                        autoComplete="current-password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full mt-4">
                        Login
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default LoginForm;
