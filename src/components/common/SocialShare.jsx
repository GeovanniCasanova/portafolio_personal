import { useState } from "react";
import {
  Facebook,
  Instagram,
  Share2,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";

const SocialShare = () => {
  const [copied, setCopied] = useState(false);
  const portfolioUrl =
    "https://geovannicasanova.github.io/portafolio_personal/";
  const shareText =
    "Te comparto mi portafolio profesional como Desarrollador Full Stack 👨‍💻";

  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      portfolioUrl
    )}`,
    instagram: "https://www.instagram.com/daniel.casanova13/", // Tu perfil de Instagram
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      shareText + " " + portfolioUrl
    )}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(portfolioUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        <button className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors">
          <Share2 className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-full right-0 mb-2 transform scale-0 group-hover:scale-100 transition-transform origin-bottom-right">
          <div className="bg-gray-800 rounded-lg shadow-xl p-4 flex flex-col gap-3 min-w-[200px]">
            {/* Facebook */}
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:bg-gray-700 p-2 rounded-lg transition-colors"
            >
              <Facebook className="w-5 h-5 text-blue-500" />
              <span>Compartir en Facebook</span>
            </a>

            {/* Instagram */}
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:bg-gray-700 p-2 rounded-lg transition-colors"
            >
              <Instagram className="w-5 h-5 text-pink-500" />
              <span>Sígueme en Instagram</span>
            </a>

            {/* WhatsApp */}
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:bg-gray-700 p-2 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-green-500" />
              <span>Compartir por WhatsApp</span>
            </a>

            {/* Copiar Link */}
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-3 text-white hover:bg-gray-700 p-2 rounded-lg transition-colors"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5 text-gray-400" />
              )}
              <span>{copied ? "Link copiado!" : "Copiar link"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
