"use client";
import { Button } from "@/components/ui/button";
import { ModeToggleBtn } from "@/components/ui/mode-toggle-btn";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DropdownMenuAvatar } from "../_modules/users/views/profile-dropdown";
const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/providers", label: "Providers" },
  { href: "/bookings", label: "Bookings" },
  { href: "/provider-dashboard", label: "provider dashboard" },
  { href: "/admin-dashboard", label: "Admin dashboard" },
];
const Headers = () => {
  const router = useRouter();
  return (
    <div>
      {" "}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80 shrink-0"
          >
            <Calendar className="h-5 w-5 text-amber-500" />
            <span className="font-bold text-foreground">BookHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop & Mobile Actions - Always visible */}
          <div className="flex items-center gap-2">
            {/* Auth Actions - Visible on both desktop and mobile */}

            <ModeToggleBtn />
            <DropdownMenuAvatar />
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:inline-flex"
                onClick={() => router.push("/login")}
              >
                Sign In
              </Button>
              <Button
                variant="default"
                size="sm"
                className="hidden md:inline-flex"
                onClick={() => router.push("/register")}
              >
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Toggle menu"
            ></Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Headers;
