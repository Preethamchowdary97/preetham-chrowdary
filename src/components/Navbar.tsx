
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  Home,
  User,
  Briefcase,
  Book,
  Award,
  Mail,
  Menu
} from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { label: "Home", href: "#home", icon: <Home size={20} /> },
    { label: "About", href: "#about", icon: <User size={20} /> },
    { label: "Education", href: "#education", icon: <Book size={20} /> },
    { label: "Skills", href: "#skills", icon: <Briefcase size={20} /> },
    { label: "Projects", href: "#projects", icon: <Briefcase size={20} /> },
    { label: "Certifications", href: "#certifications", icon: <Award size={20} /> },
    { label: "Contact", href: "#contact", icon: <Mail size={20} /> },
  ];

  // Desktop navbar
  const desktopNav = (
    <nav 
      className="fixed top-1/2 -translate-y-1/2 left-4 z-50 glass-nav p-2 transition-all duration-300 hidden md:block"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <ul className="flex flex-col gap-5">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={cn(
                "flex items-center gap-2 p-2 rounded-full transition-all duration-300 whitespace-nowrap",
                activeSection === link.href.substring(1)
                  ? "bg-primary text-white"
                  : "hover:bg-secondary"
              )}
              title={link.label}
            >
              <span className="text-lg flex items-center justify-center">{link.icon}</span>
              <span className={cn(
                "text-sm font-medium transition-all duration-300 overflow-hidden",
                isExpanded ? "opacity-100 max-w-24" : "opacity-0 max-w-0"
              )}>
                {link.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  // Mobile navbar
  const mobileNav = (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav p-2 md:hidden">
      <div className="flex items-center justify-between">
        <span className="font-bold">Vegulla M. Preetham</span>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-full hover:bg-secondary"
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <ul className="flex flex-col py-2 animate-fade-in">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "flex items-center gap-2 p-2 rounded-md my-1 transition-all",
                  activeSection === link.href.substring(1)
                    ? "bg-primary text-white"
                    : "hover:bg-secondary"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex items-center justify-center">{link.icon}</span>
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );

  return (
    <>
      {desktopNav}
      {mobileNav}
    </>
  );
};

export default Navbar;
