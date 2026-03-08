import { Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-medium mb-2">Get In Touch</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle mx-auto mb-8">
            Ready to bring your project to life? Whether you need a new website or want to 
            improve an existing one, I'm here to help. Reach out and let's discuss your goals.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" asChild>
              <a href="https://www.fiverr.com/med_aziz321/buying?source=avatar_menu_profile" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2" size={18} /> Hire Me on Fiverr
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:beaziz022@gmail.com">
                <Mail className="mr-2" size={18} /> Send Email
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Randome700"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={20} />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
