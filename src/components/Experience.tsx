import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      company: 'Synechron',
      location: 'Pune, MH',
      role: 'Lead QA Engineer',
      duration: 'Feb 2025 – Present',
      clients: [
        {
          name: 'TransAmerica',
          duration: 'Nov 2025 – Present',
          achievements: [
            'Identified and verified API test cases with the Product team, organizing test cases and test runs in qTest',
            'Built an API automation framework from scratch using Java, REST Assured, and BDD (Cucumber), with JaCoCo for code coverage',
            'Added performance testing (load, stress, and endurance) using concurrent REST Assured requests, with Chart.js trend reports',
            'Created parameterized Jenkins jobs for functional and performance runs, with automated email reporting (Extent and Chart.js)',
            'Integrated the framework with qTest to auto-sync test cases, execution status, and failure logs',
            'Used Kiro agentic AI for coding assistance, increasing productivity by up to 60%',
          ],
        },
        {
          name: 'UBS',
          duration: 'Feb 2025 – Oct 2025',
          achievements: [
            'Contributed to the design and enhancement of the Selenium WebDriver + Java automation framework, developing scalable and reusable test cases',
            'Authored and ran manual test cases using Squash, ensuring full functional coverage',
            'Built strong domain knowledge in banking processes, enabling accurate validation of business workflows',
            'Guided a 2-member QA team, fostering collaboration and improving delivery quality',
          ],
        },
      ],
    },
    {
      company: 'Vegrow',
      location: 'Pune, MH',
      role: 'Senior QA Engineer',
      duration: 'Oct 2021 – Jan 2025',
      achievements: [
        'Built and maintained Selenium-based automation framework, reducing manual regression effort by ~50%',
        'Expanded API automation coverage by ~25% using Rest Assured',
        'Integrated test suites with Jenkins and GitHub Actions, improving build stability by ~40%',
        'Executed cross-browser and cross-device testing for UI consistency',
        'Led and mentored a 4-member QA team with strong test strategy ownership',
      ],
    },
    {
      company: 'Dkatalis',
      location: 'Pune, MH',
      role: 'QA Engineer',
      duration: 'Apr 2021 – Sep 2021',
      achievements: [
        'Developed UI automation using Selenium and Java for responsive web applications',
        'Conducted exploratory testing to identify usability gaps and edge cases',
        'Performed multi-browser and multi-device validation',
        'Logged, tracked, and prioritized defects using JIRA',
      ],
    },
    {
      company: 'AgroStar',
      location: 'Pune, MH',
      role: 'Software Development Engineer in Test (SDET)',
      duration: 'Sep 2017 – Mar 2021',
      achievements: [
        'Designed and implemented automation frameworks with Selenium and Java',
        'Deployed automation pipelines on Jenkins for Continuous Testing',
        'Estimated test effort and managed defects for Salesforce CRM projects',
        'Executed regression testing for every build release',
        'Analyzed, documented, and executed comprehensive test scenarios',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Professional <span className="text-primary-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-16" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">{exp.company}</h3>
                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                      <Briefcase size={18} />
                      <span className="text-lg font-semibold text-slate-300">{exp.role}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-4 md:mt-0 md:text-right">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={18} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin size={18} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {exp.clients ? (
                  <div className="space-y-6">
                    {exp.clients.map((client, cIdx) => (
                      <div key={cIdx} className={cIdx > 0 ? 'pt-6 border-t border-slate-700' : ''}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-1">
                          <h4 className="text-lg font-semibold text-primary-400">Client: {client.name}</h4>
                          <span className="text-sm text-slate-400">{client.duration}</span>
                        </div>
                        <ul className="space-y-3">
                          {client.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-300">
                              <span className="text-primary-400 mt-1.5 flex-shrink-0">▹</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <span className="text-primary-400 mt-1.5 flex-shrink-0">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
