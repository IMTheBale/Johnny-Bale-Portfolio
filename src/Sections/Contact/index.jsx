import React from "react";
import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function Contact() {
  return (
    <section className={styles.contact_section} id="contact">
      <div className={styles.heading_1}>
        <Heading index="04" heading="What's Next ???" />
      </div>
      <h1 className={styles.heading_2}>Get In Touch</h1>
      <p className={styles.desc}>
        
      </p>
      <a href="mailto:johnny.bale.play@gmail.com">
        <button className={styles.btn}>Say Hello</button>
      </a>
    </section>
  );
}

export default Contact;
