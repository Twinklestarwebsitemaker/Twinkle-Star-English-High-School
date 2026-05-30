import { c as createLucideIcon, j as jsxRuntimeExports, k as cn, r as reactExports, aq as Mail } from "./index-CWAoBUuL.js";
import { m as motion } from "./proxy-TTCtMZI_.js";
import { U as Users } from "./users-Bb_Nmv5e.js";
import { B as Building2 } from "./building-2-Gtu3mWDI.js";
import { S as Star } from "./star-BRdEEPEH.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
const STAFF = [
  {
    id: 1,
    name: "Mr. Aman Suresh Yadav",
    title: "Incharge",
    department: "Administration",
    email: "a.yadav@twinklestarhighschool.edu",
    avatarSeed: "aman"
  },
  {
    id: 2,
    name: "Dr. Margaret Holloway",
    title: "Principal",
    department: "Administration",
    email: "m.holloway@twinklestarhighschool.edu",
    avatarSeed: "margaret"
  },
  {
    id: 3,
    name: "Mr. Daniel Ortiz",
    title: "Vice Principal",
    department: "Administration",
    email: "d.ortiz@twinklestarhighschool.edu",
    avatarSeed: "daniel"
  },
  {
    id: 4,
    name: "Ms. Rachel Kim",
    title: "Dean of Students",
    department: "Administration",
    email: "r.kim@twinklestarhighschool.edu",
    avatarSeed: "rachel"
  },
  {
    id: 5,
    name: "Mr. James Whitfield",
    title: "English & Literature",
    department: "Teachers",
    email: "j.whitfield@twinklestarhighschool.edu",
    avatarSeed: "james"
  },
  {
    id: 6,
    name: "Dr. Priya Nair",
    title: "Mathematics",
    department: "Teachers",
    email: "p.nair@twinklestarhighschool.edu",
    avatarSeed: "priya"
  },
  {
    id: 7,
    name: "Ms. Sofia Alvarez",
    title: "Science & Biology",
    department: "Teachers",
    email: "s.alvarez@twinklestarhighschool.edu",
    avatarSeed: "sofia"
  },
  {
    id: 8,
    name: "Mr. Ethan Brooks",
    title: "History & Social Studies",
    department: "Teachers",
    email: "e.brooks@twinklestarhighschool.edu",
    avatarSeed: "ethan"
  },
  {
    id: 9,
    name: "Ms. Claire Fontaine",
    title: "French & Spanish",
    department: "Teachers",
    email: "c.fontaine@twinklestarhighschool.edu",
    avatarSeed: "claire"
  },
  {
    id: 10,
    name: "Mr. Samuel Okafor",
    title: "Physical Education",
    department: "Teachers",
    email: "s.okafor@twinklestarhighschool.edu",
    avatarSeed: "samuel"
  },
  {
    id: 11,
    name: "Ms. Yuki Tanaka",
    title: "Art & Design",
    department: "Teachers",
    email: "y.tanaka@twinklestarhighschool.edu",
    avatarSeed: "yuki"
  },
  {
    id: 12,
    name: "Mr. Carlos Mendez",
    title: "School Counselor",
    department: "Support Staff",
    email: "c.mendez@twinklestarhighschool.edu",
    avatarSeed: "carlos"
  },
  {
    id: 13,
    name: "Ms. Linda Perkins",
    title: "Library & Resource Specialist",
    department: "Support Staff",
    email: "l.perkins@twinklestarhighschool.edu",
    avatarSeed: "linda"
  }
];
const TABS = [
  "All",
  "Administration",
  "Teachers",
  "Support Staff"
];
const DEPT_STYLES = {
  Administration: "bg-primary/10 text-primary border-primary/25",
  Teachers: "bg-accent/20 text-accent-foreground border-accent/35",
  "Support Staff": "bg-secondary text-secondary-foreground border-border"
};
const STATS = [
  { label: "Faculty & Staff", value: "85", icon: Users },
  { label: "Departments", value: "12", icon: Building2 },
  { label: "Avg. Years Experience", value: "15", icon: Star }
];
function avatarUrl(seed) {
  return `https://api.dicebear.com/8.x/personas/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&radius=50`;
}
function StaffCard({ member, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.35, delay: Math.min(index * 0.05, 0.4) },
      "data-ocid": `staff-card-${member.id}`,
      className: "group relative bg-card rounded-xl border border-border shadow-subtle hover:shadow-elevated transition-smooth overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 bg-muted/60 flex items-center justify-center overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: avatarUrl(member.avatarSeed),
              alt: `Portrait of ${member.name}`,
              width: 112,
              height: 112,
              className: "w-28 h-28 rounded-full object-cover shadow-subtle transition-smooth group-hover:scale-105",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-primary/88 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-smooth", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-6 h-6 text-primary-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `mailto:${member.email}`,
                "data-ocid": `staff-email-${member.id}`,
                className: "text-sm font-medium text-primary-foreground hover:underline px-4 text-center break-all",
                onClick: (e) => e.stopPropagation(),
                "aria-label": `Email ${member.name}`,
                children: member.email
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "font-display font-semibold text-foreground text-base leading-tight truncate",
              title: member.name,
              children: member.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5 truncate", children: member.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${DEPT_STYLES[member.department]}`,
              children: member.department
            }
          ) })
        ] })
      ]
    }
  );
}
function StaffPage() {
  const [query, setQuery] = reactExports.useState("");
  const [activeTab, setActiveTab] = reactExports.useState("All");
  const filtered = reactExports.useMemo(() => {
    const q = query.toLowerCase().trim();
    return STAFF.filter((s) => {
      const matchesTab = activeTab === "All" || s.department === activeTab;
      const matchesQuery = !q || s.name.toLowerCase().includes(q) || s.department.toLowerCase().includes(q);
      return matchesTab && matchesQuery;
    });
  }, [query, activeTab]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b section-divider py-14 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4 },
          className: "text-xs font-semibold tracking-widest uppercase text-primary mb-3",
          children: "Meet the Team"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay: 0.06 },
          className: "font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance",
          children: "Our Team"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay: 0.12 },
          className: "text-lg text-muted-foreground max-w-2xl mx-auto text-balance",
          children: "Twinkle Star English High School is proud to have a team of dedicated educators and support professionals committed to nurturing every student's potential."
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-20", children: STATS.map(({ label, value, icon: Icon }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: 0.18 + i * 0.1 },
        className: "flex flex-col items-center gap-0.5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Icon,
            {
              className: "w-5 h-5 text-primary-foreground/65 mb-1",
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-bold text-primary-foreground", children: value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-primary-foreground/70 font-body", children: label })
        ]
      },
      label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 border-b section-divider py-5 sticky top-0 z-10 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Search,
          {
            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            "data-ocid": "staff-search",
            type: "search",
            placeholder: "Search by name or department…",
            value: query,
            onChange: (e) => setQuery(e.target.value),
            className: "pl-9 bg-card border-input",
            "aria-label": "Search staff"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex gap-1.5 flex-wrap",
          role: "tablist",
          "aria-label": "Filter by department",
          children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              role: "tab",
              "data-ocid": `dept-filter-${tab.toLowerCase().replace(/\s+/g, "-")}`,
              "aria-selected": activeTab === tab,
              onClick: () => setActiveTab(tab),
              type: "button",
              className: `px-3.5 py-1.5 rounded-full text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${activeTab === tab ? "bg-primary text-primary-foreground shadow-subtle" : "bg-card text-muted-foreground hover:text-foreground border border-border"}`,
              children: tab
            },
            tab
          ))
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "staff-empty-state",
        className: "flex flex-col items-center justify-center gap-4 py-24 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Users,
            {
              className: "w-12 h-12 text-muted-foreground/35",
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium text-muted-foreground", children: "No staff members match your search." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setQuery("");
                setActiveTab("All");
              },
              className: "text-sm text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded",
              children: "Clear filters"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: filtered.map((member, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaffCard, { member, index: i }, member.id)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 border-t section-divider py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-3", children: "Interested in Joining Our Team?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 max-w-md mx-auto", children: "We're always looking for passionate educators who share our commitment to student success." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "mailto:careers@twinklestarhighschool.edu",
          "data-ocid": "staff-careers-cta",
          className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-smooth shadow-subtle",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4", "aria-hidden": true }),
            "careers@twinklestarhighschool.edu"
          ]
        }
      )
    ] }) })
  ] });
}
export {
  StaffPage
};
