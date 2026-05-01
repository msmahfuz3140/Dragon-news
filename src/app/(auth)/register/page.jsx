"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Lock, Image, Check } from "lucide-react";

const passwordRules = {
    length: (v) => v.length >= 8,
    upper: (v) => /[A-Z]/.test(v),
    number: (v) => /\d/.test(v),
    symbol: (v) => /[@$!%*?&]/.test(v),
};

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const password = watch("password", "");
    const confirmPassword = watch("confirmPassword", "");

    const handleRegister = (data) => {
        console.log("Register Data:", data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-10">

            <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-gray-100">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Create Account 🚀
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Join us and start your journey
                    </p>
                </div>

                {/* FORM */}
                <form className="space-y-5" onSubmit={handleSubmit(handleRegister)}>

                    {/* NAME */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Name</label>

                        <div className="flex items-center mt-2 bg-gray-100 rounded-lg px-4">
                            <User size={18} className="text-gray-400" />
                            <input
                                {...register("name", { required: "Name is required" })}
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-3 bg-transparent outline-none ml-2"
                            />
                        </div>

                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Email</label>

                        <div className="flex items-center mt-2 bg-gray-100 rounded-lg px-4">
                            <Mail size={18} className="text-gray-400" />
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                })}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 bg-transparent outline-none ml-2"
                            />
                        </div>

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* PHOTO */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700">
                            Photo URL (Optional)
                        </label>

                        <div className="flex items-center mt-2 bg-gray-100 rounded-lg px-4">
                            <Image size={18} className="text-gray-400" />
                            <input
                                {...register("photo")}
                                type="text"
                                placeholder="Paste photo URL"
                                className="w-full p-3 bg-transparent outline-none ml-2"
                            />
                        </div>
                    </div>

                    {/* PASSWORD */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700">
                            Password
                        </label>

                        <div className="flex items-center mt-2 bg-gray-100 rounded-lg px-4">
                            <Lock size={18} className="text-gray-400" />

                            <input
                                {...register("password", {
                                    required: "Password is required",
                                })}
                                type={showPassword ? "text" : "password"}
                                placeholder="Create password"
                                className="w-full p-3 bg-transparent outline-none ml-2"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-sm text-gray-500"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        {/* LIVE RULES */}
                        <div className="mt-3 space-y-1 text-sm">
                            <p className="flex items-center gap-2">
                                <Check size={14} className={passwordRules.length(password) ? "text-green-500" : "text-gray-300"} />
                                At least 8 characters
                            </p>
                            <p className="flex items-center gap-2">
                                <Check size={14} className={passwordRules.upper(password) ? "text-green-500" : "text-gray-300"} />
                                One uppercase letter
                            </p>
                            <p className="flex items-center gap-2">
                                <Check size={14} className={passwordRules.number(password) ? "text-green-500" : "text-gray-300"} />
                                One number
                            </p>
                            <p className="flex items-center gap-2">
                                <Check size={14} className={passwordRules.symbol(password) ? "text-green-500" : "text-gray-300"} />
                                One symbol
                            </p>
                        </div>

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* CONFIRM PASSWORD */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700">
                            Confirm Password
                        </label>

                        <div className="flex items-center mt-2 bg-gray-100 rounded-lg px-4">
                            <Lock size={18} className="text-gray-400" />

                            <input
                                {...register("confirmPassword", {
                                    required: "Confirm password is required",
                                })}
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm password"
                                className="w-full p-3 bg-transparent outline-none ml-2"
                            />

                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="text-sm text-gray-500"
                            >
                                {showConfirmPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        {watch("confirmPassword") &&
                            watch("password") !== watch("confirmPassword") && (
                                <p className="text-red-500 text-sm mt-1">
                                    Passwords do not match
                                </p>
                            )}

                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-gray-900 text-white font-semibold text-lg hover:bg-black transition"
                    >
                        Create Account
                    </button>
                </form>

                {/* FOOTER */}
                <p className="text-center text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link href="/login" className="font-semibold text-black hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;