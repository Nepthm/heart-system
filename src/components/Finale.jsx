import { useState } from 'react';
import { fire } from '../utils.js';
import Heart from './Heart.jsx';
import SectionHead from './SectionHead.jsx';

export default function Finale() {
  const [n, setN] = useState(0);
  const msg =
    n === 0
      ? 'Ketuk hatinya, ada yang ingin kusampaikan.'
      : n < 5
        ? 'Aku sayang kamu.'
        : n < 12
          ? 'Sayangku makin banyak setiap kamu mengetuknya.'
          : 'Terima kasih sudah ada. Selamat ulang tahun, sekali lagi.';

  return (
    <section className="max-w-5xl mx-auto py-14 md:py-20 text-center">
      <SectionHead eyebrow="Satu hal lagi" title="Ketuk hatiku" />
      <button
        type="button"
        className="heart-btn"
        aria-label="Ketuk hati"
        onClick={(e) => {
          setN(n + 1);
          fire(e, 16 + Math.min(n, 20));
        }}
      >
        <Heart size={190} color="#d63a68" className="beat" style={{ filter: 'drop-shadow(0 18px 18px rgba(214,58,104,.35))' }} />
      </button>
      <p className="mt-6 font-display italic font-semibold text-3xl md:text-4xl text-ink max-w-lg mx-auto text-balance" aria-live="polite">
        {msg}
      </p>
      {n > 0 ? <p className="mt-2 text-sm text-ink/60">{n} kali kamu mengetuk hatiku</p> : null}
    </section>
  );
}
