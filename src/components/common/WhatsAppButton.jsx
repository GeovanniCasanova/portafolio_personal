import whatsappIcon from "@/assets/icons/Digital_Glyph_Green.svg";

const WhatsAppButton = () => {
  const phoneNumber = "529991328933";
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
      className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-6 h-6"
        width="24"
        height="24"
      />

      {/* Tooltip ajustado para alinearse desde la izquierda */}
      <span className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        ¡Contáctame por WhatsApp!
        <span className="absolute bottom-0 left-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-black/90"></span>
      </span>
    </button>
  );
};

export default WhatsAppButton;
