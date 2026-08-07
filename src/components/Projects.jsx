import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '../UI/Container';
import { SectionTitle } from '../UI/SectionTitle';

const Projects = () => {
  const projects = [
    {
      title: "AI Public Service Assistant",
      tagline: "Major Project",
      description: "An AI-powered assistant designed for helping users navigate and understand Government Schemes effectively.",
      tech: ["AI", "React", "Node.js", "Express"],
      featured: true,
      color: "from-accent to-accentSecondary"
    },
    {
      title: "TaxPal",
      tagline: "Freelancer Tool",
      description: "A Personal Finance & Tax Estimator application tailored specifically for freelancers to manage their income.",
      tech: ["React", "Chart.js", "MySQL"],
      featured: false,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "AI Study Planner",
      tagline: "Productivity",
      description: "An intelligent study planning tool leveraging AI to create optimized learning schedules.",
      tech: ["React", "Java", "Javalin"],
      featured: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-32" id="projects">
      <Container>
        <SectionTitle title="Selected Works." subtitle="Projects" />

        <div className="flex flex-col gap-12 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-[40px] overflow-hidden bg-cardBg border border-glassBorder hover:border-white/20 transition-colors duration-500 ${project.featured ? 'p-10 md:p-16' : 'p-8 md:p-12'}`}
            >
              {/* Background gradient hint */}
              <div className={`absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl ${project.color} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none`} />

              <div className={`flex flex-col ${project.featured ? 'lg:flex-row lg:items-center gap-16' : 'gap-8'}`}>
                
                <div className={`flex-1 ${project.featured ? 'max-w-xl' : ''}`}>
                  <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
                    {project.tagline}
                  </span>
                  <h3 className={`${project.featured ? 'text-4xl md:text-5xl' : 'text-3xl'} font-bold text-textPrimary mb-6`}>
                    {project.title}
                  </h3>
                  <p className="text-textSecondary text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-sm font-medium text-textPrimary bg-bgPrimary/50 px-4 py-2 rounded-full border border-glassBorder">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a href="#" className="inline-flex items-center gap-2 text-textPrimary font-semibold hover:text-accent transition-colors">
                    View Project <ArrowUpRight size={20} />
                  </a>
                </div>

                {/* Decorative empty space for image/mockup in a real project */}
                {project.featured && (
                  <div className="flex-1 w-full h-[300px] md:h-[400px] bg-bgPrimary rounded-3xl border border-glassBorder relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(255,107,0,0.1)] transition-shadow duration-700">
                     <div className="absolute inset-0 flex items-center justify-center text-textSecondary/30 font-bold text-3xl">
                       Project Preview
                     </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
