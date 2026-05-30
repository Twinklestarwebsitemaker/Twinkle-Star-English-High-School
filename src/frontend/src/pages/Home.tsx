import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useNews } from "@/hooks/useBackend";
import type { NewsItem } from "@/types";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  GraduationCap,
  Medal,
  Palette,
  Quote,
  Star,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

// ─── Static data ──────────────────────────────────────────────────────────────

const STATS = [
  { value: "1,200+", label: "Students", icon: Users },
  { value: "85", label: "Faculty", icon: GraduationCap },
  { value: "1962", label: "Founded", icon: Star },
  { value: "98%", label: "College Acceptance", icon: Trophy },
];

const PROGRAMS = [
  {
    icon: Zap,
    title: "STEM Excellence",
    colorIcon: "bg-primary/10 text-primary",
    tag: "Science & Technology",
    description:
      "Cutting-edge labs, robotics competitions, and AP courses in Computer Science, Biology, Chemistry, and Physics. Our graduates earn top university scholarships year after year.",
  },
  {
    icon: Palette,
    title: "Arts & Humanities",
    colorIcon: "bg-accent/15 text-accent",
    tag: "Creative Expression",
    description:
      "Award-winning fine arts, theater, music, and literary programs. Our performing arts center rivals professional stages — and our alumni prove it.",
  },
  {
    icon: Medal,
    title: "Athletics",
    colorIcon: "bg-secondary text-secondary-foreground",
    tag: "Varsity & Club Sports",
    description:
      "22 varsity sports, state championships, and a culture of healthy competition. Student athletes learn discipline, teamwork, and resilience on and off the field.",
  },
];

const SAMPLE_NEWS: NewsItem[] = [
  {
    id: 1,
    title: "Twinkle Star Robotics Team Wins State Championship",
    date: Date.now() - 3 * 24 * 60 * 60 * 1000,
    category: "Achievement",
    content: "",
    imageUrl: "/assets/generated/school-hero.dim_1600x900.jpg",
    excerpt:
      "Our robotics team claimed first place at the 2026 State STEM Olympics, beating 42 competing schools with their autonomous navigation design.",
  },
  {
    id: 2,
    title: "New STEM Innovation Center Opens This Fall",
    date: Date.now() - 7 * 24 * 60 * 60 * 1000,
    category: "Campus",
    content: "",
    imageUrl: "/assets/generated/school-hero.dim_1600x900.jpg",
    excerpt:
      "A $4.2M state-of-the-art STEM center is set to open in September, featuring three new computer science labs and a biotech research wing.",
  },
  {
    id: 3,
    title: "Class of 2026 Earns Record $8M in Scholarships",
    date: Date.now() - 14 * 24 * 60 * 60 * 1000,
    category: "Academics",
    content: "",
    imageUrl: "/assets/generated/school-hero.dim_1600x900.jpg",
    excerpt:
      "Seniors in the graduating class of 2026 have collectively been awarded over $8 million in merit and need-based scholarships across 200+ universities.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Twinkle Star didn't just prepare me for college — it prepared me for life. The teachers here genuinely care about every student's growth and potential.",
    author: "Maya Chen",
    role: "Alumna · Stanford Class of 2024",
    initials: "MC",
  },
  {
    quote:
      "As a parent, I've watched my son's confidence and critical thinking skills soar. The faculty's dedication to excellence is truly unmatched.",
    author: "David Okafor",
    role: "Parent of Junior-year student",
    initials: "DO",
  },
];

const GALLERY_ITEMS = [
  { alt: "Campus building exterior", span: "col-span-2 md:col-span-2" },
  { alt: "Students working in science lab", span: "" },
  { alt: "Athletic field and stadium", span: "" },
  { alt: "Art studio with student work", span: "" },
  { alt: "Library and reading hall", span: "" },
];

