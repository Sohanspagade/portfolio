import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';
import { Button } from '../UI/Button';
import { Container } from '../UI/Container';
import photo from '../assets/photo.jpeg';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center" id="home">
      <Container className="w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-cardBg rounded-[40px] border border-glassBorder p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          {/* Subtle Glow inside the card */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="flex flex-col gap-8">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-glassBorder text-textSecondary text-xs font-semibold uppercase tracking-wider mb-6 border border-white/5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Internships & Full-Time Roles
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-textPrimary leading-[1.08]"
                >
                  Building <span className="text-gradient">intelligent</span> full-stack software.
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 text-base md:text-lg text-textSecondary max-w-lg leading-relaxed"
                >
                  Hi, I'm <strong className="text-textPrimary font-semibold">Sohan S Pagade</strong>. Computer Science undergraduate (B.E. 2027) experienced in building full-stack web applications, RAG & LLM pipelines, and scalable backend services with Java, Python, React, and Node.js.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Button variant="primary" href="#projects">
                  View Projects
                  <ArrowRight size={18} />
                </Button>
                
                <Button 
                  variant="secondary" 
                  href="./Sohan_Pagade_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Sohan_Pagade_Resume.pdf"
                >
                  Resume
                  <Download size={18} />
                </Button>

                <a 
                  href="mailto:sohanspagade@gmail.com"
                  className="inline-flex items-center gap-2 text-xs text-textSecondary hover:text-accent font-medium px-4 py-3 transition-colors"
                >
                  <Mail size={16} />
                  sohanspagade@gmail.com
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-glassBorder mt-2"
              >
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-textPrimary">8.4</h4>
                  <p className="text-xs text-textSecondary mt-1">B.E. CGPA (2027)</p>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-textPrimary">3+</h4>
                  <p className="text-xs text-textSecondary mt-1">Full-Stack Projects</p>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-textPrimary">20+</h4>
                  <p className="text-xs text-textSecondary mt-1">Technologies & Tools</p>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Portrait */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative h-[480px] lg:h-[580px] rounded-[32px] overflow-hidden border border-glassBorder group shadow-2xl"
            >
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-bgPrimary/25 to-transparent z-10 opacity-80" />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10" />
              
              <img 
                src={photo} 
                alt="Sohan S Pagade" 
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
              />

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="glass-panel p-4 flex items-center justify-between backdrop-blur-md">
                  <div>
                    <p className="text-textPrimary font-semibold text-sm">Sohan S Pagade</p>
                    <p className="text-textSecondary text-xs">Bangalore, India • B.E. CS 2027</p>
                  </div>
                  <a 
                    href="./Sohan_Pagade_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/40 text-white hover:scale-105 transition-transform"
                    title="Open Resume"
                  >
                    <Download size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Strip of Core Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex justify-center"
        >
          <div className="bg-cardBg border border-glassBorder rounded-2xl py-4 px-8 flex flex-wrap justify-center items-center gap-6 sm:gap-10 w-full max-w-5xl shadow-xl">
            {['React.js', 'Python', 'Java', 'Node.js', 'MongoDB', 'RAG / LLMs', 'MySQL', 'TypeScript'].map((tech) => (
              <span key={tech} className="text-textSecondary font-semibold text-sm uppercase tracking-wider opacity-70 hover:opacity-100 hover:text-accent transition-all cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
