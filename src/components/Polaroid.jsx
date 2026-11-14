import Flower from './Flower.jsx';

const TILTS = [-3, 2.2, -1.4, 3, -2.4, 1.6];

export default function Polaroid({ photo, index, onOpen, onPick }) {
  const filled = !!photo.src;
  return (
    <button
      type="button"
      className="polaroid text-left"
      style={{ '--tilt': `${TILTS[index % TILTS.length]}deg` }}
      onClick={() => (filled ? onOpen(index) : onPick(index))}
      aria-label={filled ? `Buka foto: ${photo.caption}` : `Tambah foto untuk: ${photo.caption}`}
    >
      <span className="tape" aria-hidden="true" />
      <span className="relative block aspect-square overflow-hidden bg-petal-100">
        {filled ? (
          <img src={photo.src} alt={photo.caption} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <span
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-rosy-deep"
            style={{ background: 'linear-gradient(160deg,#ffe1ea,#ffc2d4)' }}
          >
            <Flower size={68} color="#fb9bb8" className="opacity-80" />
            <span className="text-xs font-bold px-3 text-center leading-snug">Ketuk untuk menambah foto</span>
          </span>
        )}
      </span>
      <span className="block pt-3 text-center font-display italic font-semibold text-lg md:text-xl leading-tight text-ink">
        {photo.caption}
      </span>
      <span className="block text-center text-[11px] font-bold tracking-[.2em] uppercase text-rosy-deep/80 mt-1">
        {photo.date}
      </span>
    </button>
  );
}
