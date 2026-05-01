"use client";

import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 🔥 Validation Schema
const loginSchema = z.object({
    email: z.string().email("Please enter your valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const handleLoginFun = (data) => {
        console.log("Login Data:", data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4">

            <div className="w-full max-w-md backdrop-blur-xl bg-white/80 shadow-2xl rounded-2xl p-8 border border-gray-100">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Welcome Back 👋
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Login to continue your journey
                    </p>
                </div>

                {/* FORM */}
                <form className="space-y-6" onSubmit={handleSubmit(handleLoginFun)}>

                    {/* EMAIL */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700">
                            Email Address
                        </label>

                        <div className="flex items-center mt-2 bg-gray-100 rounded-lg px-4">
                            <Mail size={18} className="text-gray-400" />

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 bg-transparent outline-none ml-2"
                                {...register("email")}
                            />
                        </div>

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* PASSWORD */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700">
                            Password
                        </label>

                        <div className="flex items-center mt-2 bg-gray-100 rounded-lg px-4">
                            <Lock size={18} className="text-gray-400" />

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full p-3 bg-transparent outline-none ml-2"
                                {...register("password")}
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-sm text-gray-500"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2 text-gray-600">
                            <input type="checkbox" className="accent-gray-800" />
                            Remember me
                        </label>

                        <Link
                            href="/forgot-password"
                            className="text-gray-700 hover:underline"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* BUTTON */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 rounded-lg bg-gray-900 text-white font-semibold text-lg hover:bg-black transition disabled:opacity-60"
                    >
                        {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                </form>

                {/* DIVIDER */}
                <div className="flex items-center gap-4 my-6">
                    <hr className="flex-1 border-gray-200" />
                    <span className="text-gray-400 text-sm">OR</span>
                    <hr className="flex-1 border-gray-200" />
                </div>

                {/* GOOGLE LOGIN */}
                <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
                    <FcGoogle size={22} />
                    Continue with Google
                </button>

                {/* FOOTER */}
                <p className="text-center text-gray-600 mt-6">
                    Don’t have an account?{" "}
                    <Link
                        href="/register"
                        className="text-black font-semibold hover:underline"
                    >
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default LoginPage;