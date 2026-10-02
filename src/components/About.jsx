import { motion } from 'framer-motion';
import { Brain, Database, Layout, Server, Sparkles, Terminal, CheckCircle2, Award } from 'lucide-react';
import { Container } from '../UI/Container';
import { SectionTitle } from '../UI/SectionTitle';

const About = () => {
  const highlights = [
    { title: "Full-Stack & Systems", desc: "Building modular RESTful APIs and clean React/Angular interfaces." },
    { title: "Generative AI & RAG", desc: "Integrating LLM APIs and vector retrieval pipelines over custom documents." },
    { title: "Database Architecture", desc: "Designing structured schemas across MySQL, MongoDB, and MongoDB Atlas." },
    { title: "Problem Solving & DSA", desc: "Solid grasp of data structures, OOP principles, and clean system design." }
  ];

  const strengths = [
    "Software Engineering",
    "AI/ML Applications",
    "LLM/RAG Architecture",
    "API Development",
    "Database Design",
    "Auth & Security (JWT / RBAC)",
    "Debugging & Testing",
    "Version Control (Git/GitHub)"
  ];

  return (
    <section className="py-24 relative" id="about">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <SectionTitle title="About Me." subtitle="Background & Focus" className="mb-8" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-base md:text-lg text-textSecondary leading-relaxed"
            >
              <p>
                I'm a Computer Science undergraduate (B.E., graduating 2027) at Don Bosco Institute of Technology, Bangalore, with a CGPA of 8.4. My passion lies in engineering full-stack and AI-enabled software solutions that bridge complex backend services with responsive, intuitive user interfaces.
              </p>
              <p>
                From architecting Retrieval-Augmented Generation (RAG) pipelines for government welfare schemes to creating scalable e-commerce systems in Flask and Javalin microservices, I take pride in writing clean, well-tested, and maintainable code.
              </p>
              <p>
                I am actively seeking software engineering, AI/ML, and developer-infrastructure internship opportunities where I can contribute to high-impact products while continuing to grow as an engineer.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-cardBg border border-glassBorder p-7 rounded-3xl col-span-full shadow-lg"
            >
              <h3 className="text-lg font-bold text-textPrimary mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-accent" />
                Core Capabilities
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="bg-bgPrimary/60 border border-glassBorder p-4 rounded-2xl">
                    <p className="text-sm font-semibold text-textPrimary mb-1">{item.title}</p>
                    <p className="text-xs text-textSecondary">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="col-span-full bg-cardBg border border-glassBorder p-7 rounded-3xl shadow-lg"
            >
              <h3 className="text-lg font-bold text-textPrimary mb-4 flex items-center gap-2">
                <Award size={18} className="text-accent" />
                Additional Strengths
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {strengths.map((str, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center gap-2 text-xs font-medium py-1.5 px-3.5 rounded-full bg-bgPrimary border border-glassBorder text-textSecondary hover:text-textPrimary hover:border-accent/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {str}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
