import Flower from './Flower.jsx';
import Leaf from './Leaf.jsx';

export default function Bouquet({ className = '', flip = false }) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
    >
      <div className="relative w-44 h-44 md:w-64 md:h-64">
        <Leaf size={34} className="absolute" style={{ left: '48%', top: '58%', transform: 'rotate(38deg)' }} />
        <Leaf size={30} className="absolute" style={{ left: '10%', top: '62%', transform: 'rotate(-40deg)' }} />
        <Flower size={116} petals={9} color="#fb9bb8" className="absolute sway" style={{ left: '0%', top: '16%' }} />
        <Flower size={92} petals={8} color="#ffc2d4" center="#f6a94c" rotate={12} className="absolute sway s2" style={{ left: '38%', top: '-2%' }} />
        <Flower size={78} petals={7} color="#f48fb1" center="#fff1a8" rotate={20} className="absolute sway s3" style={{ left: '30%', top: '48%' }} />
        <Flower size={56} petals={6} color="#ffffff" center="#f9a8c0" className="absolute sway s2" style={{ left: '70%', top: '40%' }} />
      </div>
    </div>
  );
}
