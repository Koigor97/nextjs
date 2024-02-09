"use client";

import styles from "./nav-link.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith({ href })
          ? `${styles.link} ${styles.active}`
          : undefined
      }
    >
      {children}
    </Link>
  );
}

export default NavLink;
