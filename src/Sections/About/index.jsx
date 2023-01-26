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
            
          .typeString("Welcomes You!!! ")
            
          .pauseFor(1000)
          .start();
          }}
          />
          </p>
          <p className={styles.desc}>
          <Typewriter
  
          onInit={(typewriter)=> {
      
          typewriter
            

            
          .pauseFor(2000)
          
          .typeString("I'm a Web Developer located in Israel. I love to create simple yet beautiful websites with great user experience. ")
          .start();
          }}
          />
          </p>
          <p className={styles.desc}>
          <Typewriter
  
          onInit={(typewriter)=> {
      
          typewriter
            

            
          .pauseFor(19000)
          
          .typeString(" I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to play video games and read books.")
          .start();
          }}
          />
          </p>
          <p className={styles.desc}>
          <Typewriter
  
          onInit={(typewriter)=> {
      
          typewriter
            

            
          .pauseFor(45000)
          
          .typeString("I believe everything is an Art when you put your consciousness in it.")
          .start();
          }}
          />
          </p>
          <p className={styles.desc}>
          <Typewriter
  
          onInit={(typewriter)=> {
      
          typewriter
            

            
          .pauseFor(55000)
          
          .typeString("You can connect with me via social links.")
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
