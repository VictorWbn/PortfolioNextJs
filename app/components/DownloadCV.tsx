'use client';

import DownloadIcon from '@mui/icons-material/Download';

const DownloadCV = () => {
  return (
    <a 
      href="/CV_Victor_Wybon.pdf" 
      download="CV_Victor_Wybon.pdf"
      className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 text-white font-medium rounded hover:bg-neutral-700 hover:text-orange-500 transition-all border border-neutral-700 hover:border-orange-500 group"
    >
      <DownloadIcon className="group-hover:animate-bounce" />
      Télécharger mon CV
    </a>
  );
};

export default DownloadCV;
