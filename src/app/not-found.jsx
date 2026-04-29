import Link from "next/link";

const NotFound = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">

            <div className="text-center max-w-xl">

                {/* 404 Number */}
                <h1 className="text-7xl md:text-9xl font-extrabold text-gray-900">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-3 text-gray-500 text-sm md:text-base">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition"
                    >
                        Go Home
                    </Link>

                    <Link
                        href="/news"
                        className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
                    >
                        Browse News
                    </Link>

                </div>

            </div>
        </section>
    );
};

export default NotFound;