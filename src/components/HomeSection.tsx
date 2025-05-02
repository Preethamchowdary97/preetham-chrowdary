
import { Button } from "@/components/ui/button";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="section flex items-center min-h-screen bg-gradient-to-b from-sky-50 to-blue-100 pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-blue-500">
                VEGULLA MEHER PREETHAM
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-sky-700 mb-6">
              Software Developer
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              A dedicated computer science and engineering student with a strong
              academic record and a keen interest in software development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="rounded-full font-medium px-6"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                className="rounded-full font-medium px-6"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center animate-fade-in">
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative rounded-full overflow-hidden bg-sky-200 border-4 border-sky-300 shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                MP
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
