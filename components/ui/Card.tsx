export function Card({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`card-surface p-6 ${className}`}>{children}</div>;
}
