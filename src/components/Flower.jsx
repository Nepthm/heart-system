export default function Flower({
  size = 64,
  petals = 8,
  color = '#fb9bb8',
  center = '#ffd27a',
  rotate = 0,
  className = '',
  style,
}) {
  const outer = [];
  const inner = [];
  for (let i = 0; i < petals; i++) {
    const angle = (i * 360) / petals;
    outer.push(<ellipse key={`o${i}`} cx="0" cy="-27" rx="13" ry="24" fill={color} transform={`rotate(${angle})`} />);
    inner.push(
      <ellipse key={`i${i}`} cx="0" cy="-17" rx="6" ry="12" fill="#ffffff" opacity="0.32" transform={`rotate(${angle})`} />
    );
  }
  return (
    <svg
      viewBox="-52 -52 104 104"
      width={size}
      height={size}
      className={className}
      style={{ display: 'block', ...style }}
      aria-hidden="true"
    >
      <g transform={`rotate(${rotate})`}>
        {outer}
        {inner}
      </g>
      <circle r="11" fill={center} />
      <circle r="4" cx="-3" cy="-3" fill="#ffffff" opacity="0.45" />
    </svg>
  );
}
