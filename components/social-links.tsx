import { profile } from "@/content/story";
import {
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  ProfileIcon,
  XIcon,
} from "@/components/icons";

const iconClass = "h-5 w-5";

const items = [
  { ...profile.email, Icon: MailIcon, external: false },
  { ...profile.linkedin, Icon: LinkedInIcon, external: true },
  { ...profile.x, Icon: XIcon, external: true },
  { ...profile.psychologyToday, Icon: ProfileIcon, external: true },
];

export function SocialLinks({
  labeled = false,
  showPhone = false,
}: {
  labeled?: boolean;
  showPhone?: boolean;
}) {
  const links = showPhone
    ? [
        ...items,
        {
          ...profile.phone,
          label: "Call",
          Icon: PhoneIcon,
          external: false,
        },
      ]
    : items;

  return (
    <ul className={`flex flex-wrap items-center ${labeled ? "gap-x-5 gap-y-3" : "gap-1"}`}>
      {links.map(({ href, label, Icon, external }) => (
        <li key={href}>
          <a
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            aria-label={
              href === profile.phone.href
                ? `Call ${profile.phone.label}`
                : label
            }
            className="inline-flex items-center gap-2 rounded-full p-2 transition hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
          >
            <Icon className={iconClass} />
            {labeled ? (
              <span className="text-sm tracking-wide">
                {href === profile.phone.href ? profile.phone.label : label}
              </span>
            ) : (
              <span className="sr-only">{label}</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
