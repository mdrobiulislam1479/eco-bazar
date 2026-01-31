export default function IconBadge({ icon, title, desc }) {
  return (
    <div className="flex gap-3 rounded-xl bg-white p-4 ring-1 ring-black/5">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00B20710]">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-zinc-900">{title}</p>
        <p className="mt-1 text-xs text-zinc-500">{desc}</p>
      </div>
    </div>
  );
}
