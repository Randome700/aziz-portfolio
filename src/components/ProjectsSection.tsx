import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Homemade Cookies Online Store",
    url: "https://randome700.github.io/Home-Made-cookies/",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=500&fit=crop",
    summary: "E-commerce website for a homemade cookies business with product showcase and ordering functionality.",
    problem: "Local bakery needed an online presence to reach more customers and streamline orders.",
    solution: "Built a visually appealing storefront with product categories, detailed descriptions, and easy navigation.",
    features: ["Product catalog", "Responsive design", "Contact integration", "Brand-consistent styling"],
    value: "Enabled the business to expand beyond local foot traffic and accept orders 24/7.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Natural Skincare Products Website",
    url: "https://randome700.github.io/Natural-Care-for-Your-Skin/",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=500&fit=crop",
    summary: "Elegant product showcase for a natural skincare brand with focus on brand identity and trust.",
    problem: "Skincare brand needed a website that reflects their premium, natural positioning.",
    solution: "Created a clean, elegant design that emphasizes product quality and natural ingredients.",
    features: ["Product showcase", "Brand storytelling", "Mobile-optimized", "Clean typography"],
    value: "Established professional online presence that builds customer trust and brand recognition.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Café Digital Menu",
    url: "https://randome700.github.io/menu-caffee/",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop",
    summary: "Interactive digital menu for a café with category filtering and modern presentation.",
    problem: "Café wanted to replace physical menus with a contactless digital solution.",
    solution: "Developed an intuitive digital menu with category organization and appealing food photography.",
    features: ["Category filtering", "Price display", "Mobile-first design", "Fast loading"],
    value: "Improved customer experience and reduced printing costs with easy menu updates.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Coach Reservation System",
    url: "https://randome700.github.io/Coach-reservation/",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop",
    summary: "Booking platform for coaching services with session selection and reservation flow.",
    problem: "Coach needed an automated way to manage client bookings and reduce scheduling conflicts.",
    solution: "Built a reservation system with service selection, availability display, and booking confirmation.",
    features: ["Service selection", "Booking flow", "Form validation", "Confirmation system"],
    value: "Streamlined booking process, reducing administrative work and improving client experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Neon Creative - Web Agency",
    url: "https://randome700.github.io/Neon-Creative/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    summary: "Bold, modern agency website with striking visual design and portfolio showcase.",
    problem: "Web design agency needed a website that demonstrates their creative capabilities.",
    solution: "Created a visually impressive site with bold typography, smooth animations, and portfolio display.",
    features: ["Portfolio gallery", "Service pages", "Contact forms", "Modern animations"],
    value: "Positioned the agency as a creative leader, attracting higher-value clients.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle mx-auto">
            Real projects delivering real results for businesses across different industries.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden card-hover">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent lg:hidden" />
                </div>
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.summary}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-sm font-medium text-foreground">Challenge: </span>
                      <span className="text-sm text-muted-foreground">{project.problem}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">Solution: </span>
                      <span className="text-sm text-muted-foreground">{project.solution}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">Result: </span>
                      <span className="text-sm text-muted-foreground">{project.value}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs text-primary font-medium">
                          {tech}{i < project.technologies.length - 1 && " •"}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        View Live <ExternalLink className="ml-1" size={14} />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
