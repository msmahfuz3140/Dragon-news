import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';



const NewsCategoryDetailsPage = async ({ params }) => {

    const { id } = await params;

    const categories = await getCategories();
    const news = await getNewsByCategoryId(id);

    return (
        <div className="w-full px-4 py-6 my-10">

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* LEFT */}
                <div className="col-span-12 md:col-span-3">
                    <LeftSidebar categories={categories} activeCategory={id} />
                </div>

                {/* MIDDLE */}
                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">News By Category</h2>
                    {news.length > 0 ? (
                        news.map((article) => (
                            <div key={article._id} className="bg-white rounded-2xl shadow-sm p-5 mb-5">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
                                <p className="text-gray-600">{article.details}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No news available in this category.</p>
                    )}
                </div>

                {/* RIGHT */}
                <div className="col-span-12 md:col-span-3">
                    <RightSidebar />
                </div>

            </div>

        </div>
    );
};

export default NewsCategoryDetailsPage;