import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { Linkedin } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

const QUICK_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "News & Events", to: "/news" },
  { label: "Our Staff", to: "/staff" },
  { label: "Contact", to: "/contact" },
  { label: "Admissions", to: "/contact" },
];

const SOCIAL_LINKS = [
  { icon: SiFacebook, href: "#", label: "Facebook" },
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: SiYoutube, href: "#", label: "YouTube" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="bg-primary border-t border-primary/20"
      data-ocid="site-footer"
    >
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent text-accent-foreground">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-display font-bold text-primary-foreground">
                  Twinkle Star English High School
                </span>
                <span className="block text-xs text-primary-foreground/60">
                  Est. 1962
                </span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/75 leading-relaxed max-w-xs">
              Cultivating minds and inspiring futures for over 70 years. A
              community committed to academic excellence.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-md bg-primary-foreground/10 text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-sm text-primary-foreground mb-4 tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-sm text-primary-foreground mb-4 tracking-wide uppercase">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-primary-foreground/75">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>
                  Danjay Plot Near Kum Kum Medical Store Kargil Road Sharma Wadi
                  Santosh Bhavan Nalasopara East Palghar 401209
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/75">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="tel:8888889214"
                  className="hover:text-accent transition-colors"
                >
                  +91 8888889214
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/75">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="mailto:ayadanand@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  ayadanand@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="font-display font-semibold text-sm text-primary-foreground mb-4 tracking-wide uppercase">
              Office Hours
            </h3>
            <ul className="space-y-2">
              {[
                { day: "Monday–Friday", hours: "8:00 AM TO 4:00 PM" },
                { day: "Saturday", hours: "9:00 AM – 12:00 PM" },
                { day: "Sunday", hours: "Closed" },
              ].map(({ day, hours }) => (
                <li key={day} className="text-sm">
                  <span className="font-medium text-primary-foreground">
                    {day}
                  </span>
                  <span className="block text-primary-foreground/65">
                    {hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <span>
            © {year} Twinkle Star English High School. All rights reserved.
          </span>
          <span>
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-accent transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
