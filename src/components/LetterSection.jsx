import { useEffect, useState } from 'react';
import { CONFIG, LETTER_TEXT } from '../config.js';
import { REDUCE, fire } from '../utils.js';
import Heart from './Heart.jsx';
import SectionHead from './SectionHead.jsx';

export default function LetterSection() {
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [n, setN] = useState(0);
  const total = LETTER_TEXT.length;
  const done = n >= total;

  useEffect(() => {
    if (!open) return undefined;
    const t = setTimeout(() => setStarted(true), 1100);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!started) return undefined;
    if (REDUCE) {
      setN(total);
      return undefined;
    }
    const id = setInterval(() => {
      setN((v) => {
        if (v >= total) {
          clearInterval(id);
          return v;
        }
        return Math.min(total, v + 2);
      });
    }, 34);
    return () => clearInterval(id);
  }, [started, total]);

  function openEnvelope(e) {
    if (!open) {
      setOpen(true);
      fire(e, 22);
    }
  }

  return (
    <section className="max-w-5xl mx-auto py-14 md:py-20">
      <SectionHead eyebrow="Dari hatiku" title="Sepucuk surat untukmu" sub={open ? 'Baca pelan-pelan ya.' : 'Ketuk amplopnya untuk membuka.'} />
      <button
        type="button"
        className={`env${open ? ' open' : ''}`}
        onClick={openEnvelope}
        aria-expanded={open}
        aria-label={open ? 'Amplop sudah terbuka' : 'Buka amplop surat'}
      >
        <span className="env-back" />
        <span className="env-paper">
          <span className="block text-center pt-3 font-script text-3xl text-rosy">Untukmu</span>
        </span>
        <span className="env-front" />
        <span className="env-flap" />
        <span className="env-seal">
          <Heart size={22} />
        </span>
      </button>

      {open ? (
        <article className="letter rise mx-auto max-w-2xl mt-10" style={{ animationDelay: '.7s' }}>
          <div className="relative">
            <p className="txt invisible" aria-hidden="true">
              {LETTER_TEXT}
            </p>
            <p className="txt absolute inset-0" aria-label={LETTER_TEXT}>
              {LETTER_TEXT.slice(0, n)}
              {!done ? <span className="caret" /> : null}
            </p>
          </div>
          {done ? (
            <p className="rise text-right mt-5 mb-0 leading-tight">
              <span className="block font-display italic font-semibold text-xl text-ink/80">Dengan cinta,</span>
              <span className="block font-script text-4xl text-rosy mt-1">{CONFIG.sender}</span>
            </p>
          ) : null}
          {started && !done ? (
            <div className="mt-4 text-right">
              <button
                type="button"
                className="btn btn-soft"
                style={{ padding: '.45rem 1rem', fontSize: '.9rem' }}
                onClick={() => setN(total)}
              >
                Tampilkan semua
              </button>
            </div>
          ) : null}
        </article>
      ) : null}
    </section>
  );
}
