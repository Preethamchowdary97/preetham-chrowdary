
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition <= sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { label: "Home", href: "#home", icon: "🏠" },
    { label: "About", href: "#about", icon: "👤" },
    { label: "Education", href: "#education", icon: "🎓" },
    { label: "Skills", href: "#skills", icon: "💻" },
    { label: "Projects", href: "#projects", icon: "📋" },
    { label: "Certifications", href: "#certifications", icon: "📜" },
    { label: "Contact", href: "#contact", icon: "📞" },
  ];

  return (
    <nav className="fixed top-1/2 -translate-y-1/2 left-4 z-50 glass-nav p-3">
      <ul className="flex flex-col gap-5">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={cn(
                "flex items-center gap-2 p-2 rounded-full transition-all duration-300",
                activeSection === link.href.substring(1)
                  ? "bg-primary text-white"
                  : "hover:bg-secondary"
              )}
              title={link.label}
            >
              <span className="text-lg">{link.icon}</span>
              <span className="hidden sm:inline-block text-sm font-medium">
                {link.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
