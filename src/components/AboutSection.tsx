import { CheckCircle } from "lucide-react";

const highlights = [
  "Clear communication throughout every project",
  "Reliable delivery — on time, every time",
  "Clean, maintainable code that's built to last",
  "Results-focused approach to every solution",
  "Fast turnaround without compromising quality",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium mb-2">About Me</p>
            <h2 className="section-title">A Developer You Can Count On</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Mohamed Aziz Ben Mansour, a full-stack web developer dedicated to helping businesses 
                establish and grow their online presence. I specialize in building complete web solutions — 
                from user interfaces to databases — that deliver measurable business results.
              </p>
              <p>
                My approach is simple: understand your business goals, deliver a solution that 
                achieves them, and maintain clear communication throughout the process. Whether 
                you need an e-commerce store, a management system, or a database-driven application, 
                I build scalable solutions that work for you and your customers.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 lg:p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">Why Work With Me</h3>
            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
