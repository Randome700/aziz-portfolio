import { Code, Wrench, Palette } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Technologies",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "CSS Grid & Flexbox", "CSS Animations"],
  },
  {
    icon: Palette,
    title: "Design & UI",
    skills: ["UI/UX Principles", "Mobile-First Design", "Cross-Browser Compatibility", "Web Accessibility", "Performance Optimization"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "VS Code", "Chrome DevTools", "Figma (Basic)", "GitHub Pages", "Netlify"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Expertise</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle mx-auto">
            Core competencies focused on delivering clean, performant, and user-friendly web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <category.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-muted-foreground text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
