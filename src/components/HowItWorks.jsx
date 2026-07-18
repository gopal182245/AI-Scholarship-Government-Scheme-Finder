function HowItWorks() {
  const steps = [
    {
      step: "1",
      icon: "📝",
      title: "Create Your Profile",
      description:
        "Enter your education, state, annual income, category, minority status, and disability details.",
    },
    {
      step: "2",
      icon: "🤖",
      title: "AI Profile Analysis",
      description:
        "Google Gemini AI analyzes your profile and compares it with scholarship eligibility criteria.",
    },
    {
      step: "3",
      icon: "🎯",
      title: "Get Personalized Recommendations",
      description:
        "Receive scholarships and government schemes that best match your profile and eligibility.",
    },
    {
      step: "4",
      icon: "🚀",
      title: "Apply with Confidence",
      description:
        "View benefits, required documents, official websites, and application guidance before applying.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
          How It Works
        </h2>

        <p className="text-center text-gray-600 mt-5 max-w-3xl mx-auto text-lg">
          Finding scholarships has never been easier. Follow these four simple
          steps to receive AI-powered recommendations tailored to your profile.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              {/* Step Number */}
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-xl font-bold">
                {item.step}
              </div>

              {/* Icon */}
              <div className="text-5xl mt-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mt-6">
                {item.title}
              </h3>

              {/* Description */}
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

export default HowItWorks;