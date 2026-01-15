import { Globe, ShoppingCart, Calendar, Building, Database, LayoutDashboard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: LayoutDashboard,
    title: "Full-Stack Web Applications",
    description: "Complete web solutions with frontend, backend, and database. Built for scalability and real business needs.",
  },
  {
    icon: Database,
    title: "Database-Driven Systems",
    description: "Custom management systems with CRUD operations, data analytics, and automated business logic.",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Custom, responsive websites built with modern technologies. Clean code, fast performance, and SEO-optimized.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    description: "Online stores that convert visitors into customers. Secure checkout, product management, and mobile-ready.",
  },
  {
    icon: Calendar,
    title: "Booking & Reservation Systems",
    description: "Interactive booking platforms for appointments, reservations, and scheduling with intuitive user experience.",
  },
  {
    icon: Building,
    title: "Business & Brand Websites",
    description: "Professional websites that establish credibility and showcase your brand identity effectively.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">What I Do</p>
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle mx-auto">
            I specialize in creating websites that solve real business problems and deliver measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border card-hover group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
