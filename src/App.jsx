import Ambient from './components/Ambient.jsx';
import Cake from './components/Cake.jsx';
import Finale from './components/Finale.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import Garden from './components/Garden.jsx';
import Hero from './components/Hero.jsx';
import LetterSection from './components/LetterSection.jsx';
import Reasons from './components/Reasons.jsx';
import { REDUCE, fire } from './utils.js';

export default function App() {

  function start(e) {
    fire(e, 28);
    const el = document.getElementById('kenangan');
    if (el) el.scrollIntoView({ behavior: REDUCE ? 'auto' : 'smooth', block: 'start' });
  }

  return (
    <>
      <Ambient />
      <main className="relative z-10">
        <Hero onStart={start} />
        <Gallery />
        <LetterSection />
        <Reasons />
        <Cake />
        <Garden />
        <Finale />
        <Footer />
      </main>
    </>
  );
}
