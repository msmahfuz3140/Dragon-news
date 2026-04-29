import CategoryDropdown from '@/components/category/CategoryDropdown';
import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeCategory }) => {
    return (
        <div>
            <h2 className="font-semibold text-xl text-gray-800 mb-3">
                All Categories
            </h2>
            <div className="bg-white rounded-2xl p-4 shadow-sm">


                {/* Mobile */}
                <div className="md:hidden">
                    <CategoryDropdown categories={categories} />
                </div>

                <div className="hidden md:block space-y-2 mt-2">
                    {categories.map((item) => {
                        const isActive =
                            activeCategory == String(item.category_id);

                        return (
                            <Link
                                key={item.category_id}
                                href={`/category/${item.category_id}`}
                                className={`block px-3 py-2 rounded-lg transition ${isActive
                                    ? "bg-gray-700 text-white"
                                    : "text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                {item.category_name}
                            </Link>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default LeftSidebar;