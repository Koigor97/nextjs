import Link from "next/link";
import styles from "./page.module.css";

function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Cook your favorite recipe</p>
        <p className={styles.cta}>
          <Link href={styles.cta}>Share your favorite recipe</Link>
        </p>
      </header>

      <main className={styles.main}></main>
    </>
  );
}

export default MealsPage;
