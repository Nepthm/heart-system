import { useEffect } from 'react';

export default function Lightbox({ photos, index, onClose, onNav, onReplace }) {
  const photo = photos[index];

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNav(1);
      if (e.key === 'ArrowLeft') onNav(-1);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onNav]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Foto kenangan"
      className="lb-bg fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <figure className="lb-pop bg-white p-3 pb-5 shadow-2xl m-0">
          <img src={photo.src} alt={photo.caption} className="w-full bg-petal-50 object-contain" style={{ maxHeight: '62vh' }} />
          <figcaption className="text-center pt-4">
            <span className="block font-display italic font-semibold text-2xl text-ink leading-tight">{photo.caption}</span>
            <span className="block text-xs font-bold tracking-[.2em] uppercase text-rosy-deep/80 mt-1">{photo.date}</span>
          </figcaption>
        </figure>
        <div className="mt-5 flex items-center justify-center gap-3">
          <button type="button" className="btn btn-soft" style={{ padding: '.6rem 1.1rem' }} onClick={() => onNav(-1)} aria-label="Foto sebelumnya">
            ‹
          </button>
          <button type="button" className="btn btn-soft" style={{ padding: '.6rem 1.1rem' }} onClick={() => onReplace(index)}>
            Ganti foto
          </button>
          <button type="button" className="btn btn-soft" style={{ padding: '.6rem 1.1rem' }} onClick={() => onNav(1)} aria-label="Foto berikutnya">
            ›
          </button>
        </div>
        <button
          type="button"
          autoFocus
          className="btn"
          style={{ position: 'absolute', top: '-14px', right: '-6px', padding: '.45rem .9rem' }}
          onClick={onClose}
          aria-label="Tutup foto"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
