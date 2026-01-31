export default function SectionTitle({ title, subtitle, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="text-3xl md:text-5xl font-semibold text-zinc-900 leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm md:text-base text-zinc-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
