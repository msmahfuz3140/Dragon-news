import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id);

    return {
        title: `${news.title}`,
        description: news.details.substring(0, 160),
    };
};

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params
    const news = await getNewsDetailsById(id)

    return (
        <div className="mt-10 max-w-4xl mx-auto border border-gray-200 rounded-lg p-5 bg-white shadow-sm">

            {/* ১. মেইন নিউজ ইমেজ */}
            <div className="relative w-full h-[250px] md:h-[450px] mb-6">
                <Image
                    src={news.image_url}
                    alt="News Thumbnail"
                    fill
                    className="object-cover rounded-md"
                    priority
                />
            </div>

            {/* ২. নিউজ টাইটেল */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#403F3F] leading-tight mb-4">
                {news.title}
            </h2>

            {/* ৩. নিউজ ডেসক্রিপশন */}
            <div className="text-[#706F6F] text-sm md:text-base leading-relaxed space-y-4 mb-8">
                <p>
                    {news.details}
                </p>
                <p>
                    {news.author?.published_date}
                </p>
             
            </div>

            {/* ৪. ব্যাক বাটন (All news in this category) */}
            <Link href={`/category/${news.category_id}`}>
                <button className="flex items-center gap-2 bg-[#D72050] hover:bg-[#b01a41] text-white px-6 py-3 font-semibold rounded-none transition-colors">
                    <FaArrowLeft /> All news in this category
                </button>
            </Link>

        </div>
    );
};

export default NewsDetailsPage;