import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function MailIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.6" />
      <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M5.67 8.73H2.85V21h2.82V8.73ZM4.26 3C3.26 3 2.5 3.76 2.5 4.74s.76 1.76 1.76 1.76 1.74-.78 1.74-1.76S5.26 3 4.26 3ZM21.15 21h-2.82v-6.38c0-1.52-.03-3.47-2.12-3.47-2.12 0-2.44 1.65-2.44 3.36V21H10.96V8.73h2.7v1.68h.04c.38-.71 1.3-1.46 2.68-1.46 2.86 0 3.39 1.88 3.39 4.33V21Z"
      />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M14.7 10.3 21.4 3h-1.6l-5.8 6.3L9.3 3H3.5l7 9.5L3.5 21h1.6l6.2-6.8L14.7 21h5.8l-7.3-10.7Zm-2.2 2.4-.7-1-5.7-7.6h2.5l4.6 6.2.7 1 6 8h-2.5l-4.9-6.6Z"
      />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 4.5h2.2l1.1 3.2-1.6 1a11 11 0 0 0 5.6 5.6l1-1.6 3.2 1.1V16a1.5 1.5 0 0 1-1.5 1.5A13.5 13.5 0 0 1 6.5 6 1.5 1.5 0 0 1 8 4.5Z" />
    </svg>
  );
}

/** Original profile mark for the Psychology Today link. Not their logo. */
export function ProfileIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="8" r="3.1" />
      <path d="M6 19.2c.9-3.2 3.1-4.8 6-4.8s5.1 1.6 6 4.8" />
    </svg>
  );
}
