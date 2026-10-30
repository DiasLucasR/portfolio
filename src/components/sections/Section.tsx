import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="container-page border-t border-hair py-20 sm:py-28">
      <Reveal className="grid gap-10 lg:grid-cols-[14rem_1fr] lg:gap-16">
        <h2 className="label flex gap-3 lg:sticky lg:top-24 lg:self-start">
          <span className="text-brand">{index}</span>
          {title}
        </h2>
        <div>{children}</div>
      </Reveal>
    </section>
  );
}
