export default function Leaf({ size = 40, className = '', style }) {
  return (
    <svg viewBox="0 0 40 80" width={size} height={size * 2} className={className} style={style} aria-hidden="true">
      <path d="M20 78 C2 56 4 22 20 2 C36 22 38 56 20 78Z" fill="#b5dcc0" />
      <path d="M20 74 V10" stroke="#8fc3a0" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}
