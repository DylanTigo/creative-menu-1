import PerspectiveText from "./PerspectiveText";

export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="text-white text-xl font-medium">FlowBeat</div>
      <nav className="flex gap-8">
        {["Home", "About", "Contact"].map((label) => (
          <button
            key={label}
            type="button"
            className="cursor-pointer overflow-hidden text-white group"
          >
            <PerspectiveText label={label} />
          </button>
        ))}
      </nav>
    </div>
  );
}
