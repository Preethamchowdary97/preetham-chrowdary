
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageSrc?: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Bus Reservation System",
      description: "Developed bus reservation system with Python Django and PostgreSQL.",
      technologies: ["Python", "Django", "PostgreSQL"],
    },
    {
      title: "Online Voting System",
      description: "Led development of online voting system using MERN stack: React, MongoDB, Node.js, Express.js",
      technologies: ["React", "MongoDB", "Node.js", "Express.js"],
    },
    {
      title: "Online Job Portal",
      description: "Enable Users to Find and Hire the Right Professionals: A Complete Platform for Simplified Service Hiring",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section
      id="projects"
      className="section py-20 bg-gradient-to-b from-sky-100 to-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
          <span className="border-b-4 border-sky-400 pb-2">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="shadow-lg animate-slide-in bg-white/80 flex flex-col h-full overflow-hidden card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-40 bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center">
                <span className="text-4xl text-white">💻</span>
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-sky-700">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm bg-sky-100 text-sky-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full rounded-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
