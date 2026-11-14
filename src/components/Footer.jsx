import { CONFIG } from '../config.js';
import Heart from './Heart.jsx';

export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto pt-6 pb-24 text-center">
      <div className="flex items-center justify-center gap-2 text-rosy" aria-hidden="true">
        <Heart size={12} />
        <Heart size={18} />
        <Heart size={12} />
      </div>
      <p className="mt-3 text-sm text-ink/60">Dibuat dengan cinta, khusus untuk {CONFIG.name}.</p>
    </footer>
  );
}
