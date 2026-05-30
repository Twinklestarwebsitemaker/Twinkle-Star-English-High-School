import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useRouterState } from "@tanstack/react-router";
import { GraduationCap, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "News", to: "/news" },
  { label: "Staff", to: "/staff" },
  { label: "Contact", to: "/contact" },
];

function NavLink({
  to,
  label,
  onClick,
}: { to: string; label: string; onClick?: () => void }) {
  const router = useRouterState();
  const isActive = router.location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      data-ocid={`nav-${label.toLowerCase()}`}
      className={`relative text-sm font-medium transition-colors duration-200 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-1
        ${isActive ? "text-accent after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-accent after:rounded-full" : "text-primary-foreground/80"}`}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-ocid="site-header"
      className={`sticky top-0 z-50 w-full bg-card border-b border-border transition-shadow duration-300 ${scrolled ? "shadow-elevated" : "shadow-subtle"}`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          data-ocid="nav-logo"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent text-accent-foreground group-hover:bg-accent/90 transition-colors">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <span className="block text-sm font-display font-bold text-primary-foreground tracking-tight">
              Twinkle Star
            </span>
            <span className="block text-xs font-body text-primary-foreground/70 -mt-0.5">
              English High School
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} {...link} />
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:block" data-ocid="nav-cta">
            <Button
              size="sm"
              className="font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-smooth"
            >
              Request Info
            </Button>
          </Link>
          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open navigation menu"
                data-ocid="nav-mobile-trigger"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 pt-8 bg-primary">
              <div className="flex items-center gap-2.5 mb-8 px-2">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent text-accent-foreground">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <span className="block text-sm font-display font-bold text-primary-foreground">
                    Twinkle Star English High School
                  </span>
                </div>
              </div>
              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    {...link}
                    onClick={() => setMobileOpen(false)}
                  />
                ))}
              </nav>
              <div className="mt-8 px-1">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  <Button
                    className="w-full font-medium bg-accent text-accent-foreground hover:bg-accent/90"
                    data-ocid="nav-mobile-cta"
                  >
                    Request Info
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
