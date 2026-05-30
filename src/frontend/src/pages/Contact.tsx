import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  CheckCircle2,
  Clock,
  ExternalLink,
  GraduationCap,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const ADMISSION_ENQUIRY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScCK5rokmYQfiLbu9wInuarw-qjPbjhHRtW39-bbMH6OAygFA/viewform";

const SCHOOL_INFO = [
  {
    icon: Phone,
    label: "Main Phone",
    value: "+91 8888889214",
    href: "tel:8888889214",
  },
  {
    icon: MapPin,
    label: "Address",
    value:
      "Danjay Plot Near Kum Kum Medical Store Kargil Road Sharma Wadi Santosh Bhavan Nalasopara East Palghar 401209",
    href: "https://maps.google.com/?q=Danjay+Plot+Near+Kum+Kum+Medical+Store+Kargil+Road+Sharma+Wadi+Santosh+Bhavan+Nalasopara+East+Palghar+401209",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon–Fri, 7:30 am – 5:00 pm",
    href: null,
  },
];

const QUICK_CONTACTS = [
  {
    icon: GraduationCap,
    title: "Admissions Office",
    phone: "+91 8888889214",
    description: "Enrollment, tours, and application inquiries.",
  },
  {
    icon: Building2,
    title: "Main Office",
    phone: "+91 8888889214",
    description: "General information, attendance, and records.",
  },
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/ayadanand@gmail.com", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Hero banner */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Badge className="mb-4 bg-primary-foreground/15 text-primary-foreground border-primary-foreground/20">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-xl leading-relaxed">
              We're here to help. Reach out to our team and we'll respond within
              one business day.
            </p>
            <div className="mt-6">
              <a
                href={ADMISSION_ENQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="admission-enquiry-button"
              >
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md transition-colors duration-200 flex items-center gap-2"
                  size="lg"
                >
                  Admission Enquiry
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info + Form */}
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* School info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <Badge variant="secondary" className="mb-3">
                  Find Us
                </Badge>
                <h2 className="text-2xl font-display font-bold text-foreground mb-1">
                  School Information
                </h2>
              </div>

              <div className="space-y-4">
                {SCHOOL_INFO.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={
                            href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm text-foreground hover:text-primary transition-colors duration-200 break-words"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-border shadow-subtle">
                <img
                  src="https://placehold.co/600x240/dde8f5/4a6fa5?text=Twinkle+Star+English+High+School"
                  alt="Twinkle Star English High School campus map location"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Card className="p-6 md:p-8 shadow-subtle">
                <CardContent className="p-0">
                  {submitted ? (
                    <div
                      className="flex flex-col items-center justify-center py-14 text-center gap-4"
                      data-ocid="contact.success_state"
                    >
                      <CheckCircle2 className="h-14 w-14 text-primary" />
                      <h2 className="text-2xl font-display font-semibold text-foreground">
                        Message Sent!
                      </h2>
                      <p className="text-muted-foreground max-w-sm">
                        Thank you for reaching out. We have received your
                        message and will get back to you within one business
                        day.
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        className="mt-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        onClick={() => setSubmitted(false)}
                        data-ocid="contact.send-another_button"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      action="https://formspree.io/f/ayadanand@gmail.com"
                      method="POST"
                      className="space-y-5"
                      data-ocid="contact.form"
                    >
                      <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                        Send a Message
                      </h2>

                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label
                            htmlFor="contact-name"
                            className="text-sm font-medium text-primary"
                          >
                            Full Name{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            placeholder="Jane Smith"
                            className="flex h-10 w-full rounded-md border border-primary/40 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                            data-ocid="contact.input"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label
                            htmlFor="contact-email"
                            className="text-sm font-medium text-primary"
                          >
                            Email Address{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            placeholder="jane@example.com"
                            className="flex h-10 w-full rounded-md border border-primary/40 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                            data-ocid="contact.email_input"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-subject"
                          className="text-sm font-medium text-primary"
                        >
                          Subject <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="contact-subject"
                          name="subject"
                          type="text"
                          required
                          placeholder="Briefly describe your inquiry"
                          className="flex h-10 w-full rounded-md border border-primary/40 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                          data-ocid="contact.subject_input"
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-message"
                          className="text-sm font-medium text-primary"
                        >
                          Message <span className="text-destructive">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell us how we can help you…"
                          className="flex min-h-[120px] w-full rounded-md border border-primary/40 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none transition-colors duration-200"
                          data-ocid="contact.textarea"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={submitting}
                        className="w-full sm:w-auto font-semibold bg-red-600 hover:bg-red-700 text-white border-0 transition-colors duration-200"
                        data-ocid="contact.submit_button"
                      >
                        {submitting ? "Sending…" : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="bg-muted/40 border-t border-border py-14 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-3">
              Direct Lines
            </Badge>
            <h2 className="text-2xl font-display font-bold text-foreground">
              Reach the Right Department
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {QUICK_CONTACTS.map(
              ({ icon: Icon, title, phone, description }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <Card className="shadow-subtle border-border hover:shadow-elevated transition-smooth h-full">
                    <CardContent className="p-6 flex gap-4">
                      <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15">
                        <Icon className="h-5 w-5 text-accent-foreground" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display font-semibold text-foreground mb-0.5">
                          {title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2.5">
                          {description}
                        </p>
                        <div className="space-y-1">
                          <a
                            href={`tel:${phone.replace(/[\s+]/g, "")}`}
                            className="flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors duration-200"
                          >
                            <Phone className="h-3.5 w-3.5 shrink-0" />
                            <span>{phone}</span>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
