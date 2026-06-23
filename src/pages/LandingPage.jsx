import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-6xl font-bold mb-6">
          Find Your Perfect Internship
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mb-8">
          Get personalized internship and job recommendations based on your
          skills, interests, and career goals.
        </p>

        <button
          onClick={() => navigate("/register")}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg"
        >
          Get Started
        </button>
      </section>
    </div>
  );
}

export default LandingPage;
