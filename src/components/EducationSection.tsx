
import { Card, CardContent } from "@/components/ui/card";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  score: string;
  maxScore: string;
}

const EducationSection = () => {
  const educationItems: EducationItem[] = [
    {
      degree: "Computer Science and Engineering",
      institution: "KL University",
      period: "2022 - 2026",
      location: "Vijayawada, Andhra Pradesh",
      score: "9.32",
      maxScore: "10",
    },
    {
      degree: "Intermediate School of Education",
      institution: "Aditya Junior College",
      period: "2020 - 2022",
      location: "Mandapeta, Andhra Pradesh",
      score: "576",
      maxScore: "1000",
    },
    {
      degree: "Secondary Education",
      institution: "Sri Chaitanya Educational Institutions",
      period: "2020",
      location: "Mandapeta, Andhra Pradesh",
      score: "10",
      maxScore: "10",
    },
  ];

  return (
    <section
      id="education"
      className="section py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
          <span className="border-b-4 border-sky-400 pb-2">Education</span>
        </h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {educationItems.map((item, index) => (
            <Card
              key={index}
              className="shadow-lg animate-slide-in bg-white/80 overflow-hidden card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-2/3 p-6">
                    <h3 className="text-xl font-semibold text-sky-700">
                      {item.degree}
                    </h3>
                    <h4 className="text-lg font-medium text-gray-800 mt-1">
                      {item.institution}
                    </h4>
                    <div className="text-gray-600 mt-2">
                      <p>{item.period}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 bg-sky-100 p-6 flex flex-col justify-center">
                    <div className="text-center">
                      <p className="text-gray-700 font-medium">Score</p>
                      <div className="flex items-center justify-center mt-2">
                        <span className="text-3xl font-bold text-sky-700">
                          {item.score}
                        </span>
                        <span className="text-gray-600 ml-1">
                          /{item.maxScore}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
