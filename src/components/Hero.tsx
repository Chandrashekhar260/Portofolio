import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">{portfolioData.personal.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-6"
            >
              {portfolioData.personal.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl"
            >
              {portfolioData.personal.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary flex items-center gap-2"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary flex items-center gap-2"
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
              >
                <Github size={24} className="text-slate-600 dark:text-slate-300" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
              >
                <Linkedin size={24} className="text-slate-600 dark:text-slate-300" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
              >
                <Mail size={24} className="text-slate-600 dark:text-slate-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 md:w-80 md:h-80 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">CS</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                      {portfolioData.personal.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {portfolioData.personal.title}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Open to Work
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-purple-500" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {portfolioData.personal.location}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
