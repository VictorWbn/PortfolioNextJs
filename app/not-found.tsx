import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black flex flex-col items-center justify-center">
      {/* Nyan Cat en plein écran */}
      <img 
        src="/nyancat.gif" 
        alt="404 Nyan Cat" 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      
      {/* Contenu par-dessus */}
      <div className="relative z-10 text-center p-8 bg-black/60 backdrop-blur-sm rounded-xl border border-neutral-800">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-8">Oups ! Cette page s'est perdue dans l'espace.</p>
        <Link 
          href="/"
          className="px-6 py-3 bg-orange-600 text-white font-bold rounded hover:bg-orange-700 transition-all"
        >
          Retour sur Terre
        </Link>
      </div>
    </div>
  );
}
