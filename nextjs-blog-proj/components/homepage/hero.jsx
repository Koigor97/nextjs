import Image from "next/image";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="https://avatars.githubusercontent.com/u/96601470?v=4"
          alt="Image of the Author"
          width={460}
          height={460}
        />
      </div>
      <h1>Hello👋🏾... I'm Koigor</h1>
      <h2>A Software Developer</h2>
      <p>Currently in the University to get my Softwarre Development Degree.</p>
    </section>
  );
}

export default Hero;
