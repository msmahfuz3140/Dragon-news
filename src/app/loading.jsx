const LoadingPage = () => {
    return (
        <div className="w-full px-4 py-6 my-10 animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* LEFT */}
                <div className="col-span-12 md:col-span-3 space-y-3">
                    <div className="h-6 bg-gray-200 rounded w-2/3" />
                    {[...Array(7)].map((_, i) => (
                        <div key={i} className="h-9 bg-gray-200 rounded-lg" />
                    ))}
                </div>

                {/* MIDDLE */}
                <div className="col-span-12 md:col-span-6 space-y-6">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="bg-white p-5 rounded-2xl border space-y-4">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                                <div className="space-y-2">
                                    <div className="h-3 w-32 bg-gray-200 rounded" />
                                    <div className="h-3 w-20 bg-gray-200 rounded" />
                                </div>
                            </div>

                            <div className="h-6 bg-gray-200 rounded" />

                            <div className="h-[260px] bg-gray-200 rounded-lg" />

                            <div className="space-y-2">
                                <div className="h-3 bg-gray-200 rounded" />
                                <div className="h-3 bg-gray-200 rounded" />
                                <div className="h-3 w-4/5 bg-gray-200 rounded" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT */}
                <div className="col-span-12 md:col-span-3 space-y-4">
                    <div className="h-10 bg-gray-200 rounded" />
                    <div className="h-10 bg-gray-200 rounded" />
                    <div className="h-32 bg-gray-200 rounded" />
                </div>

            </div>
        </div>
    );
};

export default LoadingPage;