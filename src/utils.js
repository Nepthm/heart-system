export const REDUCE =
  typeof window !== 'undefined' &&
  !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

export const HEART_D =
  'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';

export const PETAL_COLORS = ['#fb9bb8', '#ffc2d4', '#f48fb1', '#ff8fb0', '#ffd9e3', '#e0446f'];
export const BURST_COLORS = ['#fb9bb8', '#ff6f9c', '#d63a68', '#ffd1dc', '#ffffff', '#e8b27a', '#f48fb1'];

export function fire(e, n = 16) {
  let x;
  let y;
  if (e && typeof e.clientX === 'number' && (e.clientX || e.clientY)) {
    x = e.clientX;
    y = e.clientY;
  } else if (e && e.currentTarget && e.currentTarget.getBoundingClientRect) {
    const r = e.currentTarget.getBoundingClientRect();
    x = r.left + r.width / 2;
    y = r.top + r.height / 2;
  } else {
    x = window.innerWidth / 2;
    y = window.innerHeight / 2;
  }
  window.dispatchEvent(new CustomEvent('burst', { detail: { x, y, n } }));
}

export function fileToDataUrl(file, max = 1000) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const k = Math.min(1, max / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * k);
        canvas.height = Math.round(img.height * k);
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.82));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
