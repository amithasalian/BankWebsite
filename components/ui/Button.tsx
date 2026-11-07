type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
};

export function Button({ variant = 'primary', size = 'md', children, className = '' }: ButtonProps) {
  const variantClass =
    variant === 'secondary'
      ? 'btn-secondary'
      : variant === 'ghost'
        ? 'btn-ghost'
        : 'btn-primary';

  const sizeClass =
    size === 'sm' ? 'px-3 py-2 text-xs' : size === 'lg' ? 'px-6 py-3.5 text-base' : 'px-5 py-3 text-sm';

  return <button className={`${variantClass} ${sizeClass} ${className}`}>{children}</button>;
}
