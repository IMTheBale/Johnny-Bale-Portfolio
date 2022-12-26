import React from 'react'
import styles from "./styles.module.css";

function Navbar() {
	return (
		<nav className={styles.nav_container}>
			<div className={styles.nav_left}>
				<a href="#home">HOME</a>
			</div>
			<div className={styles.nav_right}>
				<a href="#about" className={styles.nav_link}>
					About
				</a>
				<a href="#experience" className={styles.nav_link}>
					Experience
				</a>
				<a href="#work" className={styles.nav_link}>
					Work
				</a>
				<a href="#contact" className={styles.nav_link}>
					Contact
				</a>
				<a href="Johnny-Bale-Resume.pdf" download="Johnny-Bale-Resume.pdf">
					<button className={styles.nav_resume_btn}>DOWNLOAD CV</button>
				</a>
				
			</div>
		</nav>
	);
}

export default Navbar;
