import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calculator,
  Cpu,
  Dumbbell,
  FlaskConical,
  Globe,
  GraduationCap,
  Languages,
  Microscope,
  Music,
  Palette,
  Star,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { motion } from "motion/react";

// ─── Subjects per grade band ────────────────────────────────────────────────

type Subject = {
  icon: React.ReactNode;
  name: string;
  description: string;
};

const elementarySubjects: Subject[] = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    name: "English Language Arts",
    description:
      "Phonics-based literacy, creative writing, and oral communication from day one. Students build strong reading foundations through guided and independent practice.",
  },
  {
    icon: <Calculator className="w-5 h-5" />,
    name: "Mathematics",
    description:
      "Hands-on numeracy exploration covering counting, operations, fractions, and early geometry using manipulatives and real-world problem solving.",
  },
  {
    icon: <FlaskConical className="w-5 h-5" />,
    name: "Science",
    description:
      "Inquiry-based discovery science connecting natural phenomena to classroom learning. Students conduct experiments and document findings scientifically.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    name: "Social Studies",
    description:
      "Community, history, and civics through age-appropriate storytelling and projects. Students develop a sense of belonging and social responsibility.",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    name: "Arts",
    description:
      "Visual arts, music, drama, and movement woven into weekly dedicated sessions that spark imagination and nurture self-expression.",
  },
  {
    icon: <Dumbbell className="w-5 h-5" />,
    name: "Physical Education",
    description:
      "Structured fitness, cooperative games, and motor-skill development that lay the foundation for lifelong healthy habits.",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    name: "Technology & Computer Science",
    description:
      "Age-appropriate digital literacy, coding fundamentals via block-based programming, and responsible online citizenship.",
  },
];

const middleSubjects: Subject[] = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    name: "English Language Arts",
    description:
      "Literary analysis, argumentative writing, research skills, and public speaking. Students engage with classic and contemporary texts across genres.",
  },
  {
    icon: <Calculator className="w-5 h-5" />,
    name: "Mathematics",
    description:
      "Pre-Algebra through Algebra I with enrichment tracks. Problem-solving and mathematical reasoning are emphasized alongside procedural fluency.",
  },
  {
    icon: <FlaskConical className="w-5 h-5" />,
    name: "Science",
    description:
      "Life, Earth, and Physical Science explored through lab experiments, data analysis, and collaborative STEM projects in our innovation lab.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    name: "Social Studies",
    description:
      "Chronological world history paired with geography and current events, cultivating global awareness and critical civic thinking.",
  },
  {
    icon: <Languages className="w-5 h-5" />,
    name: "World Languages",
    description:
      "Spanish, French, and Mandarin available with immersion electives. Conversational proficiency is the primary benchmark.",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    name: "Arts",
    description:
      "Visual arts, band, chorus, and drama. Students perform in two seasonal showcases and develop a personal creative portfolio.",
  },
  {
    icon: <Dumbbell className="w-5 h-5" />,
    name: "Physical Education",
    description:
      "Team sports, fitness testing, and individual wellness planning. Health education covers nutrition, mental health, and decision-making.",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    name: "Technology & Computer Science",
    description:
      "Robotics, Python fundamentals, design thinking, and digital media production in our fully equipped STEM innovation lab.",
  },
];

const highSubjects: Subject[] = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    name: "English Language Arts",
    description:
      "AP Literature & Composition, AP Language & Composition, and Honors English. Seminar-style discussions, college-prep writing, and senior thesis.",
  },
  {
    icon: <Calculator className="w-5 h-5" />,
    name: "Mathematics",
    description:
      "Algebra II through AP Calculus BC, AP Statistics, and Multivariable Calculus. Dual-enrollment college math available to qualified seniors.",
  },
  {
    icon: <Microscope className="w-5 h-5" />,
    name: "Science",
    description:
      "AP Biology, AP Chemistry, AP Physics (1, 2, C). Research internships pair juniors and seniors with university labs and biotech firms.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    name: "Social Studies",
    description:
      "AP US History, AP World History, AP Government, AP Economics, and an IB Global Politics elective for globally minded students.",
  },
  {
    icon: <Languages className="w-5 h-5" />,
    name: "World Languages",
    description:
      "AP Spanish Language, AP French Language, and AP Chinese Language. Heritage language support available. Exchange program to Spain and France.",
  },
  {
    icon: <Music className="w-5 h-5" />,
    name: "Arts",
    description:
      "Conservatory-level tracks in orchestra, choir, theatre, and visual fine arts. Students audition for regional and state competitions.",
  },
  {
    icon: <Dumbbell className="w-5 h-5" />,
    name: "Physical Education",
    description:
      "Lifetime fitness, competitive athletic program, and a dedicated sports medicine elective. 18 varsity sports teams.",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    name: "Technology & Computer Science",
    description:
      "AP Computer Science A & Principles, cybersecurity, and AI/ML exploration. Students compete in FIRST Robotics and national coding tournaments.",
  },
];

// ─── Achievements ────────────────────────────────────────────────────────────

const ACHIEVEMENTS = [
  {
    icon: <Trophy className="w-6 h-6" />,
    label: "Accreditation",
    value: "AdvancED / Cognia",
    sub: "Full 10-year accreditation renewed 2024",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    label: "Average SAT Score",
    value: "1,410",
    sub: "Top 8% nationally — Class of 2025",
  },
  {
    icon: <Award className="w-6 h-6" />,
    label: "AP Courses Offered",
    value: "22",
    sub: "84% pass rate on AP exams",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    label: "College Acceptance",
    value: "98%",
    sub: "Students accepted to 4-year universities",
  },
];

