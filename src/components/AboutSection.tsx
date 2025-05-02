
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const contactInfo = [
    { label: "Phone", value: "+91 8328646565" },
    { label: "Email", value: "2200030481cseh@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/vegulla-meherpreetham-0a0857287/" },
    { label: "Location", value: "Mandapeta, Andhra Pradesh" },
    { label: "Date of Birth", value: "10-06-2005" },
  ];

  return (
    <section
      id="about"
      className="section py-20 bg-gradient-to-b from-blue-100 to-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
          <span className="border-b-4 border-sky-400 pb-2">About Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold mb-4 text-sky-700">Career Objective</h3>
            <Card className="shadow-lg bg-white/70 card-hover">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  A dedicated computer science and engineering student with a strong
                  academic record and a keen interest in software development is committed
                  to applying skills in innovative environments.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Enthusiasm is shown through academic achievements and a proactive
                  approach to learning and implementing new technologies. Eager to
                  contribute to projects that align with a passion for software development
                  and engineering excellence.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-slide-in [animation-delay:200ms]">
            <h3 className="text-2xl font-semibold mb-4 text-sky-700">Contact Information</h3>
            <Card className="shadow-lg bg-white/70 card-hover">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <li key={index} className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <span className="font-medium text-gray-900 sm:w-24">{info.label}:</span>
                      <span className="text-gray-700">{info.value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
