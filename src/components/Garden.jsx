import { useRef, useState } from 'react';
import { fire } from '../utils.js';
import Flower from './Flower.jsx';
import SectionHead from './SectionHead.jsx';

const PAL = [
  ['#fb9bb8', '#ffd27a'],
  ['#ffc2d4', '#f6a94c'],
  ['#f48fb1', '#fff1a8'],
  ['#ffffff', '#f9a8c0'],
  ['#e0446f', '#ffe08a'],
  ['#ffb3c7', '#ffffff'],
];

const SEED = [
  { x: 12, y: 52, s: 58, c: 0, p: 8 },
  { x: 29, y: 70, s: 74, c: 1, p: 9 },
  { x: 47, y: 46, s: 52, c: 2, p: 7 },
  { x: 64, y: 72, s: 80, c: 3, p: 8 },
  { x: 81, y: 54, s: 62, c: 4, p: 9 },
  { x: 91, y: 74, s: 50, c: 5, p: 6 },
];

export default function Garden() {
  const [flowers, setFlowers] = useState(() => SEED.map((f, i) => ({ id: `s${i}`, rot: i * 17, ...f })));
  const ref = useRef(null);

  function add(x, y) {
    const f = {
      id: `n${Date.now()}${Math.random()}`,
      x: Math.min(94, Math.max(6, x)),
      y: Math.min(78, Math.max(24, y)),
      s: 44 + Math.random() * 40,
      c: Math.floor(Math.random() * PAL.length),
      rot: Math.random() * 45,
      p: 6 + Math.floor(Math.random() * 4),
    };
    setFlowers((prev) => prev.concat([f]).slice(-48));
  }

  function plant(e) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    add(((e.clientX - r.left) / r.width) * 100, ((e.clientY - r.top) / r.height) * 100);
    fire(e, 8);
  }

  return (
    <section className="max-w-5xl mx-auto py-14 md:py-20">
      <SectionHead
        eyebrow="Taman kecil kita"
        title="Tanam bunga untukmu"
        sub="Ketuk di mana saja di taman ini. Setiap bunga adalah satu alasan aku bersyukur ada kamu."
      />
      <div
        ref={ref}
        className="garden relative mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-petal-200"
        style={{ height: '290px', background: 'linear-gradient(180deg,#fff3f6,#ffe1ea)' }}
        onPointerDown={plant}
        role="group"
        aria-label="Taman bunga. Ketuk untuk menanam bunga."
      >
        {flowers.map((f) => (
          <span
            key={`t${f.id}`}
            className="stem absolute block"
            style={{
              left: `${f.x}%`,
              top: `${f.y}%`,
              height: `${100 - f.y}%`,
              width: '3px',
              marginLeft: '-1.5px',
              background: 'linear-gradient(#7fb08a,#a8d5b5)',
              borderRadius: '2px',
            }}
          />
        ))}
        {flowers.map((f) => (
          <span key={`h${f.id}`} className="bloom absolute block" style={{ left: `${f.x}%`, top: `${f.y}%` }}>
            <Flower size={f.s} petals={f.p} color={PAL[f.c][0]} center={PAL[f.c][1]} rotate={f.rot} />
          </span>
        ))}
        <span
          className="absolute inset-x-0 bottom-0 block pointer-events-none"
          style={{ height: '44px', background: 'linear-gradient(rgba(207,232,211,0), #cfe8d3)' }}
        />
      </div>
      <div className="mt-6 flex flex-col items-center gap-3">
        <p className="text-sm font-bold text-rosy-deep" aria-live="polite">
          {flowers.length} bunga sudah mekar
        </p>
        <button
          type="button"
          className="btn btn-soft"
          onClick={() => add(8 + Math.random() * 84, 28 + Math.random() * 48)}
        >
          Tanam satu bunga lagi
        </button>
      </div>
    </section>
  );
}
