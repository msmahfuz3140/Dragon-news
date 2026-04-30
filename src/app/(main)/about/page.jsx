export const metadata = {
  title: "Dragon News-about",
  description: "About our News Platform",
};

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-14">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-12">

       
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
          About Our News Platform
        </h1>

        <div className="w-24 h-[3px] bg-red-500 mx-auto my-6 rounded-full"></div>

       
        <p className="text-gray-600 text-sm md:text-lg leading-relaxed text-center">
          We are a modern digital news platform committed to delivering
          <span className="font-semibold text-gray-800"> fast, accurate, and unbiased journalism </span>
          to readers around the world. Our mission is to keep people informed
          with truth, clarity, and integrity in every story we publish.
        </p>

        <p className="mt-6 text-gray-600 text-sm md:text-lg leading-relaxed text-center">
          From breaking news to in-depth analysis, we cover a wide range of
          topics including <span className="font-medium">local news, global affairs, technology, business, politics, and lifestyle</span>.
          Our editorial team works 24/7 to ensure you never miss what matters.
        </p>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

          <div className="p-6 border rounded-2xl bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              To deliver truthful, transparent, and real-time news that empowers
              people to make informed decisions in their daily lives.
            </p>
          </div>

          <div className="p-6 border rounded-2xl bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Our Vision
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              To become a globally trusted digital news source known for
              credibility, innovation, and journalistic excellence.
            </p>
          </div>

        </div>
     
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-center">

          <div className="p-4 border rounded-xl bg-white shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800">24/7</h3>
            <p className="text-sm text-gray-500">News Coverage</p>
          </div>

          <div className="p-4 border rounded-xl bg-white shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800">100+</h3>
            <p className="text-sm text-gray-500">Daily Articles</p>
          </div>

          <div className="p-4 border rounded-xl bg-white shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800">50K+</h3>
            <p className="text-sm text-gray-500">Readers</p>
          </div>

          <div className="p-4 border rounded-xl bg-white shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800">Global</h3>
            <p className="text-sm text-gray-500">Reach</p>
          </div>

        </div>

     
        <div className="mt-14 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Our Core Values
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mt-6">

            {["Integrity", "Speed", "Accuracy", "Transparency", "Independence"].map(
              (item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
                >
                  {item}
                </span>
              )
            )}

          </div>
        </div>

      </div>

    </section>
  );
};

export default AboutPage;