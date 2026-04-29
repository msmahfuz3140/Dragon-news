export const getCategories = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/news/categories",
        { cache: "no-store" }
    );

    const data = await res.json();
    return data.data.news_category;
};

export const getNewsByCategoryId = async (categoryId) => {
    const res = await fetch(
        `https://openapi.programming-hero.com/api/news/category/${categoryId}`,
        { cache: "no-store" }
    );

    const data = await res.json();
    return data.data;
};