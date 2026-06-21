export default function MarqueeText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`overflow-hidden border-y-4 border-foreground bg-foreground py-4 ${className}`}>
      <div className="animate-marquee whitespace-nowrap flex">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-background mx-8"
          >
            {text} ★
          </span>
        ))}
      </div>
    </div>
  );
}
