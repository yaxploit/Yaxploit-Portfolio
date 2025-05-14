import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: [
      'Led development of enterprise-level applications using React and Node.js',
      'Implemented CI/CD pipelines and automated testing',
      'Mentored junior developers and conducted code reviews',
      'Optimized application performance and reduced load times by 40%'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description: [
      'Developed and maintained multiple client projects',
      'Collaborated with designers to implement responsive UIs',
      'Integrated third-party APIs and services',
      'Improved code quality and reduced technical debt'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'Startup',
    period: '2019 - 2020',
    description: [
      'Built responsive web applications using React',
      'Worked closely with UX designers',
      'Implemented modern frontend architectures',
      'Participated in agile development processes'
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-accent">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-accent/20 hover:border-accent/40 transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <p className="text-accent">{experience.company}</p>
                <p className="text-gray-400 text-sm">{experience.period}</p>
              </div>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {experience.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 