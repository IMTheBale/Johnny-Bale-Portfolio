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
          <p className={styles.desc}>
          <Typewriter
  
          onInit={(typewriter)=> {
      
          typewriter
            
          .typeString("my name is johnny. ")
            
          .pauseFor(1000)
          
          .typeString("Welcomes You")
          .start();
          }}
          />

          </p>
          
          
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
