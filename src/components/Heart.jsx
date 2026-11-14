import { HEART_D } from '../utils.js';

export default function Heart({ size = 24, color = 'currentColor', className = '', style }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} style={style} aria-hidden="true">
      <path d={HEART_D} fill={color} />
    </svg>
  );
}
