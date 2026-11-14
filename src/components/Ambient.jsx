import { useEffect, useRef } from 'react';
import { BURST_COLORS, HEART_D, PETAL_COLORS, REDUCE } from '../utils.js';

const HEART_PATH = new Path2D(HEART_D);
const PETAL_PATH = new Path2D('M0 -10C7 -8 8 4 0 10C-8 4 -7 -8 0 -10Z');

function rnd(a, b) {
  return a + Math.random() * (b - a);
}

function drawShape(ctx, p, alpha) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rot);
  ctx.globalAlpha = alpha;
  ctx.fillStyle = p.color;
  if (p.kind === 'heart') {
    const k = p.s / 24;
    ctx.scale(k, k);
    ctx.translate(-12, -12);
    ctx.fill(HEART_PATH);
  } else {
    const q = p.s / 10;
    ctx.scale(q * 0.75, q);
    ctx.fill(PETAL_PATH);
  }
  ctx.restore();
}

export default function Ambient() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return undefined;
    const ctx = c.getContext('2d');
    let w = 0;
    let h = 0;
    let raf = 0;
    let last = 0;
    let bursts = [];
    const fall = [];

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      c.width = Math.round(w * dpr);
      c.height = Math.round(h * dpr);
      c.style.width = `${w}px`;
      c.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function make(init) {
      const heart = Math.random() < 0.3;
      return {
        x: rnd(0, w),
        y: init ? rnd(0, h) : rnd(-40, -10),
        s: heart ? rnd(7, 13) : rnd(5, 9),
        vy: rnd(0.25, 0.7),
        vx: rnd(-0.2, 0.25),
        rot: rnd(0, 6.28),
        vr: rnd(-0.015, 0.015),
        ph: rnd(0, 6.28),
        kind: heart ? 'heart' : 'petal',
        color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
        a: rnd(0.3, 0.55),
      };
    }

    resize();
    const count = REDUCE ? 14 : w < 640 ? 20 : 36;
    for (let i = 0; i < count; i++) fall.push(make(true));

    function onBurst(e) {
      if (REDUCE) return;
      const d = e.detail;
      for (let j = 0; j < d.n; j++) {
        const ang = rnd(0, 6.283);
        const sp = rnd(2, 7);
        bursts.push({
          x: d.x,
          y: d.y,
          vx: Math.cos(ang) * sp,
          vy: Math.sin(ang) * sp - 3,
          rot: rnd(0, 6.28),
          vr: rnd(-0.2, 0.2),
          s: rnd(7, 14),
          kind: Math.random() < 0.55 ? 'heart' : 'petal',
          color: BURST_COLORS[Math.floor(Math.random() * BURST_COLORS.length)],
          life: 0,
          max: rnd(55, 95),
        });
      }
    }

    function tick(t) {
      const dt = Math.min(2.5, (t - last) / 16.67 || 1);
      last = t;
      ctx.clearRect(0, 0, w, h);
      for (let a = 0; a < fall.length; a++) {
        let p = fall[a];
        p.y += p.vy * dt;
        p.x += (p.vx + Math.sin(p.ph + p.y * 0.01) * 0.35) * dt;
        p.rot += p.vr * dt;
        if (p.y > h + 30 || p.x < -40 || p.x > w + 40) {
          fall[a] = make(false);
          p = fall[a];
        }
        drawShape(ctx, p, p.a);
      }
      bursts = bursts.filter((b) => b.life < b.max);
      for (const b of bursts) {
        b.vy += 0.14 * dt;
        b.vx *= 0.992;
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        b.rot += b.vr * dt;
        b.life += dt;
        drawShape(ctx, b, Math.max(0, 1 - b.life / b.max));
      }
      raf = requestAnimationFrame(tick);
    }

    if (REDUCE) fall.forEach((p) => drawShape(ctx, p, p.a));
    else raf = requestAnimationFrame(tick);

    window.addEventListener('resize', resize);
    window.addEventListener('burst', onBurst);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('burst', onBurst);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 z-30 pointer-events-none" aria-hidden="true" />;
}
