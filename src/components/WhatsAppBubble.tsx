import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface WhatsAppBubbleProps {
  visible: boolean;
}

const WhatsAppBubble = ({ visible }: WhatsAppBubbleProps) => (
  <AnimatePresence>
    {visible && (
      <motion.a
        href="https://wa.me/573001234567"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </motion.a>
    )}
  </AnimatePresence>
);

export default WhatsAppBubble;
