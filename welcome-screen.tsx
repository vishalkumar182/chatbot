"use client";

import { motion } from "framer-motion";
import { Bot, MessageSquare, Sparkles, Zap } from "lucide-react";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

export function WelcomeScreen() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="h-full flex flex-col items-center justify-center p-6 text-center"
    >
      <motion.div
        variants={scaleIn}
        whileHover={{ scale: 1.1 }}
        className="mb-8"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
          <Bot className="w-10 h-10 text-white" />
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="max-w-md mx-auto">
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          Welcome to AI Chat Assistant
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-muted-foreground mb-8 text-lg"
        >
          Your intelligent conversation partner
        </motion.p>

        <motion.div 
          variants={fadeInUp}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          {[
            { icon: MessageSquare, text: "Natural Conversations" },
            { icon: Sparkles, text: "Creative Responses" },
            { icon: Zap, text: "Lightning Fast" },
            { icon: Bot, text: "Always Learning" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-xl bg-secondary/50 backdrop-blur-sm"
            >
              <feature.icon className="w-6 h-6 mb-2 mx-auto text-purple-500" />
              <p className="text-sm font-medium">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-muted-foreground text-sm"
        >
          Start typing below to begin your conversation
        </motion.p>
      </motion.div>
    </motion.div>
  );
}