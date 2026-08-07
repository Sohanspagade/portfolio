import { motion } from 'framer-motion';
import { Brain, Cloud, Database, Layout, Smartphone, Cpu } from 'lucide-react';
import { Container } from '../UI/Container';
import { SectionTitle } from '../UI/SectionTitle';

const About = () => {
  const interests = [
    { icon: <Brain size={24} />, name: 'AI & ML' },
    { icon: <Cloud size={24} />, name: 'Cloud & DevOps' },
    { icon: <Database size={24} />, name: 'Data Science' },
    { icon: <Layout size={24} />, name: 'Blockchain' },
    { icon: <Cpu size={24} />, name: 'IoT & Robotics' },
    { icon: <Smartphone size={24} />, name: 'AR/VR' },
  ];

  return (
    <section className="py-24" id="about">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionTitle title="About Me." subtitle="Who I Am" className="mb-8" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-lg text-textSecondary"
            >
              <p>
                I'm a Computer Science & Engineering student driven by the desire to build practical, real-world software solutions. My focus is on creating products that solve tangible problems and offer excellent user experiences.
              </p>
              <p>
                I lean heavily towards modern web development, full-stack architecture, and exploring emerging technologies. I'm actively seeking internships and entry-level software roles to apply my skills in dynamic environments.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-cardBg border border-glassBorder p-8 rounded-3xl col-span-full sm:col-span-1 shadow-lg hover:border-accent/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-textPrimary mb-4">Other Interests</h3>
              <ul className="space-y-3 text-textSecondary text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  GitHub Student Developer Pack
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Cloudflare Email Routing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Domain Setup & Management
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  ATS Resume Optimization
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 p-8 rounded-3xl col-span-full sm:col-span-1 shadow-lg"
            >
              <h3 className="text-xl font-bold text-textPrimary mb-4">Admissions Insight</h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                Researched and compared KSIT, MVJ, Vidya Vikas Institute of Technology against Karnataka counseling cutoffs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="col-span-full"
            >
              <h3 className="text-xl font-bold text-textPrimary mb-6">Portfolio Interests</h3>
              <div className="flex flex-wrap gap-4">
                {interests.map((interest, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 bg-bgSecondary border border-glassBorder py-3 px-5 rounded-full text-textSecondary text-sm font-medium hover:text-textPrimary hover:border-textSecondary transition-all"
                  >
                    <span className="text-accent">{interest.icon}</span>
                    {interest.name}
                  </div>
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
