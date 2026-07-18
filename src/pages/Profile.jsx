import ProfileForm from "../components/ProfileForm";

function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center bg-blue-100 text-blue-700 font-semibold px-5 py-2 rounded-full mb-6">
            🤖 Powered by Google Gemini AI
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Student Profile
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Complete your student profile to receive personalized AI-powered
            scholarship and government scheme recommendations based on your
            education, income, category, state, minority status, and eligibility.
          </p>

        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">

          <div className="flex items-center gap-4 mb-8">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">
              🎓
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Student Information
              </h2>

              <p className="text-gray-500 mt-2">
                Fill in all the required details to receive accurate AI recommendations.
              </p>
            </div>

          </div>

          <ProfileForm />

        </div>

        {/* Bottom Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-4xl">🔒</div>

            <h3 className="text-xl font-bold mt-4">
              Secure
            </h3>

            <p className="text-gray-600 mt-3">
              Your information is used only to generate scholarship recommendations.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-4xl">⚡</div>

            <h3 className="text-xl font-bold mt-4">
              Instant AI Analysis
            </h3>

            <p className="text-gray-600 mt-3">
              Google Gemini AI analyzes your profile within seconds.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-4xl">🎯</div>

            <h3 className="text-xl font-bold mt-4">
              Personalized Results
            </h3>

            <p className="text-gray-600 mt-3">
              Receive scholarships and government schemes that match your eligibility.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;