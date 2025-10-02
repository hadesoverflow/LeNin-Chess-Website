import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import DiscordIcon from './icons/DiscordIcon';
import YoutubeIcon from './icons/YoutubeIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-14 text-center text-gray-600 dark:text-gray-400">
        
        {/* Logo cực to */}
        <a
          href="#home"
          className="flex justify-center items-center mb-10 hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/logo/logo.png"
            alt="LeNin Chess Logo"
            className="w-48 h-48 object-contain drop-shadow-2xl"
          />
        </a>

        <p className="mb-6 text-base md:text-lg">
          Theo dõi chúng tôi trên các mạng xã hội để không bỏ lỡ thông tin mới nhất!
        </p>

        {/* Social icons */}
        <div className="flex justify-center space-x-10 mb-10">
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-500 dark:text-gray-400 hover:text-brand-gold transition-colors duration-300"
          >
            <FacebookIcon className="h-9 w-9" />
          </a>
          <a
            href="#"
            aria-label="Discord"
            className="text-gray-500 dark:text-gray-400 hover:text-brand-gold transition-colors duration-300"
          >
            <DiscordIcon className="h-9 w-9" />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="text-gray-500 dark:text-gray-400 hover:text-brand-gold transition-colors duration-300"
          >
            <YoutubeIcon className="h-9 w-9" />
          </a>
        </div>

        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} LeNin Chess. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
