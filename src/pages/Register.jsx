import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    navigate("/domains");
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-8 rounded-xl w-96"
      >
        <h1 className="text-3xl font-bold text-white mb-6">Create Account</h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-slate-700 text-white"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-white"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default Register;
