import { FaRegNewspaper } from "react-icons/fa";

const NoNewsCard = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-10 text-center">

            <div className="flex justify-center mb-4 text-orange-500 text-5xl">
                <FaRegNewspaper />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                No News Found
            </h2>

            <p className="text-gray-500 mb-6">
                No news available in this category right now.
                <br />
                Please try another category.
            </p>

            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                Browse Categories
            </button>

        </div>
    );
};

export default NoNewsCard;