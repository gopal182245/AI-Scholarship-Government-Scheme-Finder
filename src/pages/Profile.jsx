import ProfileForm from "../components/ProfileForm";

function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

        <div className="text-center mb-10">

          <div className="inline-flex items-center bg-blue-100 text-blue-700 font-semibold px-5 py-2 rounded-full mb-5">
            🤖 Powered by Google Gemini AI
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
            Student Profile
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Complete your student profile to receive personalized AI-powered
            scholarship and government scheme recommendations.
          </p>

        </div>

        <ProfileForm />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

            <div className="text-4xl">
              🔒
            </div>

            <h3 className="text-xl font-bold mt-4">
              Secure
            </h3>

            <p className="text-gray-600 mt-3">
              Your information is used only to generate scholarship recommendations.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

            <div className="text-4xl">
              ⚡
            </div>

            <h3 className="text-xl font-bold mt-4">
              Instant AI Analysis
            </h3>

            <p className="text-gray-600 mt-3">
              Google Gemini AI analyzes your profile within seconds.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

            <div className="text-4xl">
              🎯
            </div>

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