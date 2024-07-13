import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from "./styles.module.css";

function ContactBar() {
	return (
		<div className={styles.contact_bar_wrapper}>
			<div className={styles.contact_bar}>
				<a href="https://www.linkedin.com/in/johnny-bale/" target="blank" className={styles.icon} >
					<LinkedInIcon  />
				</a>
				<a href="https://www.facebook.com/JohnBaleOfficial/" target="blank" className={styles.icon} >
					<FacebookIcon  />
				</a>
				<a href="https://github.com/IMTheBale" target="blank" className={styles.icon} >
					<GitHubIcon  />
				</a>
				<a href="https://www.youtube.com/@IMTheBale
" target="blank" className={styles.icon} >
					<YouTubeIcon  />
				</a>
				<a href="https://twitter.com/IMTheBale" target="blank" className={styles.icon} >
					<TwitterIcon  />
				</a>
				<div className={styles.line}></div>
			</div>
			<div className={styles.contact_bar}>
				<a href="mailto:johnny.bale.play@gmail.com" className={styles.email}>
					johnny.bale.play@gmail.com
				</a>
				<div className={styles.line}></div>
			</div>
		</div>
	);
}

export default ContactBar;
