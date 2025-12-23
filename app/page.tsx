import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-200 font-sans w-full overflow-x-hidden selection:bg-orange-500 selection:text-white">
      <Header />
      <main className="w-full">
        <Hero />
        <Timeline />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
