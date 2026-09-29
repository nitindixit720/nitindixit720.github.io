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
            'Designed and built an API automation framework from scratch using Java and REST Assured with a BDD (Cucumber) approach for end-to-end validation of backend services',
            'Integrated JaCoCo to measure code coverage of the test suites and identify untested areas of the services',
            'Extended the framework to support performance testing (load, stress, and endurance) by simulating concurrent requests with REST Assured',
            'Developed custom graphical reports using Chart.js for regression and performance runs, including trend reports that track performance across executions',
            'Implemented Extent Reports for detailed regression test reporting',
            'Created parameterized Jenkins CI/CD jobs to run functional and performance suites. Users select the test type, suite (e.g., smoke), environment, and performance parameters (users, thread count, ramp-up time, duration), and three reports are emailed automatically after each run',
            'Integrated the BDD framework with qTest to sync feature file test cases and execution results automatically, marking failures and attaching logs and assertion details as comments',
            'Identified, authored, and executed manual test cases for API services in qTest to ensure complete functional coverage',
          ],
        },
        {
          name: 'UBS',
          duration: 'Feb 2025 – Oct 2025',
          achievements: [
            'Contributed to the design and enhancement of the Selenium WebDriver + Java automation framework, developing scalable and reusable test cases',
            'Validated client investment exhibits for a pilot wealth-management product, covering fund allocation across mutual funds and equities, calculations, and disclaimers, where accuracy directly drove customer investment decisions',
            'Designed and executed combinatorial test scenarios across investment types and portfolio combinations to ensure end-to-end data accuracy',
            'Authored and ran manual test cases in Squash for full functional coverage while the product was unstable, and built the automation suite in parallel',
            'Collaborated with Product and Development teams to clarify incomplete JIRA stories and turn them into detailed test scenarios and acceptance criteria',
            'Performed RCA on production defects and tracked recurring issue trends to drive preventive fixes and improve release quality',
            'Built strong domain knowledge in banking and wealth-management workflows, enabling accurate validation of business rules',
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
        'Designed and implemented a robust Selenium WebDriver-based framework, resulting in a 50% reduction in manual testing effort',
        'Led a team of 4 QA Engineers, prioritizing tasks and mentoring junior members, which increased team productivity by 30%',
        'Integrated automated testing into CI/CD pipelines with Jenkins and GitHub Actions, improving build and deployment efficiency by 40%',
        'Spearheaded the adoption of API automation testing, increasing test coverage by 25% and identifying critical backend issues',
        'Developed comprehensive QA documentation that outlined testing procedures and protocols, increasing clarity and consistency across the team; this initiative resulted in a notable 40% decrease in defect reports over six months',
        'Established a robust yearly QA roadmap that included targeted training sessions and resource allocation, leading to an increase in defect detection rates by over 50% and elevating overall quality standards across projects',
        'Monitored bug metrics and conducted Root Cause Analysis (RCA) for production bugs',
        'Executed cross-browser and cross-device testing for UI consistency',
      ],
    },
    {
      company: 'Dkatalis',
      location: 'Pune, MH',
      role: 'QA Engineer',
      duration: 'Apr 2021 – Sep 2021',
      projects: [
        {
          name: 'Jago Admin Portal (Digital Banking App)',
          stack: 'JIRA, Postman',
          achievements: [
            'Tested the Jago admin portal, which the Ops team uses to manage digital banking customers',
            'Analyzed requirements and wrote and executed test cases to find usability and performance issues',
            'Validated backend APIs using Postman to verify customer data and portal workflows',
            'Conducted exploratory testing, designing and executing tests at the same time to uncover edge-case defects',
            'Verified multi-device and cross-browser consistency across supported platforms',
            'Took part in test planning meetings and shared detailed defect reports with improvement recommendations',
          ],
        },
      ],
    },
    {
      company: 'AgroStar',
      location: 'Pune, MH',
      role: 'SDET-1',
      duration: 'Sep 2017 – Mar 2021',
      projects: [
        {
          name: 'Agri-Doctor Mobile App',
          stack: 'Appium, Java, Cucumber (BDD), Page Factory, Extent Reports',
          achievements: [
            "Designed and built a BDD mobile automation framework from scratch for AgroStar's farmer app, covering agri content, product catalog, and ordering flows",
            'Created reusable test steps using Page Factory and maintained the suite across app releases',
            'Deployed the framework to Jenkins for Continuous Testing (CT)',
          ],
        },
        {
          name: 'CRM Web Automation (Salesforce App)',
          stack: 'Selenium, Java, Cucumber (BDD), Page Factory, Extent Reports',
          achievements: [
            'Automated end-to-end CRM flows: create and edit farmer, add products to cart, apply offers and coupons, and place orders',
            'Wrote Cucumber scenarios in business-readable language to bridge technical and non-technical teams',
            'Estimated test effort and managed defects for the Salesforce CRM project in JIRA',
            'Ran regression suites for every build release, integrated with Jenkins CT and Extent Reports',
          ],
        },
        {
          name: 'Offers & Promotions API Automation',
          stack: 'Python, Requests, Lemon Cheesecake (LCC)',
          achievements: [
            'Automated CRM REST API test cases using Python Requests, with Lemon Cheesecake for suites, annotations, and reporting',
            'Integrated the API regression suite into Jenkins for Continuous Testing',
            'Analyzed, documented, and executed comprehensive test scenarios across web, mobile, and API layers',
          ],
        },
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

                {exp.projects ? (
                  <div className="space-y-6">
                    {exp.projects.map((project, pIdx) => (
                      <div key={pIdx} className={pIdx > 0 ? 'pt-6 border-t border-slate-700' : ''}>
                        <h4 className="text-lg font-semibold text-primary-400 mb-1">Project: {project.name}</h4>
                        <p className="text-sm text-slate-400 mb-3">{project.stack}</p>
                        <ul className="space-y-3">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-300">
                              <span className="text-primary-400 mt-1.5 flex-shrink-0">▹</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : exp.clients ? (
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
