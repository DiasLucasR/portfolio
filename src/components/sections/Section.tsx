import type { ReactNode } from "react";

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
    <section
      id={id}
      className="container-page grid gap-10 border-t border-hair py-20 sm:py-28 lg:grid-cols-[14rem_1fr] lg:gap-16"
    >
      <h2 className="font-display text-3xl text-ink lg:sticky lg:top-24 lg:self-start">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
