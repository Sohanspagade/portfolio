import { motion } from 'framer-motion';
import { Code2, Server, Database, Settings } from 'lucide-react';
import { Container } from '../UI/Container';
import { SectionTitle } from '../UI/SectionTitle';
import { Card } from '../UI/Card';

const Skills = () => {
  const categories = [
    {
      title: "Core Stack",
      icon: <Code2 size={28} className="text-accent" />,
      skills: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Java (Javalin)"]
    },
    {
      title: "Frontend Libraries",
      icon: <Layout size={28} className="text-accent" />,
      skills: ["Chart.js", "Recharts", "Axios", "Framer Motion", "Lucide React"]
    },
    {
      title: "Databases",
      icon: <Database size={28} className="text-accent" />,
      skills: ["MySQL", "SQLite"]
    },
    {
      title: "Tools & Config",
      icon: <Settings size={28} className="text-accent" />,
      skills: ["Git", "GitHub", "Cloudflare", "Domain Management"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="py-24 bg-bgSecondary/30" id="skills">
      <Container>
        <SectionTitle title="Technical Arsenal." subtitle="My Skills" className="items-center text-center mb-20" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card key={index} delay={index * 0.1} className="!p-8 h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-6">{category.title}</h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3 mt-auto"
              >
                {category.skills.map((skill, idx) => (
                  <motion.span 
                    key={idx}
                    variants={itemVariants}
                    className="py-1.5 px-3 rounded-md bg-bgPrimary border border-glassBorder text-textSecondary text-xs font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

// Need to import Layout since it wasn't in the original lucide-react import list for Skills
import { Layout } from 'lucide-react';

export default Skills;
