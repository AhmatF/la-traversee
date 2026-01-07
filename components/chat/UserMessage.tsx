"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface UserMessageProps {
  content: string;
  className?: string;
}

export function UserMessage({ content, className }: UserMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={cn("flex flex-col items-end", className)}
    >
      {/* Text message */}
      {content && (
        <div className="flex items-end gap-2 max-w-[80%]">
          <div
            className={cn(
              "px-4 py-3 rounded-2xl rounded-br-sm",
              "bg-blue-600 text-white",
              "text-base leading-relaxed"
            )}
          >
            <p className="whitespace-pre-wrap">{content}</p>
          </div>

          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
            <User className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default UserMessage;
