import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/profile.jpg'
          alt='Profile Image'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Katy</h1>
      <p>I blog about nothing this is just a project for onr of my corses.</p>
    </section>
  );
}
