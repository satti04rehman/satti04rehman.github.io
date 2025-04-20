import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Flappy Bird Game",
    description: "A 2D game developed using Python for my Software Engineering assignment.",
    tags: ["Python", "Game Development", "Software Engineering"],
    projectUrl: "#",
    codeUrl: "#",
    imageUrl: "",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "A dynamic e-commerce website with a focus on user experience and responsive design.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    projectUrl: "#",
    codeUrl: "#",
    imageUrl: "",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description: "A portfolio website showcasing my web development skills and projects.",
    tags: ["React", "Tailwind", "JavaScript"],
    projectUrl: "#",
    codeUrl: "#",
    imageUrl: "",
  },
];

const tagColorMap: Record<string, string> = {
  React: "bg-blue-100 text-blue-800",
  JavaScript: "bg-yellow-100 text-yellow-800",
  Python: "bg-green-100 text-green-800",
  "Game Development": "bg-purple-100 text-purple-800",
  "Software Engineering": "bg-pink-100 text-pink-800",
  HTML: "bg-red-100 text-red-800",
  CSS: "bg-indigo-100 text-indigo-800",
  PHP: "bg-green-100 text-green-800",
  Tailwind: "bg-indigo-100 text-indigo-800",
};

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 section-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of my latest work spanning web development, game development, and software engineering projects.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item} className="project-card">
              <Card className="h-full overflow-hidden">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className={`${tagColorMap[tag]} border-0`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <a
                    href={project.projectUrl}
                    className="text-primary hover:text-primary/80 font-medium transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" /> View Project
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="text-gray-700 border-gray-300 hover:bg-gray-50">
            View All Projects
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
