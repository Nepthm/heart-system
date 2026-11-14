export default function SectionHead({ eyebrow, title, sub }) {
  return (
    <header className="text-center mb-10 md:mb-14">
      <p className="text-xs md:text-sm font-extrabold tracking-[.28em] uppercase text-rosy-deep">{eyebrow}</p>
      <h2 className="font-display italic font-semibold text-4xl md:text-6xl text-ink mt-3 leading-[1.05] text-balance">
        {title}
      </h2>
      {sub ? <p className="mt-4 text-base md:text-lg text-ink/75 max-w-xl mx-auto">{sub}</p> : null}
    </header>
  );
}
