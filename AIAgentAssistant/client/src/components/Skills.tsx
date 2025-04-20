import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import {
  Lightbulb,
  Users,
  Clock,
  Sparkles,
} from "lucide-react";

// Technical skills data
const technicalSkills = [
  { name: "HTML & CSS", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "C++", percentage: 85 },
  { name: "Python", percentage: 80 },
  { name: "React", percentage: 75 },
];

// Professional skills data
const professionalSkills = [
  {
    name: "Problem Solving",
    icon: <Lightbulb className="h-8 w-8" />,
    description: "Finding elegant solutions to complex problems",
    bgColor: "bg-emerald-500 bg-opacity-20 text-emerald-500",
  },
  {
    name: "Teamwork",
    icon: <Users className="h-8 w-8" />,
    description: "Collaborating effectively with cross-functional teams",
    bgColor: "bg-primary bg-opacity-20 text-primary",
  },
  {
    name: "Time Management",
    icon: <Clock className="h-8 w-8" />,
    description: "Delivering projects on schedule and within scope",
    bgColor: "bg-purple-500 bg-opacity-20 text-purple-500",
  },
  {
    name: "Attention to Detail",
    icon: <Sparkles className="h-8 w-8" />,
    description: "Ensuring high quality through careful analysis and precision",
    bgColor: "bg-pink-500 bg-opacity-20 text-pink-500",
  },
];

export default function Skills() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 section-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I specialize in, constantly improving and expanding my skillset.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Technical Skills</h3>

            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-primary h-2 rounded-full skill-bar"
                      initial={{ width: 0 }}
                      variants={{
                        visible: {
                          width: `${skill.percentage}%`,
                          transition: { duration: 1, delay: 0.1 * index },
                        },
                      }}
                      animate={controls}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Professional Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {professionalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex flex-col items-center p-5 bg-white rounded-lg shadow-md transition-transform hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 flex items-center justify-center rounded-full ${skill.bgColor} mb-4`}
                  >
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{skill.name}</h4>
                  <p className="text-center text-gray-600 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
