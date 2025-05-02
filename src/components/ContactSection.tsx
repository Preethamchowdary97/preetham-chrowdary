
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
      duration: 5000,
    });
  };

  return (
    <section
      id="contact"
      className="section py-20 bg-gradient-to-b from-blue-50 to-sky-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
          <span className="border-b-4 border-sky-400 pb-2">Contact Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="animate-slide-in">
            <Card className="shadow-lg bg-white/80 h-full card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-sky-700">
                  Get In Touch
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      className="rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="rounded-md min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in [animation-delay:200ms]">
            <Card className="shadow-lg bg-white/80 h-full card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-sky-700">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 mb-1">Email</p>
                    <p className="text-gray-800 font-medium">
                      2200030481cseh@gmail.com
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Phone</p>
                    <p className="text-gray-800 font-medium">+91 8328646565</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/vegulla-meherpreetham-0a0857287/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-700 font-medium hover:underline"
                    >
                      linkedin.com/in/vegulla-meherpreetham-0a0857287/
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Location</p>
                    <p className="text-gray-800 font-medium">
                      Mandapeta, Andhra Pradesh
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
