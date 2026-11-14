import { CONFIG } from '../config.js';
import Bouquet from './Bouquet.jsx';
import Heart from './Heart.jsx';

export default function Hero({ onStart }) {
  return (
    <section className="relative max-w-5xl mx-auto pt-44 pb-16 md:pt-32 md:pb-24 text-center">
      <Bouquet className="-left-12 -top-4 md:-left-6 md:top-0" />
      <Bouquet className="-right-12 -top-4 md:-right-6 md:top-0" flip />
      <div className="absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <Heart size={380} color="#ffe1ea" className="beat" />
      </div>
      <div className="relative">
        <p className="rise text-xs md:text-sm font-extrabold tracking-[.3em] uppercase text-rosy-deep">
          Untuk yang paling spesial
        </p>
        <h1 className="rise d1 mt-4 leading-none">
          <span className="block font-script text-[3.3rem] sm:text-7xl md:text-8xl text-rosy text-balance">
            Selamat Ulang Tahun
          </span>
          <span className="block font-display italic font-semibold text-5xl sm:text-6xl md:text-8xl text-ink mt-3">
            {CONFIG.name}
          </span>
        </h1>
        <p className="rise d2 mt-6 max-w-md mx-auto text-base md:text-lg text-ink/80">{CONFIG.intro}</p>
        <div className="rise d3 mt-9 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button type="button" className="btn" onClick={onStart}>
            <Heart size={18} /> Mulai kejutannya
          </button>
        </div>
      </div>
    </section>
  );
}
