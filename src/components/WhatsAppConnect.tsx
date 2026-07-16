import { useRef } from "react";

const WhatsAppConnect = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const whatsappUrl =
    "https://wa.me/916291543493?text=Hi%20Rupayan%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.";

  const handleMouseEnter = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    audioRef.current.play().catch(() => {
      // Browser may block audio before first user interaction
    });
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/my_intro.mp3"
        preload="auto"
      />

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-connect"
        aria-label="Connect with Rupayan on WhatsApp"
        onMouseEnter={handleMouseEnter}
      >
        <svg
          className="connect-text-circle"
          viewBox="0 0 160 160"
          aria-hidden="true"
        >
          <defs>
            <path
              id="connectCirclePath"
              d="
                M 80,80
                m -58,0
                a 58,58 0 1,1 116,0
                a 58,58 0 1,1 -116,0
              "
            />
          </defs>

          <text>
            <textPath href="#connectCirclePath" startOffset="0%">
              WEB DEVELOPMENT • GHL DEVELOPMENT • AUTOMATION •
            </textPath>
          </text>
        </svg>

        <div className="connect-center">
          <span>
            Let's
            <br />
            Connect
          </span>
        </div>
      </a>
    </>
  );
};

export default WhatsAppConnect;