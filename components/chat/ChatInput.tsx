"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  isLoading?: boolean;
  placeholder?: string;
}

export function ChatInput({
  onSend,
  disabled = false,
  isLoading = false,
  placeholder = "Écrivez votre message...",
}: ChatInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
    }
  }, [value]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (value.trim() && !disabled && !isLoading) {
      onSend(value.trim());
      setValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div
        className={cn(
          "flex items-end gap-3",
          "bg-white rounded-2xl",
          "border border-gray-200",
          "p-3",
          "transition-colors duration-200",
          "focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100"
        )}
      >
        {/* Textarea */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled || isLoading}
          rows={1}
          className={cn(
            "flex-1 resize-none",
            "bg-transparent text-gray-900 placeholder:text-gray-400",
            "text-base leading-relaxed",
            "focus:outline-none",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "min-h-[24px] max-h-[150px]"
          )}
        />

        {/* Send button */}
        <motion.button
          type="submit"
          disabled={!value.trim() || disabled || isLoading}
          className={cn(
            "flex-shrink-0 w-10 h-10 rounded-xl",
            "flex items-center justify-center",
            "transition-colors duration-200",
            value.trim() && !disabled && !isLoading
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          )}
          whileHover={value.trim() && !disabled && !isLoading ? { scale: 1.05 } : undefined}
          whileTap={value.trim() && !disabled && !isLoading ? { scale: 0.95 } : undefined}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <ArrowUp className="w-5 h-5" />
          )}
        </motion.button>
      </div>

      {/* Hint text */}
      <p className="mt-2 text-xs text-gray-400 text-center">
        Entrée pour envoyer
      </p>
    </form>
  );
}

export default ChatInput;
