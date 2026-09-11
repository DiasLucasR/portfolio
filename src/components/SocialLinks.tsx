import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SOCIALS } from "@/content/i18n";

const ICONS = {
  linkedin: FaLinkedin,
  github: FaGithub,
  whatsapp: FaWhatsapp,
};

export function SocialLinks({
  className,
  iconSize = 20,
}: {
  className?: string;
  iconSize?: number;
}) {
  return (
    <div className={className}>
      {SOCIALS.map((s) => {
        const Icon = ICONS[s.icon];
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:text-brand"
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
