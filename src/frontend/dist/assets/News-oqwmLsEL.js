import { c as createLucideIcon, j as jsxRuntimeExports, l as Root, C as Content, m as Close, X, k as cn, T as Title, n as Portal, O as Overlay, r as reactExports, B as Button, S as Skeleton } from "./index-CWAoBUuL.js";
import { B as Badge, C as Card, a as CardContent } from "./card-D7mmVHzW.js";
import { u as useNews } from "./useBackend-BzhSMmM7.js";
import { m as motion } from "./proxy-TTCtMZI_.js";
import { C as ChevronRight } from "./chevron-right-js-zfaHi.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = createLucideIcon("calendar-days", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode);
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
const CATEGORIES = ["All", "Announcements", "Events", "Sports", "Clubs"];
const CATEGORY_COLORS = {
  Announcements: "bg-accent/15 text-accent-foreground border-accent/30 hover:bg-accent/25",
  Events: "bg-primary/10 text-primary border-primary/25 hover:bg-primary/20",
  Sports: "bg-secondary text-secondary-foreground border-secondary/40 hover:bg-secondary/80",
  Clubs: "bg-accent/20 text-accent-foreground border-accent/35 hover:bg-accent/30"
};
const FALLBACK_NEWS = [
  {
    id: 1,
    title: "Spring Term Academic Awards Ceremony",
    date: (/* @__PURE__ */ new Date("2025-03-15")).getTime(),
    category: "Announcements",
    content: "We are proud to announce that this year's Spring Academic Awards Ceremony will be held on April 5th at 6:00 PM in the Main Hall. Over 120 students will be recognized for exceptional academic achievement across all departments. Parents and guardians are warmly invited to attend and celebrate alongside our honorees. Refreshments will follow the ceremony. Please RSVP by March 30th to secure your seat.",
    imageUrl: "https://placehold.co/600x400/1e3a5f/ffffff?text=Academic+Awards",
    excerpt: "Join us to celebrate over 120 students earning academic honors at this year's Spring Awards Ceremony on April 5th."
  },
  {
    id: 2,
    title: "Annual Spring Sports Day — Registration Now Open",
    date: (/* @__PURE__ */ new Date("2025-03-08")).getTime(),
    category: "Sports",
    content: "Registration is now open for our Annual Spring Sports Day, taking place on April 20th from 8 AM to 4 PM. Students can sign up for track & field events, relay races, long jump, shot put, and team sports including volleyball and soccer. Medals and trophies will be awarded in 12 categories. Register via the student portal before April 10th. All fitness levels welcome — this is a day for fun, teamwork, and school spirit!",
    imageUrl: "https://placehold.co/600x400/1a5c3a/ffffff?text=Sports+Day",
    excerpt: "Sign up for Spring Sports Day on April 20th featuring track & field, relay races, and team sports for all grade levels."
  },
  {
    id: 3,
    title: "Drama Club Presents: A Midsummer Night's Dream",
    date: (/* @__PURE__ */ new Date("2025-02-28")).getTime(),
    category: "Clubs",
    content: "The Twinkle Star Drama Club is thrilled to present Shakespeare's classic comedy, 'A Midsummer Night's Dream,' running March 21–23 at 7:30 PM in the Performing Arts Centre. Directed by Mr. Thomas Ellison, this year's production features a modern-day interpretation set in a vibrant urban park. Tickets are available at the front office ($8 students / $12 adults) or online through the school portal. Seats are limited — book early!",
    imageUrl: "https://placehold.co/600x400/4a1a6e/ffffff?text=Drama+Club",
    excerpt: "The Drama Club brings Shakespeare to life with a modern twist — three nights only, March 21–23 in the Performing Arts Centre."
  },
  {
    id: 4,
    title: "College Fair: 60+ Universities on Campus",
    date: (/* @__PURE__ */ new Date("2025-02-20")).getTime(),
    category: "Events",
    content: "Attention Grade 11 and 12 students: our annual College Fair returns on March 14th from 10 AM to 2 PM in the Sports Hall. Representatives from over 60 universities and colleges — including international institutions — will be on hand to discuss programs, admissions requirements, scholarships, and campus life. Bring your questions, your résumé, and an open mind. Pre-registration is encouraged but not required.",
    imageUrl: "https://placehold.co/600x400/0f4c75/ffffff?text=College+Fair",
    excerpt: "Over 60 universities visit campus on March 14th — a must-attend event for Grade 11 & 12 students planning their next steps."
  },
  {
    id: 5,
    title: "Robotics Team Advances to National Finals",
    date: (/* @__PURE__ */ new Date("2025-02-14")).getTime(),
    category: "Clubs",
    content: "Our Robotics Club, Team Oaks, has qualified for the National FIRST Robotics Competition Finals in Ottawa this May — a first in the school's history! The team of 14 students spent six months designing and building their autonomous competition robot. Coach Dr. Amara Osei described the win as 'a testament to relentless problem-solving and incredible teamwork.' A fundraiser is underway to help cover travel expenses. Donations can be made through the school office.",
    imageUrl: "https://placehold.co/600x400/3d3d7e/ffffff?text=Robotics+Club",
    excerpt: "Team Oaks makes school history by qualifying for the National FIRST Robotics Finals — the first time Twinkle Star English High School has reached nationals."
  },
  {
    id: 6,
    title: "Important: New School Calendar Dates Released",
    date: (/* @__PURE__ */ new Date("2025-02-05")).getTime(),
    category: "Announcements",
    content: "Please note several updates to the 2024–25 school calendar. March 17th is now a Professional Development Day (no classes). The Spring Break window has been adjusted to April 11–22. Final exams will run June 9–18, with the last day of classes moved to June 6th. Full updated calendars are available on the school website and at the main office. Any questions should be directed to the Registrar's Office.",
    imageUrl: "https://placehold.co/600x400/5c3d1e/ffffff?text=Calendar+Update",
    excerpt: "Key 2024–25 calendar changes: new PD Day in March, revised Spring Break, and updated final exam schedule — check the details."
  }
];
const SKELETON_KEYS = ["sk-a", "sk-b", "sk-c", "sk-d", "sk-e", "sk-f"];
function formatDate(timestamp) {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}
function CategoryBadge({ category }) {
  const cls = CATEGORY_COLORS[category] ?? "bg-muted text-muted-foreground border-border";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Badge,
    {
      variant: "outline",
      className: `text-xs font-medium border px-2 py-0.5 ${cls}`,
      children: category
    }
  );
}
function NewsCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 rounded-xl overflow-hidden border border-border bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-44 w-full rounded-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-24 rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-28" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-11/12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4/5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-28 mt-2" })
    ] })
  ] });
}
function NewsDetailModal({
  item,
  onClose
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!item, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto p-0", children: item && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video overflow-hidden rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: item.imageUrl,
        alt: item.title,
        className: "w-full h-full object-cover"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryBadge, { category: item.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3.5 h-3.5" }),
            formatDate(item.date)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-2xl font-display font-bold text-foreground leading-tight text-left", children: item.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-4 italic border-l-2 border-primary/40 pl-4", children: item.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-base leading-relaxed", children: item.content })
    ] })
  ] }) }) });
}
function NewsCard({
  item,
  index,
  onSelect
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.07, duration: 0.45 },
      "data-ocid": `news-card-${item.id}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "group overflow-hidden hover:shadow-elevated transition-smooth h-full flex flex-col cursor-pointer border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "aspect-video overflow-hidden bg-muted w-full block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            onClick: () => onSelect(item),
            "aria-label": `View story: ${item.title}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: item.imageUrl,
                alt: item.title,
                className: "w-full h-full object-cover group-hover:scale-105 transition-smooth",
                loading: "lazy",
                onError: (e) => {
                  e.target.src = "https://placehold.co/600x400/94a3b8/ffffff?text=News";
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryBadge, { category: item.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3 h-3" }),
              formatDate(item.date)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "font-display font-semibold text-base text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer",
              onClick: () => onSelect(item),
              onKeyDown: (e) => e.key === "Enter" && onSelect(item),
              children: item.title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-3 flex-1 mb-4", children: item.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "self-start text-primary hover:text-primary/80 hover:bg-primary/8 px-0 gap-1 group/btn",
              onClick: () => onSelect(item),
              "data-ocid": `news-read-more-${item.id}`,
              children: [
                "Read More",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" })
              ]
            }
          )
        ] })
      ] })
    }
  );
}
function NewsPage() {
  const { data: newsItems, isLoading, isError } = useNews();
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [selectedItem, setSelectedItem] = reactExports.useState(null);
  const displayNews = (newsItems && newsItems.length > 0 ? newsItems : FALLBACK_NEWS).sort((a, b) => Number(b.date) - Number(a.date));
  const filtered = activeCategory === "All" ? displayNews : displayNews.filter((n) => n.category === activeCategory);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55 },
        className: "max-w-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-primary-foreground/15 text-primary-foreground border-primary-foreground/20 text-xs tracking-wide uppercase", children: "Stay Informed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4 leading-tight", children: "News & Events" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/75 text-lg leading-relaxed", children: "The latest stories, announcements, and happenings from our Twinkle Star English High School community." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex flex-wrap gap-2 mb-10",
          "data-ocid": "news-category-filter",
          children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setActiveCategory(cat),
              "data-ocid": `filter-${cat.toLowerCase()}`,
              className: `px-4 py-1.5 rounded-full text-sm font-medium border transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${activeCategory === cat ? "bg-primary text-primary-foreground border-primary shadow-sm" : "bg-card text-foreground border-border hover:border-primary/50 hover:text-primary"}`,
              children: cat
            },
            cat
          ))
        }
      ),
      isError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "flex flex-col items-center justify-center py-20 text-center gap-3",
          "data-ocid": "news-error",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-10 h-10 text-destructive/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-display font-semibold text-foreground", children: "Couldn't load the latest news" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-sm", children: "There was a problem connecting to the server. Please try refreshing the page." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "mt-2",
                onClick: () => window.location.reload(),
                children: "Refresh Page"
              }
            )
          ]
        }
      ),
      isLoading && !isError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: SKELETON_KEYS.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(NewsCardSkeleton, {}, k)) }),
      !isLoading && !isError && filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          className: "flex flex-col items-center justify-center py-20 text-center gap-3",
          "data-ocid": "news-empty",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-7 h-7 text-muted-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-display font-semibold text-foreground", children: "No stories in this category yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Check back soon, or browse all recent news." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "mt-2",
                onClick: () => setActiveCategory("All"),
                "data-ocid": "news-empty-show-all",
                children: "Show All Stories"
              }
            )
          ]
        }
      ),
      !isLoading && !isError && filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        NewsCard,
        {
          item,
          index: i,
          onSelect: setSelectedItem
        },
        item.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      NewsDetailModal,
      {
        item: selectedItem,
        onClose: () => setSelectedItem(null)
      }
    )
  ] });
}
export {
  NewsPage
};
