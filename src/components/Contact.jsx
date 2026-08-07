import { motion } from 'framer-motion';
import { Mail, Code, Briefcase, Send } from 'lucide-react';
import { Container } from '../UI/Container';
import { Button } from '../UI/Button';

const Contact = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="contact">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-cardBg border border-glassBorder rounded-[40px] p-10 md:p-20 text-center shadow-2xl"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-6 block">
            What's Next?
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-textPrimary mb-6">
            Let's Build Something <span className="text-gradient">Great</span>
          </h2>
          <p className="text-textSecondary text-lg md:text-xl max-w-2xl mx-auto mb-12">
            I'm currently seeking entry-level software roles and internships. If you have an opportunity that matches my skills, or just want to say hi, my inbox is always open!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="primary" className="!px-8 !py-4 text-base w-full sm:w-auto">
              <Mail size={20} />
              contact@sohan.com
            </Button>
            <div className="flex gap-4">
              <a href="#" className="w-14 h-14 rounded-full border border-glassBorder flex items-center justify-center text-textSecondary hover:text-textPrimary hover:border-textSecondary hover:bg-glassBorder transition-all">
                <Code size={24} />
              </a>
              <a href="#" className="w-14 h-14 rounded-full border border-glassBorder flex items-center justify-center text-textSecondary hover:text-textPrimary hover:border-textSecondary hover:bg-glassBorder transition-all">
                <Briefcase size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
      
      <footer className="mt-32 text-center text-textSecondary text-sm border-t border-glassBorder pt-10">
        <p>&copy; {new Date().getFullYear()} Sohan Pagade. Designed & Built with React + Tailwind.</p>
      </footer>
    </section>
  );
};

export default Contact;
