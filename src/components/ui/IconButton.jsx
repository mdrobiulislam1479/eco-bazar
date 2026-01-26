export default function IconButton({ children, label }) {
  return (
    <button
      className="relative p-1 text-[#1a1a1a] hover:text-[#00b207] transition-colors"
      type="button"
      aria-label={label}
    >
      {children}
    </button>
  );
}
