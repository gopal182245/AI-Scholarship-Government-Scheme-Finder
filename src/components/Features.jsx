function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Recommendations",
      description:
        "Receive personalized scholarship and government scheme recommendations generated using Google Gemini AI.",
    },
    {
      icon: "✅",
      title: "Smart Eligibility Checker",
      description:
        "Instantly know whether you qualify for a scholarship with clear eligibility explanations.",
    },
    {
      icon: "📄",
      title: "Document Checklist",
      description:
        "View all the required documents before applying to avoid missing important information.",
    },
    {
      icon: "💬",
      title: "24/7 AI Chat Assistant",
      description:
        "Ask questions about scholarships, benefits, eligibility, documents, and application procedures anytime.",
    },
    {
      icon: "🎓",
      title: "Scholarship Finder",
      description:
        "Find scholarships that match your education, state, income, category, and academic background.",
    },
    {
      icon: "🏛",
      title: "Government Scheme Finder",
      description:
        "Explore central and state government welfare schemes with AI-powered guidance and official resources.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
          Why Choose ScholarAI?
        </h2>

        <p className="text-center text-gray-600 mt-5 max-w-3xl mx-auto text-lg">
          ScholarAI combines Artificial Intelligence with trusted government
          information to help students discover scholarships and welfare
          schemes faster, easier, and more accurately.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;