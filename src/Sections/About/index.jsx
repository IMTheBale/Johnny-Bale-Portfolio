import React from "react";
import Heading from "../../Components/Heading";
import styles from "./styles.module.css";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <section id="about">
      <Heading heading="About Me" />
      <div className={styles.container}>
        <div className={styles.left}>
          <Typewriter
            options={{
              delay: 50,
              wrapperClassName: styles.typewriterWrapper
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("<p>Welcomes You!!!</p>")
                .pauseFor(1000)
                .typeString("<p>I'm a Full Stack Web Developer based in Israel.</p>")
                .pauseFor(1000)
                .typeString("<p>I specialize in creating robust and user-friendly websites with a seamless user experience. My interests span the entire development stack, from crafting engaging front-end interfaces to building efficient back-end systems.</p>")
                .pauseFor(1000)
                .typeString("<p>As an independent freelancer and avid blogger, I enjoy experimenting with new technologies and taking on challenging projects. I work well both independently and as part of a team, adapting to different workflows and collaboration styles. When I'm not coding, you can find me playing video games or immersed in a good book. I believe that with passion and dedication, anything can be transformed into art.</p>")
                .pauseFor(1000)
                .typeString("You can connect with me via social links.")
                .start();
            }}
          />
        </div>
        <div className={styles.right}>
          <img
            src="./images/profile.png"
            alt="profile"
            className={styles.profile_img}
          />
          <div className={styles.img_border}></div>
        </div>
      </div>
    </section>
  );
}

export default About;