import React from "react";
import { assets } from "../assets/assets.js";

export const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.logo} alt="" width={150} />
      <p className="flex-1 border-l border-white pl-4 text-sm text-white max-sm:hidden">
        Copyright @ShrikrishnaSutar.dev | All right Reserved.
      </p>
      <div className="flex gap-2.5 ">
        <a className="hover:scale-105 transition-all duration-500"
          href="https://www.linkedin.com/in/shrikrishna-sutar-3b601524b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.linkedin} alt="LinkedIn" width={35} />
        </a>
        <a className="hover:scale-105 transition-all duration-500"
          href="https://wa.me/+91 9921939559"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.whatsapp} alt="WhatsApp" width={35} />
        </a>
        <a className="hover:scale-105 transition-all duration-500"
          href="https://www.instagram.com/sutarshrikrishna/?igsh=N2QxbmoyaWhoeWNu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.instagram_icon} alt="Instagram" width={35} />
        </a>
      </div>
    </div>
  );
};
export default Footer;