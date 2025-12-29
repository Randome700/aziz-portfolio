import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <p className="text-primary font-medium mb-4">Frontend Developer</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Mohamed Aziz
              <br />
              <span className="text-muted-foreground">Ben Mansour</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              I build websites that drive business results. From e-commerce stores to booking systems, 
              I deliver clean, fast, and conversion-focused solutions that help businesses grow online.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  Hire Me <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="/cv.pdf" download>
                  <Download className="mr-2" size={18} /> Download CV
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Mohamed Aziz Ben Mansour - Frontend Developer"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
