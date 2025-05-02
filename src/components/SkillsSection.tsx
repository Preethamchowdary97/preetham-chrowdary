
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: "language" | "framework" | "database" | "other";
}

const SkillsSection = () => {
  const [skills] = useState<Skill[]>([
    { name: "C Language", level: 85, category: "language" },
    { name: "Java", level: 80, category: "language" },
    { name: "Python", level: 90, category: "language" },
    { name: "HTML/CSS", level: 85, category: "framework" },
    { name: "DBMS", level: 75, category: "database" },
    { name: "React.js", level: 80, category: "framework" },
  ]);

  const categories = [
    { id: "language", name: "Languages" },
    { id: "framework", name: "Frameworks & Libraries" },
    { id: "database", name: "Databases" },
    { id: "other", name: "Other Skills" },
  ];

  return (
    <section
      id="skills"
      className="section py-20 bg-gradient-to-b from-blue-50 to-sky-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
          <span className="border-b-4 border-sky-400 pb-2">Technical Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((category) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category.id
            );
            
            if (categorySkills.length === 0) return null;
            
            return (
              <Card 
                key={category.id} 
                className="shadow-lg animate-slide-in bg-white/80 card-hover"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-sky-700">
                    {category.name}
                  </h3>
                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-gray-500">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center text-sky-700">
            Internships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg animate-slide-in bg-white/80 card-hover">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">
                  AICTE AWS Cloud Virtual Internship
                </h4>
                <p className="text-gray-700">
                  Gained hands-on experience with AWS cloud services and solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg animate-slide-in bg-white/80 card-hover">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">
                  Social Internship Project - Agriculture and Irrigation
                </h4>
                <p className="text-gray-700">
                  Worked on technology solutions for agricultural improvements and irrigation systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
