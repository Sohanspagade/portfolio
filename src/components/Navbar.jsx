import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Code2, Download } from 'lucide-react';
import { Button } from '../UI/Button';
import { Container } from '../UI/Container';
import photo from '../assets/photo.jpeg';

const GithubIcon = ({ size = 18, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 h-[80px] transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}
    >
      <Container className="h-full flex items-center justify-between">
        {/* Left: Avatar + Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-glassBorder shadow-[0_0_15px_rgba(255,107,0,0.2)] group-hover:border-accent transition-colors">
            <img src={photo} alt="Sohan" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-textPrimary font-bold text-base md:text-lg leading-none group-hover:text-accent transition-colors">Sohan S Pagade</h1>
            <span className="text-textSecondary text-[11px]">Computer Science (B.E. 2027)</span>
          </div>
        </a>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-7">
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
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="https://github.com/Sohanspagade" 
            target="_blank" 
            rel="noreferrer" 
            className="w-10 h-10 rounded-full border border-glassBorder flex items-center justify-center text-textSecondary hover:text-textPrimary hover:border-accent/40 hover:bg-glassBorder transition-all"
            title="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>
          
          <Button 
            variant="primary" 
            className="!px-5 !py-2.5 !text-xs"
            href="./Sohan_Pagade_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Sohan_Pagade_Resume.pdf"
          >
            <Download size={14} />
            Resume
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-textPrimary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
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
              className="text-textSecondary hover:text-textPrimary text-lg font-medium transition-colors py-1"
            >
              {link}
            </a>
          ))}
          <div className="pt-4 border-t border-glassBorder flex flex-col gap-3">
            <Button 
              variant="primary" 
              className="w-full !py-3 !text-sm"
              href="./Sohan_Pagade_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Sohan_Pagade_Resume.pdf"
            >
              <Download size={16} />
              Download Resume (PDF)
            </Button>
            <a 
              href="mailto:sohanspagade@gmail.com"
              className="text-center text-xs text-textSecondary hover:text-accent py-1"
            >
              sohanspagade@gmail.com
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
