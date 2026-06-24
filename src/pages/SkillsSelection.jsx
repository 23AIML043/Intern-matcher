import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SkillsSelection() {
    const navigate = useNavigate();
    const [selectedSkills, setSelectedSkills] = useState([]);

    const skills = [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "React",
      "Node.js",
      "Flutter",
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "Figma",
      "TensorFlow",
      "AWS",
      "Docker",
    ];
    const handleSkillClick = (skill) =>{
        if(selectedSkills.includes(skill)){
            setSelectedSkills(selectedSkills.filter((s) => s!== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };
    const handleContinue = () =>{
        console.log(selectedSkills);
        navigate("/dashboard");
    };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
        <h1 className="text-4xl font-bold text-center mb-8">
            Choose Your Skills
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {skills.map((skill)=>(
                <button 
                key={skill}
                onClick={() => handleSkillClick(skill)}
                className={`p-4 rounded-xl border transition-all
                ${
                  selectedSkills.includes(skill)
                    ? "bg-blue-600 border-blue-600"
                    : "bg-slate-800 border-slate-700"
                }`}
             >
                {skill}
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

export default SkillsSelection;
