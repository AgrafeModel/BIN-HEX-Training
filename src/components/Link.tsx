export function Link({
  to,
  className,
  children,
  id,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <a
      href={(import.meta.env.DEV ? "" : "/BIN-HEX-Training") + to}
      className={className}
      id={id}
    >
      {children}
    </a>
  );
}
