import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
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
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block py-2 px-4 rounded-full bg-glassBorder text-textSecondary text-sm font-medium mb-6"
                >
                  Software Engineer & Developer
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-textPrimary leading-[1.1]"
                >
                  Building <span className="text-gradient">modern</span> digital experiences.
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 text-lg text-textSecondary max-w-lg leading-relaxed"
                >
                  Computer Science student passionate about crafting practical, real-world software solutions and elegant user interfaces.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Button variant="primary">
                  View Projects
                  <ArrowRight size={18} />
                </Button>
                <Button variant="secondary">
                  Resume
                  <Download size={18} />
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-8 pt-8 border-t border-glassBorder mt-4"
              >
                <div>
                  <h4 className="text-3xl font-bold text-textPrimary">3+</h4>
                  <p className="text-sm text-textSecondary mt-1">Major Projects</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-textPrimary">5+</h4>
                  <p className="text-sm text-textSecondary mt-1">Tech Stacks</p>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Portrait */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative h-[500px] lg:h-[600px] rounded-[32px] overflow-hidden border border-glassBorder group"
            >
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-bgPrimary/20 to-transparent z-10 opacity-80" />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10" />
              
              <img 
                src={photo} 
                alt="Sohan Pagade" 
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
              />

              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="glass-panel p-4 flex items-center justify-between backdrop-blur-md">
                  <div>
                    <p className="text-textPrimary font-semibold">Available for</p>
                    <p className="text-textSecondary text-sm">Internships & Entry-level</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/40">
                    <ArrowRight className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex justify-center"
        >
          <div className="bg-cardBg border border-glassBorder rounded-2xl py-6 px-12 flex flex-wrap justify-center items-center gap-12 w-full max-w-4xl shadow-xl">
            {['React', 'Node.js', 'Express', 'Java', 'MySQL'].map((tech) => (
              <span key={tech} className="text-textSecondary font-semibold text-lg uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity">
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
