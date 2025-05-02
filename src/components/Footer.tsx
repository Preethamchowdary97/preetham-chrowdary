
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-t from-sky-900 to-sky-800 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Vegulla Meher Preetham</h2>
        <p className="mb-6">Software Developer</p>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://www.linkedin.com/in/vegulla-meherpreetham-0a0857287/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-sky-300 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:2200030481cseh@gmail.com" 
            className="hover:text-sky-300 transition-colors"
          >
            Email
          </a>
          <a 
            href="tel:+918328646565" 
            className="hover:text-sky-300 transition-colors"
          >
            Phone
          </a>
        </div>
        
        <p className="text-sm text-sky-200">
          &copy; {currentYear} Vegulla Meher Preetham. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
