export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-bank-teal">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-bank-navy md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-base text-bank-muted">{description}</p> : null}
    </div>
  );
}
