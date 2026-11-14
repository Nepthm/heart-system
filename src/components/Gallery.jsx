import { useCallback, useMemo, useRef, useState } from 'react';
import { CONFIG } from '../config.js';
import { fileToDataUrl, fire } from '../utils.js';
import Lightbox from './Lightbox.jsx';
import Polaroid from './Polaroid.jsx';
import SectionHead from './SectionHead.jsx';

const STORE_KEY = 'taman-hati-fotos-v1';

function loadSaved() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr)) return arr;
    }
  } catch (e) {
  }
  return [];
}

export default function Gallery() {
  const [saved, setSaved] = useState(loadSaved);
  const [open, setOpen] = useState(-1);
  const inputRef = useRef(null);
  const target = useRef(0);

  const photos = useMemo(
    () => CONFIG.photos.map((p, i) => ({ src: saved[i] || p.src, caption: p.caption, date: p.date })),
    [saved]
  );

  function pick(i) {
    target.current = i;
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.click();
    }
  }

  function onFile(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const idx = target.current;
    fileToDataUrl(f)
      .then((url) => {
        const next = saved.slice();
        next[idx] = url;
        setSaved(next);
        try {
          localStorage.setItem(STORE_KEY, JSON.stringify(next));
        } catch (err) {
        }
        fire(null, 14);
      })
      .catch(() => {});
  }

  const nav = useCallback(
    (d) => {
      setOpen((o) => {
        let n = o;
        for (let k = 0; k < photos.length; k++) {
          n = (n + d + photos.length) % photos.length;
          if (photos[n].src) return n;
        }
        return o;
      });
    },
    [photos]
  );
  const close = useCallback(() => setOpen(-1), []);

  return (
    <section id="kenangan" className="max-w-5xl mx-auto py-14 md:py-20">
      <SectionHead eyebrow="Album kita" title="Kenangan yang kusimpan" sub="Ketuk sebuah foto untuk melihatnya lebih dekat." />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-9 md:gap-y-14 max-w-4xl mx-auto px-1">
        {photos.map((ph, i) => (
          <Polaroid key={i} photo={ph} index={i} onOpen={setOpen} onPick={pick} />
        ))}
      </div>
      <input
        id="foto-input"
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        tabIndex={-1}
        onChange={onFile}
        aria-label="Pilih foto"
      />
      {open >= 0 && photos[open] && photos[open].src ? (
        <Lightbox photos={photos} index={open} onClose={close} onNav={nav} onReplace={pick} />
      ) : null}
    </section>
  );
}
