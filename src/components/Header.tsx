
export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="text-white text-xl font-medium">FlowBeat</div>
      <nav className="flex gap-8">
        <button type="button" className="text-white hover:text-primary-1">
          Home
        </button>
        <button type="button" className="text-white hover:text-primary-1">
          About
        </button>
        <button type="button" className="text-white hover:text-primary-1">
          Contact
        </button>
      </nav>
    </div>
  )
}
