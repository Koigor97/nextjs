import Image from "next/image";
import { getMeal } from "@/lib/meals";
import styles from "./page.module.css";

function MealsDetailPage({ params }) {
  const meal = getMeal(params.slug);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={styles.instructions}>{meal.instructions}</p>
      </main>
    </>
  );
}

export default MealsDetailPage;
