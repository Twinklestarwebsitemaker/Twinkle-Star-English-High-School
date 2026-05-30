import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  FlaskConical,
  Heart,
  Home,
  Lightbulb,
  Trophy,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const MILESTONES = [
  {
    year: "1962",
    title: "Founded",
    desc: "Twinkle Star English High School opens its doors with 180 students and 12 founding faculty members committed to academic excellence.",
  },
  {
    year: "1975",
    title: "Campus Expansion",
    desc: "The West Wing and dedicated Science Hall are completed, doubling instructional space and adding cutting-edge laboratories.",
  },
  {
    year: "1989",
    title: "Arts & Athletics",
    desc: "The Twinkle Star Performing Arts Theater and Olympic-grade Athletics Complex open, enriching student life.",
  },
  {
    year: "2001",
    title: "Technology Initiative",
    desc: "Full campus network deployment and the launch of one of the region's first dedicated STEM programs.",
  },
  {
    year: "2014",
    title: "Global Partnership",
    desc: "Exchange programs established with partner schools across 14 countries, broadening cultural horizons.",
  },
  {
    year: "2026",
    title: "Today",
    desc: "1,200+ students, 85 faculty & staff, and a proud legacy of sending graduates to the world's finest universities.",
  },
];

const STATS = [
  {
    value: "1,200+",
    label: "Students",
    icon: Users,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    value: "85",
    label: "Faculty & Staff",
    icon: BookOpen,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    value: "98%",
    label: "College Acceptance",
    icon: Trophy,
    color: "text-accent-foreground",
    bg: "bg-accent/20",
  },
  {
    value: "60+",
    label: "Clubs & Activities",
    icon: Heart,
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const VALUES = [
  {
    icon: Trophy,
    title: "Academic Excellence",
    desc: "We set high expectations and provide the resources, mentorship, and environment every student needs to achieve their personal best.",
  },
  {
    icon: Heart,
    title: "Character Development",
    desc: "We nurture integrity, empathy, and resilience — qualities that define not just great students, but great human beings.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Our school thrives when every student, teacher, and family feels seen, valued, and empowered to contribute.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We embrace curiosity and creative thinking, preparing students to adapt and lead in a rapidly changing world.",
  },
];

const ADMISSIONS_STEPS = [
  {
    step: 1,
    icon: Home,
    title: "Submit Application",
    desc: "Complete the online application form, including academic records and a personal statement.",
  },
  {
    step: 2,
    icon: FlaskConical,
    title: "Entrance Assessment",
    desc: "Participate in our age-appropriate academic assessment to help us understand your strengths.",
  },
  {
    step: 3,
    icon: Users,
    title: "Interview",
    desc: "A friendly conversation with our admissions team — we want to get to know you beyond grades.",
  },
  {
    step: 4,
    icon: BookOpen,
    title: "Enrollment",
    desc: "Receive your offer letter, confirm enrollment, and join the Twinkle Star family!",
  },
];

export function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, oklch(0.85 0.12 85 / 0.4) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-1.5 text-sm text-primary-foreground/60 mb-6"
            aria-label="Breadcrumb"
            data-ocid="about-breadcrumb"
          >
            <Link
              to="/"
              className="hover:text-primary-foreground transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary-foreground/90 font-medium">
              About
            </span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-5 bg-accent text-accent-foreground border-accent/40 font-semibold px-3">
              Est. 1962
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-5 text-balance">
              About Twinkle Star English High School
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              Over six decades of transforming young minds into curious,
              compassionate, and capable leaders ready to shape a better world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4">
                Our Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Every Student Deserves to Thrive
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-base md:text-lg">
                We believe every student deserves an education that goes beyond
                textbooks — one that ignites curiosity, builds character, and
                unlocks potential. At Twinkle Star English High School, we see
                every child as a whole person with unique gifts, and we walk
                alongside them on their journey of discovery.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Our experienced educators combine rigorous academic standards
                with a warm, inclusive community where students feel safe to
                take risks, make mistakes, and grow into the leaders the world
                needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden border border-border shadow-elevated bg-card p-8 space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-3">
                    Our Vision
                  </Badge>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    Graduates Who Change the World
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    A school celebrated not just for test scores, but for
                    producing graduates who are intellectually bold, emotionally
                    wise, and driven by purpose — ready to lead in universities,
                    careers, and communities around the globe.
                  </p>
                </div>
                <div className="border-t border-border pt-6">
                  <Badge variant="secondary" className="mb-3">
                    Our Promise
                  </Badge>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We promise to challenge every student to do their personal
                    best, celebrate every milestone, and never stop believing in
                    their potential — from first day to graduation and beyond.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-muted/40 py-16 md:py-20 section-divider">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-3">
              Twinkle Star by the Numbers
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Our Community at a Glance
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {STATS.map(({ value, label, icon: Icon, color, bg }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`stat-${label
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9-]/g, "")}`}
              >
                <Card className="text-center p-6 h-full hover:shadow-elevated transition-smooth">
                  <CardContent className="p-0">
                    <div
                      className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className={`w-6 h-6 ${color}`} />
                    </div>
                    <p className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                      {value}
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                      {label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-3">
              Core Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              These four principles guide everything we do — from how we teach
              to how we build relationships within our school community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-elevated transition-smooth group">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-smooth">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-3 text-base">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-muted/40 py-16 md:py-24 section-divider">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge variant="secondary" className="mb-3">
              Our History
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Six Decades of Excellence
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From a small school with a big dream to a celebrated institution —
              our journey is one of dedication, growth, and community.
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

            <div className="space-y-8">
              {MILESTONES.map(({ year, title, desc }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-5 sm:gap-7 items-start"
                  data-ocid={`timeline-${year}`}
                >
                  {/* Year bubble */}
                  <div className="shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center z-10 relative shadow-elevated">
                    <span className="text-xs font-bold text-primary-foreground leading-tight text-center px-1">
                      {year}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="bg-card rounded-xl border border-border p-5 flex-1 shadow-subtle">
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Overview */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-3">
              Admissions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              How to Join Twinkle Star
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our admissions process is designed to be clear, welcoming, and
              thorough — because finding the right fit matters for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {ADMISSIONS_STEPS.map(({ step, icon: Icon, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
                data-ocid={`admission-step-${step}`}
              >
                {/* Connector arrow for desktop */}
                {i < ADMISSIONS_STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute top-7 left-full z-10 w-6 items-center justify-center -translate-x-1">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}

                <Card className="p-6 h-full text-center hover:shadow-elevated transition-smooth">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 relative">
                      <Icon className="w-5 h-5 text-accent-foreground" />
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {step}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2 text-sm md:text-base">
                      {title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, oklch(0.85 0.12 85 / 0.5) 0%, transparent 55%)",
          }}
        />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-5 bg-accent text-accent-foreground border-accent/40 font-semibold px-3">
              Enroll Today
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4 text-balance">
              Ready to Join Us?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto text-base md:text-lg leading-relaxed">
              Take the first step toward an exceptional education. Our
              admissions team is ready to guide you through every stage of the
              process.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-elevated"
                  data-ocid="about-cta-contact"
                >
                  Get In Touch <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/academics">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold"
                  data-ocid="about-cta-academics"
                >
                  Explore Academics
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
