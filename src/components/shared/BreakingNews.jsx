import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const breakingNewsData = [
    {
      id: 1,
      text: "Bangladesh launches new digital education initiative for rural students.",
      type: "local",
    },
    {
      id: 2,
      text: "Global tech markets show strong recovery after recent slowdown.",
      type: "global",
    },
    {
      id: 3,
      text: "AI adoption in software industry increases by 40% this year.",
      type: "technology",
    },
    {
      id: 4,
      text: "New cybersecurity laws introduced to protect user data worldwide.",
      type: "security",
    },
    {
      id: 5,
      text: "Startup ecosystem in Asia sees record investment growth in 2026.",
      type: "business",
    },
  ];

  return (
    <section className="w-full px-3 sm:px-4 mb-8">
      
      <div className="w-[97%] md:w-[90%] mx-auto flex flex-col md:flex-row items-stretch bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl shadow-lg overflow-hidden">

        {/* Badge */}
        <div className="flex items-center justify-center gap-2 bg-red-600 px-5 py-3 md:py-0 font-semibold text-sm md:text-base whitespace-nowrap rounded-t-2xl md:rounded-none md:rounded-l-2xl">

          {/* Live Pulse */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>

          Breaking
        </div>

        {/* Marquee */}
        <div className="flex-1 flex items-center overflow-hidden px-2 md:px-4 py-2">

          <Marquee speed={60} pauseOnHover gradient={false}>
            {breakingNewsData.map((news) => (
              <span
                key={news.id}
                className="mx-8 text-sm md:text-base font-medium text-gray-100 flex items-center gap-2"
              >
                <span className="text-red-400 font-semibold uppercase text-xs">
                  {news.type}
                </span>
                {news.text}
              </span>
            ))}
          </Marquee>

        </div>

      </div>
    </section>
  );
};

export default BreakingNews;