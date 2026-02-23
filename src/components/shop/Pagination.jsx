const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => setPage((x) => Math.max(1, x - 1))}
        disabled={page === 1}
        className="h-9 px-3 rounded-full border border-[#F2F2F2] cursor-pointer text-[#1A1A1A] disabled:text-[#B3B3B3] disabled:bg-[#F2F2F2] disabled:cursor-not-allowed"
      >
        &lt;
      </button>

      {Array.from({ length: totalPages })
        .slice(0, 8)
        .map((_, i) => {
          const num = i + 1;
          return (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`h-9 w-9 rounded-full text-[#666666] cursor-pointer ${
                page === num
                  ? "bg-green-600 text-[#FFFFFF] border-green-600"
                  : ""
              }`}
            >
              {num}
            </button>
          );
        })}

      <button
        onClick={() => setPage((x) => Math.min(totalPages, x + 1))}
        disabled={page === totalPages}
        className="h-9 px-3 rounded-full border border-[#F2F2F2] cursor-pointer text-[#1A1A1A] disabled:text-[#B3B3B3] disabled:bg-[#F2F2F2] disabled:cursor-not-allowed"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
