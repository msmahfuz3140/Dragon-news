import React from "react";

const CareerPage = () => {
  const jobs = [
    {
      id: 1,
      title: "Junior News Reporter",
      type: "Full Time",
      location: "Dhaka, Bangladesh",
      level: "Entry Level",
    },
    {
      id: 2,
      title: "Frontend Developer (Next.js)",
      type: "Remote",
      location: "Global",
      level: "Mid Level",
    },
    {
      id: 3,
      title: "Content Writer",
      type: "Part Time",
      location: "Remote",
      level: "Entry Level",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-14">

      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-14">

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Build Your Career With Us
          </h1>

          <div className="w-24 h-[3px] bg-red-500 mx-auto my-6 rounded-full"></div>

          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Join our fast-growing media platform where journalism meets technology.
            We are looking for passionate individuals who want to create impact
            through news, storytelling, and innovation.
          </p>

        </div>

        {/* Jobs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >

              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-800">
                {job.title}
              </h2>

              {/* Location */}
              <p className="text-gray-500 mt-2 text-sm">
                📍 {job.location}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-4">

                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                  {job.type}
                </span>

                <span className="text-xs bg-red-50 text-red-500 px-3 py-1 rounded-full">
                  {job.level}
                </span>

              </div>

              {/* Button */}
              <button className="mt-6 w-full bg-black text-white py-2.5 rounded-xl font-medium hover:bg-gray-800 transition">
                Apply Now
              </button>

            </div>
          ))}

        </div>

        {/* Footer CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-600 text-sm md:text-base">
            Dont see a role that fits? We are always open to talent.
          </p>

          <button className="mt-4 px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition">
            Send Your CV
          </button>
        </div>

      </div>

    </section>
  );
};

export default CareerPage;