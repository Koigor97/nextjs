import Link from "next/link";
import styles from "./button.module.css";

function Button({ link, children, handleClick }) {
  if (link) {
    return (
      <Link href={link} className={styles.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={handleClick} className={styles.Button}>
      {children}
    </button>
  );
}

export default Button;
