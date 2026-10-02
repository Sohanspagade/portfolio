import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { Container } from '../UI/Container';
import { Button } from '../UI/Button';

const GithubIcon = ({ size = 16, className = "" }) => (
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

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "sohanspagade@gmail.com";
  const phone = "+91 7483448300";
  const github = "https://github.com/Sohanspagade";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-32 relative overflow-hidden" id="contact">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-cardBg border border-glassBorder rounded-[40px] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Accent border glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

          <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-4 inline-block bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Available for Opportunities
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary mb-6 tracking-tight">
            Let's Build Something <span className="text-gradient">Impactful</span>
          </h2>

          <p className="text-textSecondary text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm currently seeking software engineering, AI/ML, and developer-infrastructure internship or entry-level opportunities. Whether you have an open role or would like to connect, my inbox is always open.
          </p>

          {/* Contact Details Quick Strip */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 text-left">
            {/* Email Box */}
            <div className="bg-bgPrimary/70 border border-glassBorder rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-accent mb-2">
                <Mail size={16} />
                <span className="text-xs font-semibold uppercase tracking-wider text-textSecondary">Email</span>
              </div>
              <a 
                href={`mailto:${email}`} 
                className="text-textPrimary text-xs sm:text-sm font-medium hover:text-accent transition-colors truncate"
                title={email}
              >
                {email}
              </a>
            </div>

            {/* Phone Box */}
            <div className="bg-bgPrimary/70 border border-glassBorder rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-accent mb-2">
                <Phone size={16} />
                <span className="text-xs font-semibold uppercase tracking-wider text-textSecondary">Phone</span>
              </div>
              <a 
                href={`tel:${phone.replace(/\s+/g, '')}`} 
                className="text-textPrimary text-xs sm:text-sm font-medium hover:text-accent transition-colors"
              >
                {phone}
              </a>
            </div>

            {/* Location Box */}
            <div className="bg-bgPrimary/70 border border-glassBorder rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-accent mb-2">
                <MapPin size={16} />
                <span className="text-xs font-semibold uppercase tracking-wider text-textSecondary">Location</span>
              </div>
              <span className="text-textPrimary text-xs sm:text-sm font-medium">
                Bangalore, India
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="primary" 
              href={`mailto:${email}`}
              className="!px-8 !py-4 text-sm w-full sm:w-auto"
            >
              <Send size={18} />
              Send Email
            </Button>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-medium bg-bgSecondary border border-glassBorder text-textPrimary hover:bg-glassBorder transition-all duration-300 gap-2 cursor-pointer shadow-md"
            >
              {copied ? (
                <>
                  <Check size={18} className="text-green-400" />
                  <span className="text-green-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={18} />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <Button 
              variant="secondary" 
              href="./Sohan_Pagade_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              download="Sohan_Pagade_Resume.pdf"
              className="!px-7 !py-4 text-sm w-full sm:w-auto"
            >
              <Download size={18} />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-4 mt-10 pt-8 border-t border-glassBorder">
            <a 
              href={github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-glassBorder text-textSecondary hover:text-textPrimary hover:border-accent/40 hover:bg-accent/5 transition-all text-xs font-medium"
            >
              <GithubIcon size={16} />
              <span>GitHub / Sohanspagade</span>
            </a>
            <a 
              href="./Sohan_Pagade_Resume.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-glassBorder text-textSecondary hover:text-textPrimary hover:border-accent/40 hover:bg-accent/5 transition-all text-xs font-medium"
            >
              <ExternalLink size={16} />
              <span>View ATS Resume (PDF)</span>
            </a>
          </div>
        </motion.div>
      </Container>
      
      <footer className="mt-28 text-center text-textSecondary text-xs border-t border-glassBorder pt-8">
        <p>&copy; {new Date().getFullYear()} Sohan S Pagade. Bangalore, India • Built with React & Tailwind CSS</p>
      </footer>
    </section>
  );
};

export default Contact;
