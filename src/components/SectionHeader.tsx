interface SectionHeaderProps {
  index: string;
  title: string;
  meta?: string;
}

const SectionHeader = ({ index, title, meta }: SectionHeaderProps) => (
  <div className="mb-8 sm:mb-10">
    <div className="flex items-baseline justify-between gap-4">
      <h2 className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-signal2">{index}</span>
        <span className="font-mono text-sm text-muted-foreground">&mdash;</span>
        <span className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-foreground">
          {title}
        </span>
      </h2>
      {meta && (
        <span className="label-mono hidden sm:inline whitespace-nowrap">{meta}</span>
      )}
    </div>
    <div className="rule-scan mt-4" aria-hidden="true" />
  </div>
);

export default SectionHeader;
