import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Brain, 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  Cpu, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Container } from '../UI/Container';
import { SectionTitle } from '../UI/SectionTitle';
import { Card } from '../UI/Card';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    {
      id: 'ai-ml',
      title: 'AI / ML & LLMs',
      badge: 'Core Focus',
      icon: <Brain size={26} className="text-accent" />,
      description: 'Building intelligent applications with modern generative AI, RAG pipelines, and ML libraries.',
      skills: [
        { name: 'LLM API Integration', hot: true },
        { name: 'RAG Architecture', hot: true },
        { name: 'Prompt Engineering', hot: true },
        { name: 'Python', hot: false },
        { name: 'Scikit-learn', hot: false },
        { name: 'Pandas', hot: false },
        { name: 'NumPy', hot: false },
        { name: 'NLP Recommendation Logic', hot: false }
      ]
    },
    {
      id: 'languages',
      title: 'Programming Languages',
      badge: 'Foundation',
      icon: <Code2 size={26} className="text-accent" />,
      description: 'Strong foundation in typed, object-oriented, and script-based languages.',
      skills: [
        { name: 'Java', hot: true },
        { name: 'Python', hot: true },
        { name: 'JavaScript (ES6+)', hot: true },
        { name: 'TypeScript', hot: false },
        { name: 'SQL', hot: false }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      badge: 'UI/UX',
      icon: <Layout size={26} className="text-accent" />,
      description: 'Crafting responsive, high-performance web applications and interactive client interfaces.',
      skills: [
        { name: 'React.js', hot: true },
        { name: 'Angular', hot: false },
        { name: 'Tailwind CSS', hot: true },
        { name: 'HTML5 & CSS3', hot: false },
        { name: 'Bootstrap', hot: false },
        { name: 'Framer Motion', hot: false },
        { name: 'Responsive Web Design', hot: false }
      ]
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      badge: 'Systems',
      icon: <Server size={26} className="text-accent" />,
      description: 'Designing modular microservices, RESTful endpoints, and secure auth systems.',
      skills: [
        { name: 'Node.js', hot: true },
        { name: 'Express.js', hot: true },
        { name: 'Python (Flask)', hot: true },
        { name: 'Java (Javalin)', hot: false },
        { name: 'REST API Design', hot: true },
        { name: 'JWT Authentication', hot: false },
        { name: 'Role-Based Access (RBAC)', hot: false }
      ]
    },
    {
      id: 'databases',
      title: 'Databases & Cloud',
      badge: 'Data Layer',
      icon: <Database size={26} className="text-accent" />,
      description: 'Modeling schema structures, relational integrity, and document storage.',
      skills: [
        { name: 'MongoDB', hot: true },
        { name: 'MongoDB Atlas', hot: true },
        { name: 'MySQL', hot: true },
        { name: 'Relational Database Design', hot: false },
        { name: 'DBMS Indexing & Queries', hot: false }
      ]
    },
    {
      id: 'cs',
      title: 'Computer Science',
      badge: 'Academics',
      icon: <Cpu size={26} className="text-accent" />,
      description: 'Core concepts driving robust engineering, scalability, and algorithmic thinking.',
      skills: [
        { name: 'Data Structures & Algorithms', hot: true },
        { name: 'Object-Oriented Programming (OOP)', hot: true },
        { name: 'Operating Systems', hot: false },
        { name: 'Computer Networks', hot: false },
        { name: 'System Architecture', hot: false }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Engineering',
      badge: 'Workflow',
      icon: <Terminal size={26} className="text-accent" />,
      description: 'Developer tooling, version control, API testing, and code quality workflows.',
      skills: [
        { name: 'Git & GitHub', hot: true },
        { name: 'Postman', hot: true },
        { name: 'VS Code', hot: false },
        { name: 'MySQL Workbench', hot: false },
        { name: 'API Testing & Debugging', hot: false },
        { name: 'Code Review & Collaboration', hot: false }
      ]
    }
  ];

  const filterTabs = [
    { label: 'All Skills', id: 'all' },
    { label: 'AI & ML', id: 'ai-ml' },
    { label: 'Languages', id: 'languages' },
    { label: 'Frontend', id: 'frontend' },
    { label: 'Backend', id: 'backend' },
    { label: 'Databases', id: 'databases' },
    { label: 'CS & Tools', id: 'tools-cs' },
  ];

  const filteredCategories = categories.filter(cat => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'tools-cs') return cat.id === 'cs' || cat.id === 'tools';
    return cat.id === activeFilter;
  });

  return (
    <section className="py-28 bg-bgSecondary/40 relative" id="skills">
      {/* Subtle background ambient blur */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accentSecondary/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle 
          title="Technical Arsenal." 
          subtitle="Skills & Competencies" 
          className="items-center text-center mb-10" 
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeFilter === tab.id
                  ? 'bg-accent text-white shadow-[0_2px_15px_rgba(255,107,0,0.4)]'
                  : 'bg-cardBg/80 border border-glassBorder text-textSecondary hover:text-textPrimary hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Categories */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="h-full"
              >
                <div className="bg-cardBg border border-glassBorder rounded-3xl p-7 h-full flex flex-col hover:border-accent/30 transition-all duration-300 group shadow-lg">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      {category.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-textPrimary mb-2">
                    {category.title}
                  </h3>
                  
                  <p className="text-textSecondary text-xs leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {category.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className={`text-xs font-medium py-1.5 px-3 rounded-lg border transition-all duration-200 flex items-center gap-1.5 ${
                          skill.hot 
                            ? 'bg-accent/10 border-accent/30 text-white font-semibold shadow-[0_0_10px_rgba(255,107,0,0.1)]' 
                            : 'bg-bgPrimary border-glassBorder text-textSecondary hover:text-textPrimary hover:border-white/20'
                        }`}
                      >
                        {skill.hot && <Sparkles size={11} className="text-accent" />}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Highlights summary bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-cardBg/60 border border-glassBorder rounded-2xl p-6 flex flex-wrap items-center justify-between gap-6 backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-textPrimary">Industry-Ready Practical Knowledge</p>
              <p className="text-xs text-textSecondary">Full-Stack development, AI/ML pipeline creation & software engineering best practices</p>
            </div>
          </div>
          <a 
            href="./Sohan_Pagade_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-semibold text-accent hover:text-accentSecondary inline-flex items-center gap-1.5 transition-colors"
          >
            Review Full Resume & Certifications &rarr;
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