// ─── NewsCard ─────────────────────────────────────────────────────────────────

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  const dateStr = new Date(item.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="group h-full overflow-hidden hover:shadow-elevated transition-smooth border-border flex flex-col"
        data-ocid={`news-card-${item.id}`}
      >
        <div className="aspect-[16/9] overflow-hidden bg-muted shrink-0">
          <img
            src={
              item.imageUrl || "/assets/generated/school-hero.dim_1600x900.jpg"
            }
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
        <CardContent className="p-5 flex flex-col flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs font-medium">
              {item.category}
            </Badge>
            <span className="text-muted-foreground text-xs flex items-center gap-1">
              <Calendar className="size-3" />
              {dateStr}
            </span>
          </div>
          <h3 className="font-display font-semibold text-base leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2 flex-1">
            {item.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {item.excerpt}
          </p>
          <Link
            to="/news"
            className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-smooth mt-auto"
          >
            Read more <ArrowRight className="size-3.5" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ─── NewsSection ──────────────────────────────────────────────────────────────

function NewsSection() {
  const { data: news, isLoading } = useNews();
  const displayNews = news && news.length > 0 ? news.slice(0, 3) : SAMPLE_NEWS;

  return (
    <section className="bg-muted/30 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge
            variant="outline"
            className="mb-3 text-primary border-primary/30"
          >
            Latest Updates
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            School News & Events
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Stay connected with what's happening at Twinkle Star English High
            School.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-44 w-full rounded-lg" />
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayNews.map((item, i) => (
              <NewsCard key={item.id} item={item} index={i} />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link to="/news">
            <Button variant="outline" data-ocid="view-all-news">
              View All News <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── HomePage ─────────────────────────────────────────────────────────────────

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        data-ocid="hero-section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/school-hero.dim_1600x900.jpg')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
        <div className="absolute inset-0 bg-primary/35" aria-hidden="true" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-24">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl"
          >
            <Badge className="mb-5 bg-accent/20 text-accent-foreground border border-accent/40 backdrop-blur-sm text-sm px-3 py-1">
              Welcome Twinkle Star English High School &amp; Junior College
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-[3.5rem] text-white leading-tight text-balance mb-5">
              Inspiring Minds,{" "}
              <span className="text-accent drop-shadow-sm">
                Shaping Futures
              </span>
            </h1>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              A K–12 learning community where academic excellence, creative
              exploration, and athletic achievement converge to prepare students
              for lifelong success.
            </p>

            <div className="flex flex-wrap gap-3" data-ocid="hero-ctas">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-elevated font-semibold transition-smooth"
                onClick={() => navigate({ to: "/contact" })}
                data-ocid="cta-schedule-tour"
              >
                Schedule a Tour
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-accent text-accent-foreground hover:bg-accent/90 backdrop-blur-sm font-semibold transition-smooth"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLScCK5rokmYQfiLbu9wInuarw-qjPbjhHRtW39-bbMH6OAygFA/viewform",
                    "_blank",
                  )
                }
                data-ocid="cta-admission-enquiry"
              >
                Admission Enquiry
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 font-semibold transition-smooth"
                onClick={() => navigate({ to: "/contact" })}
                data-ocid="cta-contact"
              >
                Contact Us <ArrowRight className="ml-1 size-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-70">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center pt-2">
            <div className="w-1.5 h-2.5 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <section
        className="bg-primary text-primary-foreground py-8 px-4"
        data-ocid="stats-section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-primary-foreground/20">
            {STATS.map(({ value, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center py-4 md:py-0"
                data-ocid={`stat-${label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Icon className="size-6 mb-2 opacity-75" />
                <span className="font-display font-bold text-3xl tracking-tight">
                  {value}
                </span>
                <span className="text-primary-foreground/70 text-sm mt-1">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Programs ─────────────────────────────────────────────── */}
      <section className="bg-background py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge
              variant="outline"
              className="mb-3 text-primary border-primary/30"
            >
              Academic Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Programs Built for Every Passion
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              From the laboratory to the stage, Twinkle Star offers pathways for
              every curious mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROGRAMS.map(
              ({ icon: Icon, title, colorIcon, tag, description }, i) => (
                <motion.div
                  key={title}
                  initial={{
                    opacity: 0,
                    x: i === 0 ? -28 : i === 2 ? 28 : 0,
                    y: i === 1 ? 28 : 0,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                >
                  <Card
                    className="h-full group hover:shadow-elevated transition-smooth border-border cursor-pointer"
                    onClick={() => navigate({ to: "/academics" })}
                    data-ocid={`program-card-${i}`}
                  >
                    <CardContent className="p-6 space-y-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorIcon}`}
                      >
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="text-xs mb-2">
                          {tag}
                        </Badge>
                        <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                          {title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {description}
                      </p>
                      <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-smooth">
                        <BookOpen className="size-3.5" /> Explore program
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── News ─────────────────────────────────────────────────────────── */}
      <NewsSection />

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="bg-background py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge
              variant="outline"
              className="mb-3 text-primary border-primary/30"
            >
              Community Voices
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What Our Community Says
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map(({ quote, author, role, initials }, i) => (
              <motion.div
                key={author}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
              >
                <Card className="h-full border-border bg-card">
                  <CardContent className="p-7 space-y-5">
                    <Quote className="size-8 text-accent opacity-55" />
                    <p className="text-foreground leading-relaxed text-base italic">
                      "{quote}"
                    </p>
                    <div className="flex items-center gap-3 pt-3 border-t border-border">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm shrink-0">
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground text-sm truncate">
                          {author}
                        </p>
                        <p className="text-muted-foreground text-xs truncate">
                          {role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────────────── */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Life at Twinkle Star
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              A glimpse into our vibrant campus community
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
            {GALLERY_ITEMS.map((item) => (
              <motion.div
                key={item.alt}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`overflow-hidden rounded-xl bg-muted ${item.span}`}
                data-ocid={`gallery-${item.alt.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <img
                  src="/assets/generated/school-hero.dim_1600x900.jpg"
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="bg-primary py-16 px-4" data-ocid="cta-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Ready to Join the Twinkle Star Family?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
            Applications for the 2026–27 school year are now open. Schedule a
            campus tour and see why families choose Twinkle Star generation
            after generation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-elevated transition-smooth"
              onClick={() => navigate({ to: "/contact" })}
              data-ocid="footer-cta-apply"
            >
              Apply for Admission
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-semibold transition-smooth"
              onClick={() => navigate({ to: "/about" })}
              data-ocid="footer-cta-learn-more"
            >
              Learn More About Us
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
