function StatsCards({ recommendations }) {
  const text = recommendations || "";

  // Count only scholarship titles (H1 headings)
  const scholarshipCount = text
    .split("\n")
    .filter((line) => line.startsWith("# ")).length;

  // Count official website links
  const websites = text
    .split("\n")
    .filter((line) => line.startsWith("http")).length;

  // AI Match Score
  const matchScore = Math.min(
    100,
    75 + scholarshipCount * 4 + websites
  );

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8 mb-10">

      <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
        <div className="text-5xl">🎯</div>

        <h3 className="text-gray-500 mt-3 font-semibold">
          AI Match Score
        </h3>

        <p className="text-4xl font-bold text-green-600 mt-3">
          {matchScore}%
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
        <div className="text-5xl">🎓</div>

        <h3 className="text-gray-500 mt-3 font-semibold">
          Scholarships Found
        </h3>

        <p className="text-4xl font-bold text-blue-600 mt-3">
          {scholarshipCount}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
        <div className="text-5xl">🌐</div>

        <h3 className="text-gray-500 mt-3 font-semibold">
          Official Websites
        </h3>

        <p className="text-4xl font-bold text-purple-600 mt-3">
          {websites}
        </p>
      </div>

    </div>
  );
}

export default StatsCards;