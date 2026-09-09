import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="container-page border-t border-hair py-16 sm:py-20">
      <Reveal>
        <h2 className="mb-10 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.22em] text-dim">
          <span className="h-px w-8 [background:linear-gradient(90deg,var(--blue),var(--violet))]" />
          {title}
        </h2>
        {children}
      </Reveal>
    </section>
  );
}
