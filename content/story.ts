export type Run = {
  text: string;
  href?: string;
};

export type Chapter = {
  id: string;
  eyebrow?: string;
  title: string;
  paragraphs: Run[][];
  ink: "light" | "dark";
  tone: "paper" | "sand" | "sea" | "ink";
  video?: string;
  image?: {
    src: string;
    alt: string;
  };
  logos?: {
    src: string;
    alt: string;
  }[];
};

export const profile = {
  name: "Mia Kalt",
  role: "Mental Health Counselor, LAC",
  email: {
    href: "mailto:miakalt123@gmail.com",
    label: "Email",
  },
  linkedin: {
    href: "https://www.linkedin.com/in/mia-kalt-lac-465a2b153/",
    label: "LinkedIn",
  },
  x: {
    href: "https://x.com/miakalt123",
    label: "X",
  },
  psychologyToday: {
    href: "https://www.psychologytoday.com/us/therapists/mia-kalt-scottsdale-az/1513981",
    label: "Psychology Today",
  },
  phone: {
    href: "tel:+19284149906",
    label: "(928) 414-9906",
  },
  booking: {
    href: "https://seaglassmentalhealth.com/mia-kalt/",
    label: "Book a session",
  },
};

export const index = [
  { href: "#therapy", label: "Therapy" },
  { href: "#yoga", label: "Yoga" },
  { href: "#experience", label: "Experience" },
  { href: "#connect", label: "Connect" },
];

export const chapters: Chapter[] = [
  {
    id: "therapy",
    eyebrow: "Trauma and PTSD · EMDR · Relationships · Women’s issues",
    title: "Therapeutic Approach",
    ink: "dark",
    tone: "paper",
    video: "/mia-intro.mp4",
    paragraphs: [
      [
        {
          text: "When a client or couple begins therapy with me, my first goal is to understand the nature of their distress in a supportive, nonjudgmental space. Together, we build a vision of more freedom, flexibility, and possibility through practical skills and deeper exploration. My approach is warm, interpretive, directive, and relational. I value the therapeutic relationship and the unique opportunity it creates to explore how you connect with others. From these insights, we can practice new ways of relating with others outside of therapy.",
        },
      ],
      [
        {
          text: "With individuals, I may utilize Somatic Experiencing to connect with body responses, a psychodynamic lens to increase awareness of implicit feelings and meaning, and EMDR to dial down the volume of past memories. With couples, I draw from Gottman-informed and Emotion-Focused approaches to explore underlying fears and recurring relational roles.",
        },
      ],
      [
        {
          text: "I’m a Licensed Associate Counselor in Arizona and a deep thinker and feeler who values curiosity, connection, and understanding. You can self-schedule a free 20-minute consultation or first session through ",
        },
        {
          text: "Sea Glass Mental Health",
          href: "https://seaglassmentalhealth.com/mia-kalt/",
        },
        { text: " or reach out to me directly." },
      ],
    ],
  },
  {
    id: "yoga",
    eyebrow: "Mind and body",
    title: "Yoga Practice",
    ink: "light",
    tone: "sea",
    image: {
      src: "/mia-yoga.jpg",
      alt: "Mia Kalt in a yoga pose",
    },
    paragraphs: [
      [
        {
          text: "Mia brings grounding and mind-body awareness into both the studio and the therapy room. She completed 200-hour training recognized by Yoga Alliance in 2023, and has taught at ",
        },
        {
          text: "CorePower Yoga",
          href: "https://www.corepoweryoga.com/content/teachers/490257a1-7e72-4078-8737-73514d213f9a",
        },
        { text: " studios around the country." },
      ],
    ],
  },
  {
    id: "experience",
    eyebrow: "Education, Clinical Work, Research",
    title: "Experience",
    ink: "dark",
    tone: "sand",
    logos: [
      { src: "/logo-michigan.png", alt: "University of Michigan" },
      { src: "/logo-northwestern.webp", alt: "Northwestern University" },
      { src: "/logo-turning-point.jpeg", alt: "Turning Point" },
      {
        src: "/logo-family-institute.jpg",
        alt: "The Family Institute at Northwestern University",
      },
    ],
    paragraphs: [
      [
        {
          text: "Mia earned her master’s in Mental Health Counseling from Northwestern University, where she completed clinical training at ",
        },
        { text: "Turning Point", href: "https://www.tpoint.org/" },
        { text: " and " },
        {
          text: "The Family Institute",
          href: "https://www.family-institute.org/",
        },
        {
          text: ". There she worked with a wide range of clients and clinical presentations, including depression, anxiety, bipolar disorder, body image, self-esteem, grief, and life transitions.",
        },
      ],
      [
        {
          text: "As a graduate research assistant in the ",
        },
        {
          text: "Mindfulness & Culture Lab",
          href: "https://www.family-institute.org/research-scholarship/mindfulness-culture",
        },
        { text: " at " },
        {
          text: "The Family Institute",
          href: "https://www.family-institute.org/",
        },
        {
          text: ", Mia studied Radically Open Dialectical Behavior Therapy (RO-DBT), an emerging treatment for treatment-resistant populations.",
        },
      ],
      [
        {
          text: "She holds bachelor’s degrees in Political Science and Psychology from the University of Michigan.",
        },
      ],
      [
        {
          text: "Mia is a Licensed Associate Counselor in Arizona (LAC-23474), supervised by Abra Arlinsky, LPC.",
        },
      ],
    ],
  },
];

export const connect = {
  id: "connect",
  title: "Connect with me",
  ink: "dark" as const,
};
