import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { fadeInUp, slideIn } from "@/lib/animations";

interface MessageItemProps {
  content: string;
  role: "user" | "assistant";
}

export function MessageItem({ content, role }: MessageItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className={`flex gap-3 ${
        role === "user" ? "flex-row-reverse" : "flex-row"
      } items-start mb-4 group`}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Avatar className={`${
          role === "assistant" ? "bg-primary" : "bg-secondary"
        } h-8 w-8 ring-2 ring-offset-2 ring-offset-background ${
          role === "assistant" ? "ring-primary" : "ring-secondary"
        }`}>
          {role === "assistant" ? (
            <Bot className="h-4 w-4 text-primary-foreground" />
          ) : (
            <User className="h-4 w-4" />
          )}
        </Avatar>
      </motion.div>

      <motion.div
        variants={slideIn}
        whileHover={{ scale: 1.01 }}
        className="flex-1 max-w-[80%]"
      >
        <Card className={`p-4 group-hover:shadow-lg transition-all duration-300 ${
          role === "assistant"
            ? "bg-card text-card-foreground"
            : "bg-primary text-primary-foreground"
        }`}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-sm leading-relaxed whitespace-pre-wrap"
          >
            {content}
          </motion.p>
        </Card>
      </motion.div>
    </motion.div>
  );
}