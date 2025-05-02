
import { Card, CardContent } from "@/components/ui/card";

interface Certification {
  name: string;
  issuer?: string;
  date?: string;
  icon: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      name: "AWS Certified Cloud Practitioner CLF-C02",
      issuer: "Amazon Web Services",
      icon: "☁️",
    },
    {
      name: "RedHat Certified Enterprise Application Developer Exam (EX183)",
      issuer: "Red Hat",
      icon: "🎯",
    },
    {
      name: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      icon: "🤖",
    },
    {
      name: "Oracle Cloud Infrastructure Generative AI",
      issuer: "Oracle",
      icon: "🧠",
    },
    {
      name: "Cambridge English: Business Certificate (BEC)",
      issuer: "Cambridge University",
      icon: "🔤",
    },
  ];

  return (
    <section
      id="certifications"
      className="section py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
          <span className="border-b-4 border-sky-400 pb-2">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="shadow-lg animate-slide-in bg-white/80 overflow-hidden card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex items-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-sky-100 text-2xl">
                    {cert.icon}
                  </div>
                  <div className="p-4 flex-grow">
                    <h3 className="text-lg font-semibold text-sky-700">
                      {cert.name}
                    </h3>
                    {cert.issuer && (
                      <p className="text-sm text-gray-600 mt-1">
                        Issued by: {cert.issuer}
                      </p>
                    )}
                    {cert.date && (
                      <p className="text-sm text-gray-500 mt-1">{cert.date}</p>
                    )}
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

export default CertificationsSection;
