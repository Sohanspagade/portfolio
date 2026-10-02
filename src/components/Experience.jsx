import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Download, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { Container } from '../UI/Container';
import { SectionTitle } from '../UI/SectionTitle';
import { Button } from '../UI/Button';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      organization: "Infosys Springboard",
      period: "Sep 2025 – Dec 2025",
      location: "Virtual / India",
      points: [
        "Completed structured coursework in Python, Java-based object-oriented software development, and AI/ML fundamentals.",
        "Applied debugging, data structures, OOP principles, and algorithmic problem-solving through hands-on exercises and mini-projects.",
        "Collaborated in a feedback-driven learning environment, strengthening practical software development and coding standards."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering (B.E.) — Computer Science & Engineering",
      institution: "Don Bosco Institute of Technology, Bangalore",
      period: "2023 – 2027",
      cgpa: "CGPA: 8.4",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "REST API Design"
      ]
    }
  ];

  const certifications = [
    {
      title: "Modern AI Masterclass",
      issuer: "Infosys Springboard",
      date: "Oct 2025"
    },
    {
      title: "DBMS & MS Fabric SQL",
      issuer: "Udemy",
      date: "Apr 2025"
    },
    {
      title: "Java Programming Certification",
      issuer: "Certification Authority",
      date: "Apr 2025"
    },
    {
      title: "Python & AI/ML Fundamentals",
      issuer: "Infosys Springboard",
      date: "2025"
    }
  ];

  return (
    <section className="py-28 bg-bgSecondary/30 relative" id="experience">
      <Container>
        <SectionTitle 
          title="Journey & Credentials." 
          subtitle="Experience & Education" 
          className="items-center text-center mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column: Experience & Certifications */}
          <div className="space-y-10">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-xl font-bold text-textPrimary">Work Experience</h3>
              </div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-cardBg border border-glassBorder rounded-3xl p-7 hover:border-accent/30 transition-colors shadow-lg"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-textPrimary">{exp.role}</h4>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-textSecondary mb-4">
                    <span className="font-medium text-textPrimary/90">{exp.organization}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="text-xs md:text-sm text-textSecondary flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Award size={20} />
                </div>
                <h3 className="text-xl font-bold text-textPrimary">Certifications</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-cardBg border border-glassBorder rounded-2xl p-5 hover:border-white/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h5 className="text-sm font-semibold text-textPrimary mb-1">{cert.title}</h5>
                      <p className="text-xs text-textSecondary">{cert.issuer}</p>
                    </div>
                    <span className="text-[11px] font-mono text-accent mt-3 self-start">
                      {cert.date}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Resume Action Banner */}
          <div className="space-y-10">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-xl font-bold text-textPrimary">Education</h3>
              </div>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-cardBg border border-glassBorder rounded-3xl p-7 hover:border-accent/30 transition-colors shadow-lg"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-textPrimary">{edu.degree}</h4>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm text-textSecondary mb-2">{edu.institution}</p>
                  
                  <div className="inline-block bg-accent/10 border border-accent/20 text-accent font-semibold text-xs px-3 py-1 rounded-lg mb-6">
                    {edu.cgpa}
                  </div>

                  <div>
                    <h5 className="text-xs uppercase font-semibold text-textSecondary tracking-wider mb-3">
                      Relevant Coursework
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span 
                          key={i} 
                          className="text-xs bg-bgPrimary border border-glassBorder text-textSecondary px-3 py-1 rounded-md"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume Callout Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-cardBg via-cardBg to-accent/10 border border-accent/30 rounded-3xl p-8 shadow-xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                  Complete Profile
                </span>
                <h4 className="text-2xl font-bold text-textPrimary mb-3">
                  Want the full resume?
                </h4>
                <p className="text-sm text-textSecondary leading-relaxed mb-6">
                  Get a copy of my ATS-optimized resume containing complete project breakdowns, coursework, credentials, and technical proficiencies.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Button 
                    variant="primary" 
                    href="./Sohan_Pagade_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Sohan_Pagade_Resume.pdf"
                    className="!px-6 !py-3 text-xs"
                  >
                    <Download size={16} />
                    Download Resume PDF
                  </Button>
                  
                  <a 
                    href="./Sohan_Pagade_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border border-glassBorder text-textSecondary hover:text-textPrimary hover:bg-glassBorder transition-colors text-xs font-medium"
                  >
                    <ExternalLink size={14} />
                    Open PDF in Browser
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
