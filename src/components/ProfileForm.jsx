import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProfileForm() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    state: "",
    education: "",
    income: "",
    category: "",
    minority: "",
    disability: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Student Profile");
    console.log(formData);

    setLoading(true);

    setTimeout(() => {
      navigate("/recommendations", {
        state: formData,
      });
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">

        <h1 className="text-4xl font-bold text-center text-blue-700">
          Student Profile
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-10">
          Fill your details to receive AI scholarship recommendations.
        </p>

        <div className="mb-8">
          <Link
            to="/"
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg transition"
          >
            ← Back to Home
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block font-semibold mb-2">
                Age
              </label>

              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                className="w-full border rounded-lg p-3"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Gender
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

          </div>

          <div>
            <label className="block font-semibold mb-2">
              State
            </label>

            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter your state"
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Education
            </label>

            <select
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            >
              <option value="">Select Education</option>
              <option>PUC</option>
              <option>Diploma</option>
              <option>B.E</option>
              <option>B.Tech</option>
              <option>B.Sc</option>
              <option>M.E</option>
              <option>M.Tech</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Annual Family Income
            </label>

            <input
              type="number"
              name="income"
              value={formData.income}
              onChange={handleChange}
              placeholder="Enter annual income"
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            >
              <option value="">Select Category</option>
              <option>General</option>
              <option>OBC</option>
              <option>SC</option>
              <option>ST</option>
              <option>EWS</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block font-semibold mb-2">
                Minority
              </label>

              <select
                name="minority"
                value={formData.minority}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Disability
              </label>

              <select
                name="disability"
                value={formData.disability}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-lg font-semibold text-lg transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {loading
              ? "🤖 Finding Scholarships..."
              : "Find My Scholarships"}
          </button>

        </form>

      </div>
    </section>
  );
}

export default ProfileForm;