"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const NewsCard = ({ news }) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div className="max-w-4xl mx-auto border border-gray-200 rounded-md overflow-hidden bg-white mb-6">

            {/* Header */}
            <div className="flex items-center justify-between bg-gray-100 p-4">
                <div className="flex items-center gap-3">
                    <Image
                        src={news.author?.img}
                        alt="author image"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full"
                    />

                    <div>
                        <h4 className="font-bold text-gray-800 text-sm">
                            {news.author?.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                            {news.author?.published_date}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 text-gray-500 cursor-pointer">
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </div>

            {/* Content */}
            <div className="p-5">

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                    {news.title}
                </h2>

                {/* Thumbnail */}
                <div className="relative w-full h-[300px] mb-4">
                    <Link href={`/news/${news._id}`}>
                        <Image
                            src={news.thumbnail_url}
                            alt="News Thumbnail"
                            fill
                            className="object-cover rounded-sm"
                        />
                    </Link>
                </div>

                {/* 🔥 Line Clamp Description */}
                <p
                    className={`text-gray-600 text-sm leading-relaxed mb-3 transition-all duration-300 ${expanded ? "" : "line-clamp-3"
                        }`}
                >
                    {news.details}
                </p>

                {/* Read More Button */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-orange-500 font-semibold text-sm hover:underline"
                >
                    {expanded ? "Show Less" : "Read More"}
                </button>

                <hr className="my-5 border-gray-200" />

                {/* Footer */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex text-orange-400 gap-1">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <span className="text-gray-600 text-sm font-medium pt-1">
                            {news.rating.number}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500">
                        <FaEye />
                        <span className="text-sm font-medium">
                            {news.total_view}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsCard;