import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Database, Shield, Bot, ShoppingCart, Calendar } from 'lucide-react';
import { Container } from '../UI/Container';
import { SectionTitle } from '../UI/SectionTitle';

const Projects = () => {
  const projects = [
    {
      title: "AI Public Service Assistant for Government Schemes",
      timeline: "June 2026 – Present",
      tagline: "Flagship AI / Full-Stack System",
      description: "A full-stack AI assistant that matches citizens with relevant government welfare schemes across 5+ categories using rule-based eligibility algorithms, RAG pipelines, and 10+ REST API endpoints.",
      highlights: [
        "Implemented a Retrieval-Augmented Generation (RAG) pipeline over official scheme documents for grounded, hallucination-free LLM answers.",
        "Engineered JWT authentication and role-based access control (RBAC) for administrative dashboard and scheme management.",
        "Structured scalable MongoDB schemas for rapid lookup and automated integration with external scheme data sources."
      ],
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "LLM API", "RAG", "JWT"],
      featured: true,
      color: "from-accent to-accentSecondary",
      icon: <Bot size={24} className="text-accent" />
    },
    {
      title: "SmartCart — Online Grocery Ordering Platform",
      timeline: "June 2026 – August 2026",
      tagline: "E-Commerce & Backend Architecture",
      description: "An end-to-end grocery ordering web application with dynamic product catalog browsing, session cart management, secure user authentication, and seamless order checkout.",
      highlights: [
        "Architected RESTful backend endpoints in Python/Flask with clean separation of concerns and modular service layer.",
        "Modeled scalable MongoDB Atlas collections for real-time inventory updates, product indexing, and order state processing."
      ],
      tech: ["Python", "Flask", "MongoDB Atlas", "REST APIs", "Session Auth"],
      featured: false,
      color: "from-emerald-500 to-teal-400",
      icon: <ShoppingCart size={24} className="text-emerald-400" />
    },
    {
      title: "AI Study Planner & Career Prediction",
      timeline: "March 2026 – May 2026",
      tagline: "Full-Stack AI Productivity Tool",
      description: "An intelligent study management and career trajectory prediction tool powered by an interactive AI chatbot and structured roadmap generation.",
      highlights: [
        "Constructed lightweight, performant microservices using Java and the Javalin microframework linked to a responsive React client.",
        "Applied OOP principles and clean API contracts to deliver personalized study schedules and career-path predictions."
      ],
      tech: ["React.js", "Java (Javalin)", "LLM API", "REST APIs", "OOP Design"],
      featured: false,
      color: "from-purple-500 to-indigo-500",
      icon: <Calendar size={24} className="text-purple-400" />
    }
  ];

  return (
    <section className="py-32" id="projects">
      <Container>
        <SectionTitle 
          title="Featured Projects." 
          subtitle="Real-World Engineering" 
          className="items-center text-center mb-16"
        />

        <div className="flex flex-col gap-10 mt-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-[36px] overflow-hidden bg-cardBg border border-glassBorder hover:border-accent/30 transition-all duration-500 shadow-xl ${
                project.featured ? 'p-8 md:p-14' : 'p-7 md:p-10'
              }`}
            >
              {/* Background gradient hint */}
              <div className={`absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl ${project.color} opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none`} />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-accent text-xs font-semibold uppercase tracking-wider bg-accent/10 px-3.5 py-1 rounded-full border border-accent/20">
                      {project.tagline}
                    </span>
                    <span className="text-textSecondary text-xs font-medium">
                      {project.timeline}
                    </span>
                  </div>

                  <h3 className={`${project.featured ? 'text-2xl md:text-4xl' : 'text-2xl md:text-3xl'} font-bold text-textPrimary mb-4 group-hover:text-accent transition-colors`}>
                    {project.title}
                  </h3>

                  <p className="text-textSecondary text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mb-6 space-y-2.5">
                    {project.highlights.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-textSecondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs font-medium text-textPrimary bg-bgPrimary/80 px-3.5 py-1.5 rounded-lg border border-glassBorder group-hover:border-white/20 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right summary visual / icon badge */}
                <div className="lg:w-72 flex flex-col justify-between bg-bgPrimary/60 border border-glassBorder rounded-2xl p-6 self-stretch">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cardBg border border-glassBorder flex items-center justify-center">
                      {project.icon}
                    </div>
                    <span className="text-[11px] font-mono text-textSecondary">
                      Project #{index + 1}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-textPrimary uppercase tracking-wider mb-1">Architecture</p>
                    <p className="text-xs text-textSecondary leading-relaxed">
                      {project.featured 
                        ? "RAG pipeline + JWT RBAC + RESTful APIs" 
                        : "Clean MVC / Layered REST API Services"}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-glassBorder flex items-center justify-between">
                    <a 
                      href="https://github.com/Sohanspagade" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accentSecondary transition-colors"
                    >
                      View on GitHub <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
