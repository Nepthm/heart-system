import { useState } from 'react';
import { CONFIG } from '../config.js';
import { fire } from '../utils.js';
import Flower from './Flower.jsx';
import Heart from './Heart.jsx';
import SectionHead from './SectionHead.jsx';

const FRONTS = [
  ['#ffd9e3', '#ffc2d4'],
  ['#ffe1ea', '#fbb1c8'],
  ['#ffd0de', '#f9a8c0'],
  ['#ffe8ee', '#ffc2d4'],
  ['#ffd6e2', '#fb9bb8'],
  ['#ffe1ea', '#f7a3bd'],
];
const FLOWER_COLORS = ['#fb9bb8', '#ffffff', '#f48fb1', '#ffc2d4', '#e0446f', '#ffd9e3'];

function ReasonCard({ text, index }) {
  const [flipped, setFlipped] = useState(false);
  const g = FRONTS[index % FRONTS.length];
  return (
    <button
      type="button"
      className={`flip${flipped ? ' is-flipped' : ''}`}
      aria-pressed={flipped}
      onClick={(e) => {
        if (!flipped) fire(e, 10);
        setFlipped(!flipped);
      }}
    >
      <span className="flip-inner">
        <span className="flip-face flip-front" style={{ background: `linear-gradient(155deg,${g[0]},${g[1]})` }}>
          <Flower size={64} petals={7 + (index % 3)} color={FLOWER_COLORS[index % FLOWER_COLORS.length]} rotate={index * 14} />
          <span className="text-sm font-extrabold text-rosy-deep tracking-wide">Ketuk aku</span>
        </span>
        <span className="flip-face flip-back">
          <Heart size={22} color="#d63a68" />
          <span className="font-display italic font-semibold text-[1.15rem] md:text-xl leading-snug text-ink">{text}</span>
        </span>
      </span>
    </button>
  );
}

export default function Reasons() {
  return (
    <section className="max-w-5xl mx-auto py-14 md:py-20">
      <SectionHead eyebrow="Alasanku" title="Kenapa aku jatuh cinta padamu" sub="Ketuk kartunya satu per satu." />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
        {CONFIG.reasons.map((t, i) => (
          <ReasonCard key={i} text={t} index={i} />
        ))}
      </div>
    </section>
  );
}
