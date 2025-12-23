'use client';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { GITHUB_URL, LINKEDIN_URL } from '../const/links';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="w-full px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="font-bold text-2xl tracking-tighter text-white">
          VW<span className="text-orange-500">.</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-orange-500 transition-colors">À propos</a>
          <a href="#timeline" className="hover:text-orange-500 transition-colors">Parcours</a>
          <a href="#projects" className="hover:text-orange-500 transition-colors">Projets</a>
          <a href="#skills" className="hover:text-orange-500 transition-colors">Compétences</a>
        </nav>
        <div className="flex gap-4">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
            <LinkedInIcon />
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
