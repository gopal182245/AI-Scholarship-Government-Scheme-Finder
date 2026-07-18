function StudentProfileCard({ student }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">

      <div className="flex items-center gap-3 mb-8">
        <div className="text-4xl">👨‍🎓</div>

        <div>
          <h2 className="text-3xl font-bold text-blue-700">
            Student Profile
          </h2>

          <p className="text-gray-500">
            Student information used for AI recommendations
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-blue-50 rounded-xl p-5">
          <p className="text-sm text-gray-500">Full Name</p>
          <h3 className="text-xl font-semibold mt-1">
            👤 {student.fullName}
          </h3>
        </div>

        <div className="bg-blue-50 rounded-xl p-5">
          <p className="text-sm text-gray-500">Age</p>
          <h3 className="text-xl font-semibold mt-1">
            🎂 {student.age}
          </h3>
        </div>

        <div className="bg-blue-50 rounded-xl p-5">
          <p className="text-sm text-gray-500">Gender</p>
          <h3 className="text-xl font-semibold mt-1">
            🚻 {student.gender}
          </h3>
        </div>

        <div className="bg-blue-50 rounded-xl p-5">
          <p className="text-sm text-gray-500">State</p>
          <h3 className="text-xl font-semibold mt-1">
            📍 {student.state}
          </h3>
        </div>

        <div className="bg-blue-50 rounded-xl p-5">
          <p className="text-sm text-gray-500">Education</p>
          <h3 className="text-xl font-semibold mt-1">
            🎓 {student.education}
          </h3>
        </div>

        <div className="bg-blue-50 rounded-xl p-5">
          <p className="text-sm text-gray-500">Annual Income</p>
          <h3 className="text-xl font-semibold mt-1 text-green-600">
            💰 ₹{student.income}
          </h3>
        </div>

        <div className="bg-blue-50 rounded-xl p-5">
          <p className="text-sm text-gray-500">Category</p>
          <h3 className="text-xl font-semibold mt-1">
            🏷 {student.category}
          </h3>
        </div>

        <div className="bg-blue-50 rounded-xl p-5">
          <p className="text-sm text-gray-500">Minority</p>
          <h3 className="text-xl font-semibold mt-1">
            🌍 {student.minority}
          </h3>
        </div>

        <div className="bg-blue-50 rounded-xl p-5 md:col-span-2">
          <p className="text-sm text-gray-500">Disability</p>
          <h3 className="text-xl font-semibold mt-1">
            ♿ {student.disability}
          </h3>
        </div>

      </div>
    </div>
  );
}

export default StudentProfileCard;