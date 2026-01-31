"use client";

import { useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import TeamCard from "../ui/TeamCard";

const team = [
  { name: "Jenny Wilson", role: "Co-Founder", img: "/team-1.png" },
  { name: "Jane Cooper", role: "Worker", img: "/team-2.png" },
  { name: "Cody Fisher", role: "Security Guard", img: "/team-3.png" },
  { name: "Robert Fox", role: "Senior Farmer Manager", img: "/team-4.png" },
  { name: "Jenny Wilson", role: "Co-Founder", img: "/team-1.png" },
  { name: "Jane Cooper", role: "Worker", img: "/team-2.png" },
  { name: "Cody Fisher", role: "Security Guard", img: "/team-3.png" },
  { name: "Robert Fox", role: "Senior Farmer Manager", img: "/team-4.png" },
];

export default function TeamSection() {
  const [start, setStart] = useState(0);

  const visible = team.slice(start, start + 4);

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(team.length - 4, s + 1));

  return (
    <section className="py-12 md:py-16 bg-zinc-50">
      <Container>
        <SectionTitle
          align="center"
          title="Our Awesome Team"
          subtitle="Meet the people who work with passion to deliver fresh and healthy groceries every day."
        />

        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={prev}
            disabled={start === 0}
            className={`hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-black/10
    ${start === 0 ? "cursor-not-allowed opacity-40" : "hover:bg-zinc-100"}
  `}
            aria-label="Previous"
          >
            ←
          </button>

          <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((p) => (
              <TeamCard key={p.name} {...p} />
            ))}
          </div>

          <button
            onClick={next}
            disabled={start >= team.length - 4}
            className={`hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-black/10
    ${start >= team.length - 4 ? "cursor-not-allowed opacity-40" : "hover:bg-zinc-100"}
  `}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </Container>
    </section>
  );
}
