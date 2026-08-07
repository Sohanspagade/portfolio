import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Code, Moon } from 'lucide-react';
import { Button } from '../UI/Button';
import { Container } from '../UI/Container';
import photo from '../assets/photo.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 h-[80px] transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}
    >
      <Container className="h-full flex items-center justify-between">
        {/* Left: Avatar + Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-glassBorder shadow-[0_0_15px_rgba(255,107,0,0.2)]">
            <img src={photo} alt="Sohan" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-textPrimary font-bold text-lg leading-none">Sohan Pagade</h1>
            <span className="text-textSecondary text-xs">Software Engineer</span>
          </div>
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-textSecondary hover:text-textPrimary text-sm font-medium transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-textSecondary hover:text-textPrimary hover:bg-glassBorder transition-colors">
            <Moon size={18} strokeWidth={1.5} />
          </button>
          <a href="https://github.com/Sohanspagade" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-textSecondary hover:text-textPrimary hover:bg-glassBorder transition-colors">
            <Code size={18} strokeWidth={1.5} />
          </a>
          <Button variant="primary" className="!px-5 !py-2.5 !text-xs">
            Resume
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-textPrimary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-bgPrimary/95 backdrop-blur-xl border-b border-glassBorder p-6 flex flex-col gap-4 md:hidden shadow-2xl">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-textSecondary hover:text-textPrimary text-lg font-medium transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
