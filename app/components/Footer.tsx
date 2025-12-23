'use client';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { GITHUB_URL, LINKEDIN_URL } from '../const/links';

const Footer = () => {
  return (
    <footer id="contact" className="w-full py-16 bg-black border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">Victor Wybon</h3>
          <p className="text-gray-500">Développeur Fullstack & Passionné</p>
        </div>

        <div className="flex flex-col gap-4 text-gray-400 text-sm">
          <a href="mailto:vwybon@orange.fr" className="flex items-center gap-3 hover:text-orange-500 transition-colors">
            <EmailIcon className="text-orange-600" /> vwybon@orange.fr
          </a>
          <div className="flex items-center gap-3">
            <PhoneIcon className="text-orange-600" /> 06 51 25 95 64
          </div>
          <div className="flex items-center gap-3">
            <LocationOnIcon className="text-orange-600" /> Bondues (59) - Véhiculé
          </div>
        </div>

        <div className="flex gap-4">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 rounded-full hover:bg-orange-600 hover:text-white transition-all">
            <LinkedInIcon />
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 rounded-full hover:bg-orange-600 hover:text-white transition-all">
            <GitHubIcon />
          </a>
        </div>

      </div>
      <div className="text-center text-gray-700 text-xs mt-12">
        © {new Date().getFullYear()} Victor Wybon. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
