import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, ar as Phone, as as MapPin, G as GraduationCap } from "./index-CWAoBUuL.js";
import { B as Badge, C as Card, a as CardContent } from "./card-D7mmVHzW.js";
import { m as motion } from "./proxy-TTCtMZI_.js";
import { B as Building2 } from "./building-2-Gtu3mWDI.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode);
const ADMISSION_ENQUIRY_URL = "https://docs.google.com/forms/d/e/1FAIpQLScCK5rokmYQfiLbu9wInuarw-qjPbjhHRtW39-bbMH6OAygFA/viewform";
const SCHOOL_INFO = [
  {
    icon: Phone,
    label: "Main Phone",
    value: "+91 8888889214",
    href: "tel:8888889214"
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Danjay Plot Near Kum Kum Medical Store Kargil Road Sharma Wadi Santosh Bhavan Nalasopara East Palghar 401209",
    href: "https://maps.google.com/?q=Danjay+Plot+Near+Kum+Kum+Medical+Store+Kargil+Road+Sharma+Wadi+Santosh+Bhavan+Nalasopara+East+Palghar+401209"
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon–Fri, 7:30 am – 5:00 pm",
    href: null
  }
];
const QUICK_CONTACTS = [
  {
    icon: GraduationCap,
    title: "Admissions Office",
    phone: "+91 8888889214",
    description: "Enrollment, tours, and application inquiries."
  },
  {
    icon: Building2,
    title: "Main Office",
    phone: "+91 8888889214",
    description: "General information, attendance, and records."
  }
];
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const formRef = reactExports.useRef(null);
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/ayadanand@gmail.com", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } finally {
      setSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-primary-foreground/15 text-primary-foreground border-primary-foreground/20", children: "Get In Touch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4", children: "Contact Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg max-w-xl leading-relaxed", children: "We're here to help. Reach out to our team and we'll respond within one business day." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: ADMISSION_ENQUIRY_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": "admission-enquiry-button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md transition-colors duration-200 flex items-center gap-2",
                  size: "lg",
                  children: [
                    "Admission Enquiry",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4" })
                  ]
                }
              )
            }
          ) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "space-y-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Find Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground mb-1", children: "School Information" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: SCHOOL_INFO.map(({ icon: Icon, label, value, href }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5", children: label }),
                href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href,
                    target: href.startsWith("http") ? "_blank" : void 0,
                    rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
                    className: "text-sm text-foreground hover:text-primary transition-colors duration-200 break-words",
                    children: value
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: value })
              ] })
            ] }, label)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl overflow-hidden border border-border shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://placehold.co/600x240/dde8f5/4a6fa5?text=Twinkle+Star+English+High+School",
                alt: "Twinkle Star English High School campus map location",
                className: "w-full object-cover",
                loading: "lazy"
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "lg:col-span-2",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 md:p-8 shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center justify-center py-14 text-center gap-4",
              "data-ocid": "contact.success_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-14 w-14 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-semibold text-foreground", children: "Message Sent!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm", children: "Thank you for reaching out. We have received your message and will get back to you within one business day." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    className: "mt-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200",
                    onClick: () => setSubmitted(false),
                    "data-ocid": "contact.send-another_button",
                    children: "Send Another Message"
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              ref: formRef,
              onSubmit: handleSubmit,
              action: "https://formspree.io/f/ayadanand@gmail.com",
              method: "POST",
              className: "space-y-5",
              "data-ocid": "contact.form",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground mb-2", children: "Send a Message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        htmlFor: "contact-name",
                        className: "text-sm font-medium text-primary",
                        children: [
                          "Full Name",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "contact-name",
                        name: "name",
                        type: "text",
                        required: true,
                        placeholder: "Jane Smith",
                        className: "flex h-10 w-full rounded-md border border-primary/40 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200",
                        "data-ocid": "contact.input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        htmlFor: "contact-email",
                        className: "text-sm font-medium text-primary",
                        children: [
                          "Email Address",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "contact-email",
                        name: "email",
                        type: "email",
                        required: true,
                        placeholder: "jane@example.com",
                        className: "flex h-10 w-full rounded-md border border-primary/40 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200",
                        "data-ocid": "contact.email_input"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "label",
                    {
                      htmlFor: "contact-subject",
                      className: "text-sm font-medium text-primary",
                      children: [
                        "Subject ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "contact-subject",
                      name: "subject",
                      type: "text",
                      required: true,
                      placeholder: "Briefly describe your inquiry",
                      className: "flex h-10 w-full rounded-md border border-primary/40 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200",
                      "data-ocid": "contact.subject_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "label",
                    {
                      htmlFor: "contact-message",
                      className: "text-sm font-medium text-primary",
                      children: [
                        "Message ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      id: "contact-message",
                      name: "message",
                      required: true,
                      rows: 5,
                      placeholder: "Tell us how we can help you…",
                      className: "flex min-h-[120px] w-full rounded-md border border-primary/40 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none transition-colors duration-200",
                      "data-ocid": "contact.textarea"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    disabled: submitting,
                    className: "w-full sm:w-auto font-semibold bg-red-600 hover:bg-red-700 text-white border-0 transition-colors duration-200",
                    "data-ocid": "contact.submit_button",
                    children: submitting ? "Sending…" : "Send Message"
                  }
                )
              ]
            }
          ) }) })
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 border-t border-border py-14 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Direct Lines" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground", children: "Reach the Right Department" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto", children: QUICK_CONTACTS.map(
        ({ icon: Icon, title, phone, description }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.45, delay: i * 0.1 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-subtle border-border hover:shadow-elevated transition-smooth h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-accent-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-0.5", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2.5", children: description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: `tel:${phone.replace(/[\s+]/g, "")}`,
                    className: "flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors duration-200",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: phone })
                    ]
                  }
                ) })
              ] })
            ] }) })
          },
          title
        )
      ) })
    ] }) })
  ] });
}
export {
  ContactPage
};
