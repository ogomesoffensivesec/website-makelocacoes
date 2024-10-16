import React from "react";
import { cn } from "@/lib/utils";

export type TopbarGenericProps<T = unknown> = {
  children: React.ReactNode;
  className?: string;
  href?: string;
} & T;

export type TopbarNavLinkProps = {
  href: string;
  active?: boolean;
};

export function Topbar({ className, children }: TopbarGenericProps) {
  return (
    <aside
      className={cn([
        "flex items-center justify-between px-8   mb-2 md:px-2 w-full h-20 bg-white",
        className,
      ])}
    >
      {children}
    </aside>
  );
}

export function TopbarLogo({ className, children }: TopbarGenericProps) {
  return (
    <div
      className={cn([
        "flex items-center px-4 py-2 font-bold font-lexend text-lg w-[250px] text-[#F97316]",
        className,
      ])}
    >
      {children}
    </div>
  );
}

export function TopbarItems({
  className,
  children,
  isOpen,
}: TopbarGenericProps & { isOpen: boolean }) {
  return (
    <div
      className={cn(
        [
          "flex flex-col md:flex-row gap-6 items-center md:static absolute md:w-auto w-full left-0 top-16 z-50 py-4 bg-white md:bg-transparent transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0 md:opacity-100 hidden md:flex",
        ],
        className
      )}
    >
      {children}
    </div>
  );
}

export function TopbarItem({
  className,
  children,
  href,
}: TopbarGenericProps) {
  return (
    <a
      href={href}
      className={cn([
        "font-light font-lexend text-zinc-800 transition-all hover:font-normal duration-300 hover:text-[#F97316] cursor-pointer",
        className,
      ])}
    >
      {children}
    </a>
  );
}

export function TopbarLink({ className, children }: TopbarGenericProps) {
  return (
    <a
      className={cn([
        "flex gap-2 text-green-600 font-bold leading-none items-center justify-center",
        className,
      ])}
    >
      {children}
    </a>
  );
}

export function TopbarHamburger({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <button
      className="flex flex-col gap-1 md:hidden"
      onClick={toggleMenu}
      aria-label="Toggle Menu"
    >
      <span
        className={`h-1 w-6 bg-zinc-800 rounded transition-all ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`h-1 w-6 bg-zinc-800 rounded transition-all ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`h-1 w-6 bg-zinc-800 rounded transition-all ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </button>
  );
}

