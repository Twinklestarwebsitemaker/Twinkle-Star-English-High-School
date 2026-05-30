import { Input } from "@/components/ui/input";
import { Building2, Mail, Search, Star, Users } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";

// ── Types ───────────────────────────────────────────────────────────────────
type Department = "Administration" | "Teachers" | "Support Staff";

interface StaffMember {
  id: number;
  name: string;
  title: string;
  department: Department;
  email: string;
  avatarSeed: string;
}

type FilterTab = "All" | Department;

// ── Sample data ──────────────────────────────────────────────────────────────
const STAFF: StaffMember[] = [
  {
    id: 1,
    name: "Mr. Aman Suresh Yadav",
    title: "Incharge",
    department: "Administration",
    email: "a.yadav@twinklestarhighschool.edu",
    avatarSeed: "aman",
  },
  {
    id: 2,
    name: "Dr. Margaret Holloway",
    title: "Principal",
    department: "Administration",
    email: "m.holloway@twinklestarhighschool.edu",
    avatarSeed: "margaret",
  },
  {
    id: 3,
    name: "Mr. Daniel Ortiz",
    title: "Vice Principal",
    department: "Administration",
    email: "d.ortiz@twinklestarhighschool.edu",
    avatarSeed: "daniel",
  },
  {
    id: 4,
    name: "Ms. Rachel Kim",
    title: "Dean of Students",
    department: "Administration",
    email: "r.kim@twinklestarhighschool.edu",
    avatarSeed: "rachel",
  },
  {
    id: 5,
    name: "Mr. James Whitfield",
    title: "English & Literature",
    department: "Teachers",
    email: "j.whitfield@twinklestarhighschool.edu",
    avatarSeed: "james",
  },
  {
    id: 6,
    name: "Dr. Priya Nair",
    title: "Mathematics",
    department: "Teachers",
    email: "p.nair@twinklestarhighschool.edu",
    avatarSeed: "priya",
  },
  {
    id: 7,
    name: "Ms. Sofia Alvarez",
    title: "Science & Biology",
    department: "Teachers",
    email: "s.alvarez@twinklestarhighschool.edu",
    avatarSeed: "sofia",
  },
  {
    id: 8,
    name: "Mr. Ethan Brooks",
    title: "History & Social Studies",
    department: "Teachers",
    email: "e.brooks@twinklestarhighschool.edu",
    avatarSeed: "ethan",
  },
  {
    id: 9,
    name: "Ms. Claire Fontaine",
    title: "French & Spanish",
    department: "Teachers",
    email: "c.fontaine@twinklestarhighschool.edu",
    avatarSeed: "claire",
  },
  {
    id: 10,
    name: "Mr. Samuel Okafor",
    title: "Physical Education",
    department: "Teachers",
    email: "s.okafor@twinklestarhighschool.edu",
    avatarSeed: "samuel",
  },
  {
    id: 11,
    name: "Ms. Yuki Tanaka",
    title: "Art & Design",
    department: "Teachers",
    email: "y.tanaka@twinklestarhighschool.edu",
    avatarSeed: "yuki",
  },
  {
    id: 12,
    name: "Mr. Carlos Mendez",
    title: "School Counselor",
    department: "Support Staff",
    email: "c.mendez@twinklestarhighschool.edu",
    avatarSeed: "carlos",
  },
  {
    id: 13,
    name: "Ms. Linda Perkins",
    title: "Library & Resource Specialist",
    department: "Support Staff",
    email: "l.perkins@twinklestarhighschool.edu",
    avatarSeed: "linda",
  },
];

const TABS: FilterTab[] = [
  "All",
  "Administration",
  "Teachers",
  "Support Staff",
];

const DEPT_STYLES: Record<Department, string> = {
  Administration: "bg-primary/10 text-primary border-primary/25",
  Teachers: "bg-accent/20 text-accent-foreground border-accent/35",
  "Support Staff": "bg-secondary text-secondary-foreground border-border",
};

const STATS = [
  { label: "Faculty & Staff", value: "85", icon: Users },
  { label: "Departments", value: "12", icon: Building2 },
  { label: "Avg. Years Experience", value: "15", icon: Star },
];

