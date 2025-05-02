
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="section flex items-center justify-center min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 pt-16"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-blue-500">
              VEGULLA MEHER PREETHAM
            </span>
          </motion.h1>
          <motion.h2 
            className="text-2xl sm:text-3xl font-medium text-sky-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Software Developer
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 mb-8 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            A dedicated computer science and engineering student with a strong
            academic record and a keen interest in software development.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button
              className="rounded-full font-medium px-6 hover:scale-105 transition-transform duration-300"
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
              className="rounded-full font-medium px-6 hover:scale-105 transition-transform duration-300"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
