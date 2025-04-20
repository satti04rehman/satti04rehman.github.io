import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import useScroll from "@/hooks/use-scroll";

export default function Hero() {
  const { scrollToSection } = useScroll();

  return (
    <section id="home" className="pt-32 pb-20 bg-white section-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="text-primary">Abdul Rehman</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-600 mb-6">Software Engineer / Web Developer</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              I am a passionate and dedicated software engineer specializing in web development, 
              with expertise in C++, Python, JavaScript, and more. I create impactful digital 
              solutions that address real-world challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Contact Me
              </Button>
              <Button 
                onClick={() => scrollToSection("projects")}
                size="lg"
                variant="outline"
                className="text-gray-700 border-gray-300 hover:bg-gray-50"
              >
                View My Work
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-gray-100 shadow-xl">
              <img 
                src={`${window.location.origin}/Capture.PNG`}
                alt="Abdul Rehman"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
