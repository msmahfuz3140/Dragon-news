"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { FaGoogle, FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const RightSidebar = () => {
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data)
    };
    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
        console.log(data)
    };

    return (
        <div className="w-full">

            <div className="bg-white rounded-2xl shadow-sm p-5">

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    Login With
                </h2>

                {/* Google Login */}
                <button 
                    className="w-full flex items-center justify-center gap-3 border rounded-xl py-2.5 mb-3 hover:bg-gray-100 transition"
                    onClick={handleGoogleSignIn}
                >
                    <FaGoogle className="text-red-500 text-lg" />
                    <span className="text-gray-700 font-medium">
                        Login with Google
                    </span>
                </button>

                {/* GitHub Login */}
                <button 
                    className="w-full flex items-center justify-center gap-3 border rounded-xl py-2.5 mb-3 hover:bg-gray-100 transition"
                    onClick={handleGithubSignIn}
                >
                    <FaGithub className="text-gray-800 text-lg" />
                    <span className="text-gray-700 font-medium">
                        Login with GitHub
                    </span>
                </button>

            </div>
            <div className="w-full">

                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 mt-5">

                    {/* Title */}
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        Find Us On
                    </h2>

                    {/* Facebook */}
                    <Link
                        href="#"
                        className="flex items-center gap-3 border-b border-gray-400 rounded-xl px-4 py-2 mb-3 hover:bg-blue-50 transition"
                    >
                        <FaFacebookF className="text-blue-600" />
                        <span className="text-gray-700 font-medium">Facebook</span>
                    </Link>

                    {/* Twitter */}
                    <Link
                        href="#"
                        className="flex items-center gap-3 border-b border-gray-400 rounded-xl px-4 py-2 mb-3 hover:bg-sky-50 transition"
                    >
                        <FaTwitter className="text-sky-500" />
                        <span className="text-gray-700 font-medium">Twitter</span>
                    </Link>

                    {/* LinkedIn */}
                    <Link
                        href="https://www.linkedin.com/in/msmahfuz3140"
                        className="flex items-center gap-3 border-b border-gray-400 rounded-xl px-4 py-2 hover:bg-blue-50 transition"
                    >
                        <FaLinkedinIn className="text-blue-700" />
                        <span className="text-gray-700 font-medium">LinkedIn</span>
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default RightSidebar;