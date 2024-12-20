import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "529993568688"; // Tu número de teléfono
  const message = "¡Hola Geovanni! Me interesa contactarte...";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />

      {/* Tooltip */}
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 whitespace-nowrap">
        ¡Contáctame!
      </span>
    </button>
  );
};

export default WhatsAppButton;
