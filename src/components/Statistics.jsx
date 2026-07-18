function Statistics() {
  const stats = [
    {
      icon: "🎓",
      number: "1000+",
      title: "Scholarships",
      description:
        "National and state scholarships from trusted government portals.",
    },
    {
      icon: "🏛",
      number: "500+",
      title: "Government Schemes",
      description:
        "Explore welfare schemes designed for students across India.",
    },
    {
      icon: "🤖",
      number: "95%",
      title: "AI Accuracy",
      description:
        "Google Gemini AI recommends scholarships based on your profile.",
    },
    {
      icon: "⚡",
      number: "24/7",
      title: "AI Assistant",
      description:
        "Get instant answers about eligibility, documents, and applications.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
          Our Impact
        </h2>

        <p className="text-center text-gray-600 mt-5 max-w-3xl mx-auto text-lg">
          ScholarAI helps students discover scholarships and government schemes
          faster using Artificial Intelligence, making higher education more
          accessible for everyone.
        </p>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >

              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-5xl font-extrabold text-blue-600">
                {item.number}
              </h3>

              <h4 className="text-2xl font-bold mt-5 text-gray-800">
                {item.title}
              </h4>

              <p className="text-gray-600 mt-4 leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;