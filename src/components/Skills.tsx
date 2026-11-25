import { motion } from 'framer-motion'
import { Code, Palette, Database, GitBranch, Brain, Server, Terminal, FileCode, Globe } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: portfolioData.skills.languages,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frontend',
      icon: Palette,
      skills: portfolioData.skills.frontend,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Backend & AI',
      icon: Server,
      skills: portfolioData.skills.backend,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: portfolioData.skills.databases,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Tools',
      icon: Terminal,
      skills: portfolioData.skills.tools,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Core CS',
      icon: Brain,
      skills: portfolioData.skills.coreCS,
      color: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover-lift"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="skill-category-title">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-full shadow-lg">
            <Globe size={20} className="text-purple-500" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              Always learning new technologies and best practices
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
