
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set title
    document.title = "Vegulla Meher Preetham - Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100">
      <Navbar />
      <main className="md:pl-24 pt-16 md:pt-0 transition-all duration-300">
        <div className="container mx-auto px-4 max-w-6xl">
          <HomeSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
