import { useState } from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function ResumeButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.a
            href="#"
            className={`fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center z-10 ${
              isHovered ? "animate-pulse" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 1.5,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FileDown className="h-6 w-6" />
          </motion.a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Download Resume</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