// ─── Special Programs ────────────────────────────────────────────────────────

const SPECIAL_PROGRAMS = [
  {
    icon: <Star className="w-5 h-5" />,
    title: "Honors Program",
    badge: "Grades 6–12",
    desc: "Differentiated coursework with accelerated pacing, deeper inquiry, and enrichment seminars led by subject matter experts.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Advanced Placement (AP)",
    badge: "Grades 9–12",
    desc: "22 AP courses with dedicated prep resources, practice exams, and a 84% pass rate — among the highest in the region.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "International Baccalaureate",
    badge: "Grades 11–12",
    desc: "Accredited IB Diploma Programme offering globally-recognized credentials and a world-class curriculum.",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "STEM Track",
    badge: "Grades 9–12",
    desc: "Intensive computer science, engineering design, data science, and research internship sequence for future innovators.",
  },
  {
    icon: <Music className="w-5 h-5" />,
    title: "Fine Arts Track",
    badge: "Grades 9–12",
    desc: "Conservatory-level instruction in visual arts, theatre, orchestra, and vocal performance with semester showcases.",
  },
  {
    icon: <Microscope className="w-5 h-5" />,
    title: "Research Program",
    badge: "Grades 11–12",
    desc: "Year-long independent research with university mentors, culminating in a published paper or patent submission.",
  },
];

// ─── Subject Card ─────────────────────────────────────────────────────────────

function SubjectCard({ subject, index }: { subject: Subject; index: number }) {
  return (
    <motion.div
      key={subject.name}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.35 }}
    >
      <Card className="h-full hover:shadow-elevated hover:-translate-y-0.5 transition-smooth border-border">
        <CardContent className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
              {subject.icon}
            </div>
            <h3 className="font-display font-semibold text-foreground text-sm leading-snug">
              {subject.name}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {subject.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function AcademicsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, oklch(0.75 0.18 85) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 font-medium">
              Academics
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-5 leading-tight text-balance">
              A Rigorous Curriculum for Every Learner
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl leading-relaxed">
              From kindergarten through senior year, our programs challenge,
              inspire, and prepare students to thrive in college and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grade-Level Tabs */}
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Badge variant="secondary" className="mb-3">
              By Grade Level
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Programs by Division
            </h2>
            <p className="mt-2 text-muted-foreground max-w-lg">
              Select a school division to explore the full subject offerings
              available to students at each level.
            </p>
          </motion.div>

          <Tabs defaultValue="elementary" data-ocid="academics-tabs">
            <TabsList className="mb-8 h-auto flex-wrap gap-1">
              <TabsTrigger
                value="elementary"
                data-ocid="tab-elementary"
                className="text-sm"
              >
                Elementary (K–5)
              </TabsTrigger>
              <TabsTrigger
                value="middle"
                data-ocid="tab-middle"
                className="text-sm"
              >
                Middle School (6–8)
              </TabsTrigger>
              <TabsTrigger
                value="high"
                data-ocid="tab-high"
                className="text-sm"
              >
                High School (9–12)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="elementary">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {elementarySubjects.map((s, i) => (
                  <SubjectCard key={s.name} subject={s} index={i} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="middle">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {middleSubjects.map((s, i) => (
                  <SubjectCard key={s.name} subject={s} index={i} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="high">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {highSubjects.map((s, i) => (
                  <SubjectCard key={s.name} subject={s} index={i} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="bg-muted/40 py-16 md:py-20 section-divider">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-3">
              By the Numbers
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Academic Achievements
            </h2>
            <p className="mt-2 text-muted-foreground max-w-md mx-auto">
              Decades of academic excellence reflected in our results and
              recognition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ACHIEVEMENTS.map(({ icon, label, value, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-elevated transition-smooth">
                  <CardContent className="p-0 flex flex-col items-center">
                    <div className="p-3 rounded-xl bg-accent/15 text-accent mb-4">
                      {icon}
                    </div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                      {label}
                    </p>
                    <p className="text-3xl font-display font-bold text-foreground mb-1">
                      {value}
                    </p>
                    <p className="text-xs text-muted-foreground">{sub}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Badge variant="secondary" className="mb-3">
              Special Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Pathways to Distinction
            </h2>
            <p className="mt-2 text-muted-foreground max-w-lg">
              Specialized programs for students who want to go deeper, move
              faster, or pursue a passion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SPECIAL_PROGRAMS.map(({ icon, title, badge, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Card className="p-5 h-full hover:shadow-elevated hover:-translate-y-0.5 transition-smooth">
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-md bg-primary/10 text-primary shrink-0">
                          {icon}
                        </div>
                        <h3 className="font-display font-semibold text-foreground text-sm">
                          {title}
                        </h3>
                      </div>
                      <Badge
                        variant="outline"
                        className="shrink-0 text-xs whitespace-nowrap"
                      >
                        {badge}
                      </Badge>
                    </div>
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

      {/* CTA — Request Course Catalog */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
                Ready to Learn More?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Request Our Course Catalog
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-md mx-auto">
                Get the full list of courses, syllabi, and graduation
                requirements — delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full sm:w-auto"
                    data-ocid="academics-catalog-cta"
                  >
                    Request Course Catalog
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
                    data-ocid="academics-counselor-cta"
                  >
                    Talk to a Counselor
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
