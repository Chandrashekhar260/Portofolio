import { motion } from 'framer-motion'
import { Code, Palette, Database, GitBranch, Brain, Server } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

const About = () => {
  const stats = [
    { label: 'CGPA', value: '8.97', icon: Code },
    { label: 'Projects', value: '4+', icon: GitBranch },
    { label: 'Technologies', value: '20+', icon: Palette },
    { label: 'Hackathons', value: '1', icon: Brain },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Passionate about building innovative solutions and learning new technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="w-64 h-64 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Code size={48} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                      Full Stack Developer
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Building the future, one line at a time
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg"
              >
                <Brain size={24} className="text-purple-500" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg"
              >
                <Database size={24} className="text-pink-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                  Who I Am
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {portfolioData.personal.summary}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                  What I Do
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <Code size={20} className="text-purple-500" />
                    <span className="text-slate-700 dark:text-slate-300">Frontend Development</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <Server size={20} className="text-pink-500" />
                    <span className="text-slate-700 dark:text-slate-300">Backend Development</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <Database size={20} className="text-blue-500" />
                    <span className="text-slate-700 dark:text-slate-300">Database Design</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <Brain size={20} className="text-green-500" />
                    <span className="text-slate-700 dark:text-slate-300">AI Integration</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl"
                  >
                    <stat.icon size={24} className="mx-auto mb-2 text-purple-500" />
                    <div className="text-2xl font-bold text-slate-800 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
