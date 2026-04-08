import { MessageCircle } from "lucide-react";
import { useI18n } from "@/hooks/use-i18n";

interface WhatsAppBubbleProps {
  visible: boolean;
}

const WhatsAppBubble = ({ visible }: WhatsAppBubbleProps) => {
  const { t } = useI18n();

  return (
    <a
      href="https://wa.me/573001234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0)",
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-label={t.whatsapp.aria}
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
    </a>
  );
};

export default WhatsAppBubble;
