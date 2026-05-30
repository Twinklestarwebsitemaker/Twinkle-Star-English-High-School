import { c as createLucideIcon, u as useNavigate, j as jsxRuntimeExports, B as Button, G as GraduationCap, S as Skeleton, L as Link } from "./index-CWAoBUuL.js";
import { B as Badge, C as Card, a as CardContent } from "./card-D7mmVHzW.js";
import { u as useNews } from "./useBackend-BzhSMmM7.js";
import { m as motion } from "./proxy-TTCtMZI_.js";
import { A as ArrowRight, T as Trophy, B as BookOpen } from "./trophy-BjxDueYc.js";
import { U as Users } from "./users-Bb_Nmv5e.js";
import { S as Star } from "./star-BRdEEPEH.js";
import { P as Palette } from "./palette-C3vRItws.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
      key: "143lza"
    }
  ],
  ["path", { d: "M11 12 5.12 2.2", key: "qhuxz6" }],
  ["path", { d: "m13 12 5.88-9.8", key: "hbye0f" }],
  ["path", { d: "M8 7h8", key: "i86dvs" }],
  ["circle", { cx: "12", cy: "17", r: "5", key: "qbz8iq" }],
  ["path", { d: "M12 18v-2h-.5", key: "fawc4q" }]
];
const Medal = createLucideIcon("medal", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const STATS = [
  { value: "1,200+", label: "Students", icon: Users },
  { value: "85", label: "Faculty", icon: GraduationCap },
  { value: "1962", label: "Founded", icon: Star },
  { value: "98%", label: "College Acceptance", icon: Trophy }
];
const PROGRAMS = [
  {
    icon: Zap,
    title: "STEM Excellence",
    colorIcon: "bg-primary/10 text-primary",
    tag: "Science & Technology",
    description: "Cutting-edge labs, robotics competitions, and AP courses in Computer Science, Biology, Chemistry, and Physics. Our graduates earn top university scholarships year after year."
  },
  {
    icon: Palette,
    title: "Arts & Humanities",
    colorIcon: "bg-accent/15 text-accent",
    tag: "Creative Expression",
    description: "Award-winning fine arts, theater, music, and literary programs. Our performing arts center rivals professional stages — and our alumni prove it."
  },
  {
    icon: Medal,
    title: "Athletics",
    colorIcon: "bg-secondary text-secondary-foreground",
    tag: "Varsity & Club Sports",
    description: "22 varsity sports, state championships, and a culture of healthy competition. Student athletes learn discipline, teamwork, and resilience on and off the field."
  }
];
const SAMPLE_NEWS = [
  {
    id: 1,
    title: "Twinkle Star Robotics Team Wins State Championship",
    date: Date.now() - 3 * 24 * 60 * 60 * 1e3,
    category: "Achievement",
    content: "",
    imageUrl: "/assets/generated/school-hero.dim_1600x900.jpg",
    excerpt: "Our robotics team claimed first place at the 2026 State STEM Olympics, beating 42 competing schools with their autonomous navigation design."
  },
  {
    id: 2,
    title: "New STEM Innovation Center Opens This Fall",
    date: Date.now() - 7 * 24 * 60 * 60 * 1e3,
    category: "Campus",
    content: "",
    imageUrl: "/assets/generated/school-hero.dim_1600x900.jpg",
    excerpt: "A $4.2M state-of-the-art STEM center is set to open in September, featuring three new computer science labs and a biotech research wing."
  },
  {
    id: 3,
    title: "Class of 2026 Earns Record $8M in Scholarships",
    date: Date.now() - 14 * 24 * 60 * 60 * 1e3,
    category: "Academics",
    content: "",
    imageUrl: "/assets/generated/school-hero.dim_1600x900.jpg",
    excerpt: "Seniors in the graduating class of 2026 have collectively been awarded over $8 million in merit and need-based scholarships across 200+ universities."
  }
];
const TESTIMONIALS = [
  {
    quote: "Twinkle Star didn't just prepare me for college — it prepared me for life. The teachers here genuinely care about every student's growth and potential.",
    author: "Maya Chen",
    role: "Alumna · Stanford Class of 2024",
    initials: "MC"
  },
  {
    quote: "As a parent, I've watched my son's confidence and critical thinking skills soar. The faculty's dedication to excellence is truly unmatched.",
    author: "David Okafor",
    role: "Parent of Junior-year student",
    initials: "DO"
  }
];
const GALLERY_ITEMS = [
  { alt: "Campus building exterior", span: "col-span-2 md:col-span-2" },
  { alt: "Students working in science lab", span: "" },
  { alt: "Athletic field and stadium", span: "" },
  { alt: "Art studio with student work", span: "" },
  { alt: "Library and reading hall", span: "" }
];
function NewsCard({ item, index }) {
  const dateStr = new Date(item.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.1 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "group h-full overflow-hidden hover:shadow-elevated transition-smooth border-border flex flex-col",
          "data-ocid": `news-card-${item.id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] overflow-hidden bg-muted shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: item.imageUrl || "/assets/generated/school-hero.dim_1600x900.jpg",
                alt: item.title,
                className: "w-full h-full object-cover group-hover:scale-105 transition-smooth"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex flex-col flex-1 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs font-medium", children: item.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-3" }),
                  dateStr
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2 flex-1", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed line-clamp-3", children: item.excerpt }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/news",
                  className: "text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-smooth mt-auto",
                  children: [
                    "Read more ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function NewsSection() {
  const { data: news, isLoading } = useNews();
  const displayNews = news && news.length > 0 ? news.slice(0, 3) : SAMPLE_NEWS;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "mb-3 text-primary border-primary/30",
              children: "Latest Updates"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: "School News & Events" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-xl mx-auto", children: "Stay connected with what's happening at Twinkle Star English High School." })
        ]
      }
    ),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-44 w-full rounded-lg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-2/3" })
    ] }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: displayNews.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(NewsCard, { item, index: i }, item.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/news", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", "data-ocid": "view-all-news", children: [
      "View All News ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 size-4" })
    ] }) }) })
  ] }) });
}
function HomePage() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[92vh] flex items-center overflow-hidden",
        "data-ocid": "hero-section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
              style: {
                backgroundImage: "url('/assets/generated/school-hero.dim_1600x900.jpg')"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hero-overlay", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/35", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-6xl mx-auto px-4 w-full py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 36 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] },
              className: "max-w-2xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-5 bg-accent/20 text-accent-foreground border border-accent/40 backdrop-blur-sm text-sm px-3 py-1", children: "Welcome Twinkle Star English High School & Junior College" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-4xl md:text-[3.5rem] text-white leading-tight text-balance mb-5", children: [
                  "Inspiring Minds,",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent drop-shadow-sm", children: "Shaping Futures" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 text-lg md:text-xl leading-relaxed mb-10 max-w-xl", children: "A K–12 learning community where academic excellence, creative exploration, and athletic achievement converge to prepare students for lifelong success." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", "data-ocid": "hero-ctas", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "lg",
                      className: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-elevated font-semibold transition-smooth",
                      onClick: () => navigate({ to: "/contact" }),
                      "data-ocid": "cta-schedule-tour",
                      children: "Schedule a Tour"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "lg",
                      variant: "outline",
                      className: "bg-accent text-accent-foreground hover:bg-accent/90 backdrop-blur-sm font-semibold transition-smooth",
                      onClick: () => window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLScCK5rokmYQfiLbu9wInuarw-qjPbjhHRtW39-bbMH6OAygFA/viewform",
                        "_blank"
                      ),
                      "data-ocid": "cta-admission-enquiry",
                      children: "Admission Enquiry"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "lg",
                      variant: "ghost",
                      className: "text-white hover:bg-white/10 font-semibold transition-smooth",
                      onClick: () => navigate({ to: "/contact" }),
                      "data-ocid": "cta-contact",
                      children: [
                        "Contact Us ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 size-4" })
                      ]
                    }
                  )
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-70", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-2.5 bg-white/70 rounded-full" }) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-primary text-primary-foreground py-8 px-4",
        "data-ocid": "stats-section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-primary-foreground/20", children: STATS.map(({ value, label, icon: Icon }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: i * 0.08 },
            className: "flex flex-col items-center text-center py-4 md:py-0",
            "data-ocid": `stat-${label.toLowerCase().replace(/\s+/g, "-")}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6 mb-2 opacity-75" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-3xl tracking-tight", children: value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground/70 text-sm mt-1", children: label })
            ]
          },
          label
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "mb-3 text-primary border-primary/30",
                children: "Academic Programs"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: "Programs Built for Every Passion" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-xl mx-auto", children: "From the laboratory to the stage, Twinkle Star offers pathways for every curious mind." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: PROGRAMS.map(
        ({ icon: Icon, title, colorIcon, tag, description }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: {
              opacity: 0,
              x: i === 0 ? -28 : i === 2 ? 28 : 0,
              y: i === 1 ? 28 : 0
            },
            whileInView: { opacity: 1, x: 0, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.55, delay: i * 0.12 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Card,
              {
                className: "h-full group hover:shadow-elevated transition-smooth border-border cursor-pointer",
                onClick: () => navigate({ to: "/academics" }),
                "data-ocid": `program-card-${i}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-12 h-12 rounded-xl flex items-center justify-center ${colorIcon}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs mb-2", children: tag }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors", children: title })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-smooth", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "size-3.5" }),
                    " Explore program"
                  ] })
                ] })
              }
            )
          },
          title
        )
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NewsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "mb-3 text-primary border-primary/30",
                children: "Community Voices"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: "What Our Community Says" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: TESTIMONIALS.map(({ quote, author, role, initials }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.55, delay: i * 0.15 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-7 space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "size-8 text-accent opacity-55" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground leading-relaxed text-base italic", children: [
              '"',
              quote,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-3 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm shrink-0", children: initials }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm truncate", children: author }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs truncate", children: role })
              ] })
            ] })
          ] }) })
        },
        author
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4 },
          className: "text-center mb-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-display font-bold text-foreground", children: "Life at Twinkle Star" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 text-sm", children: "A glimpse into our vibrant campus community" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]", children: GALLERY_ITEMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.96 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.4 },
          className: `overflow-hidden rounded-xl bg-muted ${item.span}`,
          "data-ocid": `gallery-${item.alt.replace(/\s+/g, "-").toLowerCase()}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/generated/school-hero.dim_1600x900.jpg",
              alt: item.alt,
              className: "w-full h-full object-cover hover:scale-105 transition-smooth"
            }
          )
        },
        item.alt
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16 px-4", "data-ocid": "cta-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "max-w-3xl mx-auto text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4", children: "Ready to Join the Twinkle Star Family?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg mb-8 leading-relaxed", children: "Applications for the 2026–27 school year are now open. Schedule a campus tour and see why families choose Twinkle Star generation after generation." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "lg",
                className: "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-elevated transition-smooth",
                onClick: () => navigate({ to: "/contact" }),
                "data-ocid": "footer-cta-apply",
                children: "Apply for Admission"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "lg",
                variant: "outline",
                className: "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-semibold transition-smooth",
                onClick: () => navigate({ to: "/about" }),
                "data-ocid": "footer-cta-learn-more",
                children: "Learn More About Us"
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}
export {
  HomePage
};
