"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Let in-page anchor links keep their own behavior (see ScrollToHash).
    if (window.location.hash) return;
    // Force an instant jump, bypassing the global `scroll-behavior: smooth`
    // that otherwise leaves the new page a few pixels short of the true top.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
