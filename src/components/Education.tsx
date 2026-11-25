import { motion } from 'framer-motion'
import { GraduationCap, Award, Trophy } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Education & Achievements
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My academic journey and accomplishments
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={32} className="text-purple-500" />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover-lift"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      {edu.field && (
                        <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                          {edu.field}
                        </p>
                      )}
                      <p className="text-slate-600 dark:text-slate-400 mb-2">
                        {edu.institution}
                      </p>
                      {edu.year && (
                        <p className="text-sm text-slate-500 dark:text-slate-500">
                          {edu.year}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      {edu.cgpa && (
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                          {edu.cgpa}
                        </div>
                      )}
                      {edu.percentage && (
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                          {edu.percentage}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Achievements */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Trophy size={32} className="text-yellow-500" />
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Achievements
                </h3>
              </div>

              <div className="space-y-4">
                {portfolioData.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card hover-lift border-l-4 border-yellow-500"
                  >
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award size={32} className="text-blue-500" />
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Certifications
                </h3>
              </div>

              <div className="space-y-4">
                {portfolioData.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card hover-lift"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">
                          {cert.issuer}
                        </p>
                      </div>
                      <span className="text-sm text-slate-500 dark:text-slate-500">
                        {cert.year}
                      </span>
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

export default Education
