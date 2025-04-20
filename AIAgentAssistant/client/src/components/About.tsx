import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white section-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
              <img 
                src={`${window.location.origin}/Capture.PNG`}
                alt="Abdul Rehman"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded shadow-lg hidden md:block"
            >
              <p className="font-bold text-xl">Software Engineering Student</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-gray-600 mb-4 text-lg">
              I am a passionate and dedicated software engineer currently pursuing a Bachelor's degree in Software Engineering.
            </p>
            <p className="text-gray-600 mb-6">
              I have expertise in programming languages such as C++, Python, JavaScript, HTML, and CSS, 
              and I am experienced in web development, game development, and data structures. 
              I aim to create impactful digital solutions that address real-world challenges and improve user experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Education</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">BSc in Software Engineering</p>
                      <p className="text-sm text-gray-500">Arid Agriculture University Rawalpindi, Pakistan</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">FSc in Pre-Engineering (1st Division)</p>
                      <p className="text-sm text-gray-500">ICB G6/3 College Islamabad, Pakistan</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Experience</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Briefcase className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">Call Center Agent</p>
                      <p className="text-sm text-gray-500">4 months experience</p>
                      <p className="text-sm text-gray-500">Handled various campaigns, including ACA and FE</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white">
              Download CV
              <Download className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
