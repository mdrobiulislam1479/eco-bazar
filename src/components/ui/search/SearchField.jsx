const { Search } = require("lucide-react");

export default function SearchField({ onOpenSearch }) {
  return (
    <>
      <form
        onClick={(e) => {
          e.preventDefault();
          onOpenSearch();
        }}
        className="order-3 w-full items-center gap-2 rounded-md border border-[#e6e6e6] bg-white pl-4 flex lg:order-0 cursor-pointer"
        role="search"
      >
        <Search size={20} className="text-[#7a7a7a] shrink-0" />

        <span className="w-full flex-1 bg-transparent text-sm outline-none text-start text-[#7a7a7a]">
          Search products…
        </span>

        <button
          type="button"
          className="bg-[#00b207] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#0a8a0f] shrink-0 rounded-r-md border border-[#00b207]"
        >
          Search
        </button>
      </form>
    </>
  );
}
