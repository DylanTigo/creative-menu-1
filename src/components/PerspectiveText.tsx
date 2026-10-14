export default function PerspectiveText({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex-center transform-3d transition-base group-hover:rotate-x-90 ${className ?? ""}`}
    >
      <p className="transition-base group-hover:-translate-y-full group-hover:opacity-0">
        {label}
      </p>
      <p
        aria-hidden="true"
        className="absolute -rotate-x-90 translate-y-2 opacity-0 transition-base group-hover:opacity-100"
      >
        {label}
      </p>
    </div>
  );
}