function avatarUrl(seed: string) {
  return `https://api.dicebear.com/8.x/personas/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&radius=50`;
}

// ── Staff Card ───────────────────────────────────────────────────────────────
function StaffCard({ member, index }: { member: StaffMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.4) }}
      data-ocid={`staff-card-${member.id}`}
      className="group relative bg-card rounded-xl border border-border shadow-subtle hover:shadow-elevated transition-smooth overflow-hidden"
    >
      {/* Avatar area */}
      <div className="relative h-44 bg-muted/60 flex items-center justify-center overflow-hidden">
        <img
          src={avatarUrl(member.avatarSeed)}
          alt={`Portrait of ${member.name}`}
          width={112}
          height={112}
          className="w-28 h-28 rounded-full object-cover shadow-subtle transition-smooth group-hover:scale-105"
          loading="lazy"
        />
        {/* Email hover overlay */}
        <div className="absolute inset-0 bg-primary/88 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
          <Mail className="w-6 h-6 text-primary-foreground" />
          <a
            href={`mailto:${member.email}`}
            data-ocid={`staff-email-${member.id}`}
            className="text-sm font-medium text-primary-foreground hover:underline px-4 text-center break-all"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Email ${member.name}`}
          >
            {member.email}
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3
          className="font-display font-semibold text-foreground text-base leading-tight truncate"
          title={member.name}
        >
          {member.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-0.5 truncate">
          {member.title}
        </p>
        <div className="mt-3">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${DEPT_STYLES[member.department]}`}
          >
            {member.department}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export function StaffPage() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<FilterTab>("All");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return STAFF.filter((s) => {
      const matchesTab = activeTab === "All" || s.department === activeTab;
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.department.toLowerCase().includes(q);
      return matchesTab && matchesQuery;
    });
  }, [query, activeTab]);

  return (
    <div className="bg-background min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-card border-b section-divider py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold tracking-widest uppercase text-primary mb-3"
          >
            Meet the Team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance"
          >
            Twinkle Star English High School is proud to have a team of
            dedicated educators and support professionals committed to nurturing
            every student's potential.
          </motion.p>
        </div>
      </section>

      {/* ── Stat bar ── */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-20">
            {STATS.map(({ label, value, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.18 + i * 0.1 }}
                className="flex flex-col items-center gap-0.5"
              >
                <Icon
                  className="w-5 h-5 text-primary-foreground/65 mb-1"
                  aria-hidden
                />
                <span className="font-display text-3xl font-bold text-primary-foreground">
                  {value}
                </span>
                <span className="text-sm text-primary-foreground/70 font-body">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Search & Department filter ── */}
      <section className="bg-muted/30 border-b section-divider py-5 sticky top-0 z-10 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                aria-hidden
              />
              <Input
                data-ocid="staff-search"
                type="search"
                placeholder="Search by name or department…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9 bg-card border-input"
                aria-label="Search staff"
              />
            </div>

            {/* Tabs */}
            <div
              className="flex gap-1.5 flex-wrap"
              role="tablist"
              aria-label="Filter by department"
            >
              {TABS.map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  data-ocid={`dept-filter-${tab.toLowerCase().replace(/\s+/g, "-")}`}
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  type="button"
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    activeTab === tab
                      ? "bg-primary text-primary-foreground shadow-subtle"
                      : "bg-card text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div
              data-ocid="staff-empty-state"
              className="flex flex-col items-center justify-center gap-4 py-24 text-center"
            >
              <Users
                className="w-12 h-12 text-muted-foreground/35"
                aria-hidden
              />
              <p className="text-lg font-medium text-muted-foreground">
                No staff members match your search.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveTab("All");
                }}
                className="text-sm text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((member, i) => (
                <StaffCard key={member.id} member={member} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className="bg-muted/40 border-t section-divider py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">
            Interested in Joining Our Team?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            We're always looking for passionate educators who share our
            commitment to student success.
          </p>
          <a
            href="mailto:careers@twinklestarhighschool.edu"
            data-ocid="staff-careers-cta"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-smooth shadow-subtle"
          >
            <Mail className="w-4 h-4" aria-hidden />
            careers@twinklestarhighschool.edu
          </a>
        </div>
      </section>
    </div>
  );
}
