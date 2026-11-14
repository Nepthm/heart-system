import { useState } from 'react';
import { HEART_D, fire } from '../utils.js';
import SectionHead from './SectionHead.jsx';

const CANDLE_X = [104, 132, 160, 188, 216];
const HEART_XS = [56, 102, 148, 194, 240];

export default function Cake() {
  const [lit, setLit] = useState([true, true, true, true, true]);
  const anyLit = lit.some(Boolean);

  function blowAll(e) {
    setLit(lit.map(() => false));
    fire(e, 30);
  }

  function toggle(i, e) {
    const next = lit.slice();
    next[i] = !next[i];
    setLit(next);
    if (next.every((v) => !v)) fire(e, 30);
  }

  return (
    <section className="max-w-5xl mx-auto py-14 md:py-20">
      <SectionHead eyebrow="Saatnya berdoa" title="Buat satu permohonan" sub="Pejamkan mata, ucapkan dalam hati, lalu tiup lilinnya." />
      <svg viewBox="0 0 320 300" className="w-full max-w-sm mx-auto block" role="group" aria-label="Kue ulang tahun dengan lima lilin">
        <defs>
          <linearGradient id="flameGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff3b0" />
            <stop offset="1" stopColor="#ff9a3c" />
          </linearGradient>
        </defs>
        <ellipse cx="160" cy="276" rx="150" ry="14" fill="#ffffff" />
        <ellipse cx="160" cy="276" rx="150" ry="14" fill="none" stroke="#ffc2d4" />
        <rect x="36" y="196" width="248" height="76" rx="18" fill="#ffc2d4" />
        <rect x="36" y="196" width="248" height="24" rx="18" fill="#ffffff" />
        <ellipse cx="68" cy="222" rx="11" ry="13" fill="#ffffff" />
        <ellipse cx="116" cy="224" rx="10" ry="11" fill="#ffffff" />
        <ellipse cx="204" cy="224" rx="10" ry="12" fill="#ffffff" />
        <ellipse cx="252" cy="222" rx="11" ry="14" fill="#ffffff" />
        {HEART_XS.map((x, i) => (
          <g key={i} transform={`translate(${x} 238) scale(0.78)`}>
            <path d={HEART_D} fill="#ffffff" opacity="0.9" />
          </g>
        ))}
        <rect x="76" y="136" width="168" height="66" rx="16" fill="#fb9bb8" />
        <rect x="76" y="136" width="168" height="20" rx="14" fill="#ffffff" />
        <ellipse cx="104" cy="158" rx="10" ry="12" fill="#ffffff" />
        <ellipse cx="160" cy="157" rx="10" ry="10" fill="#ffffff" />
        <ellipse cx="216" cy="158" rx="10" ry="12" fill="#ffffff" />
        {[0, 1, 2, 3, 4, 5, 6].map((k) => (
          <circle key={k} cx={100 + k * 20} cy="184" r="3.2" fill="#ffffff" opacity="0.9" />
        ))}
        {CANDLE_X.map((x, i) => (
          <g
            key={i}
            className="candle"
            role="button"
            tabIndex={0}
            aria-label={`Lilin ke-${i + 1}${lit[i] ? ', ketuk untuk meniup' : ', ketuk untuk menyalakan'}`}
            onClick={(e) => toggle(i, e)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle(i, e);
              }
            }}
          >
            <rect x={x - 16} y="50" width="32" height="90" fill="transparent" />
            <rect x={x - 4} y="96" width="8" height="40" rx="2" fill={i % 2 ? '#ffd1dc' : '#ffffff'} />
            <rect x={x - 4} y="108" width="8" height="4" fill="#fb9bb8" opacity="0.7" />
            <rect x={x - 4} y="122" width="8" height="4" fill="#fb9bb8" opacity="0.7" />
            <line x1={x} y1="96" x2={x} y2="90" stroke="#5b1530" strokeWidth="1.6" strokeLinecap="round" />
            <g transform={`translate(${x} 90)`}>
              <g className={`flame${lit[i] ? '' : ' out'}`}>
                <circle cy="-12" r="16" fill="#ffd27a" opacity="0.35" />
                <g className="flame-in">
                  <path d="M0 -26 C9 -13 9 -2 0 3 C-9 -2 -9 -13 0 -26Z" fill="url(#flameGrad)" />
                </g>
              </g>
              {!lit[i] ? (
                <path className="smoke" d="M0 -4 C-8 -14 8 -22 0 -34" stroke="#c99aa9" strokeWidth="2" strokeLinecap="round" fill="none" />
              ) : null}
            </g>
          </g>
        ))}
      </svg>
      <div className="mt-6 text-center" aria-live="polite">
        <p className="font-display italic font-semibold text-2xl md:text-3xl text-ink max-w-md mx-auto text-balance">
          {anyLit
            ? 'Ketuk lilin satu per satu, atau tiup semuanya sekaligus.'
            : 'Semoga permohonanmu terkabul. Aku ikut mengaminkannya.'}
        </p>
        <div className="mt-6">
          {anyLit ? (
            <button type="button" className="btn" onClick={blowAll}>
              Tiup semua lilin
            </button>
          ) : (
            <button type="button" className="btn btn-soft" onClick={() => setLit([true, true, true, true, true])}>
              Nyalakan lagi
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
