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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);

    setTimeout(() => {
      navigate("/recommendations", {
        state: formData,
      });
    }, 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-5 sm:p-8 md:p-10">

      <div className="text-center mb-8">

        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
          Student Profile
        </h2>

        <p className="text-gray-500 mt-3">
          Fill your details to receive AI scholarship recommendations.
        </p>

      </div>

      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-3 rounded-lg transition"
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
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block font-semibold mb-2">
              Minority
            </label>

            <select
              name="minority"
              value={formData.minority}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className={`w-full rounded-xl py-4 text-lg font-semibold transition ${
            loading
              ? "bg-gray-500 text-white cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {loading
            ? "🤖 Finding Scholarships..."
            : "🎓 Find My Scholarships"}
        </button>

      </form>

    </div>
  );
}

export default ProfileForm;