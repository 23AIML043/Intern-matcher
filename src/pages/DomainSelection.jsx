import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DomainSelection() {
  const navigate = useNavigate();

  const [selectedDomains, setSelectedDomains] = useState([]);

  const domains = [
    "AI/ML",
    "Data Science",
    "Web Development",
    "App Development",
    "UI/UX",
    "Cybersecurity",
    "Cloud Computing",
    "DevOps",
  ];

  const handleDomainClick = (domain) => {
    if (selectedDomains.includes(domain)) {
      setSelectedDomains(selectedDomains.filter((d) => d !== domain));
    } else {
      setSelectedDomains([...selectedDomains, domain]);
    }
  };

  const handleContinue = () => {
    console.log(selectedDomains);
    navigate("/skills");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Choose Your Domains
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {domains.map((domain) => (
          <button
            key={domain}
            onClick={() => handleDomainClick(domain)}
            className={`p-4 rounded-xl border transition-all
            ${
              selectedDomains.includes(domain)
                ? "bg-blue-600 border-blue-600"
                : "bg-slate-800 border-slate-700"
            }`}
          >
            {domain}
          </button>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={handleContinue}
          className="bg-green-600 px-8 py-3 rounded-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default DomainSelection;
