import React from 'react'
import styles from "./styles.module.css";

function Heading({ heading }) {
	return (
		<div className={styles.container}>
			<p className={styles.index}></p>
			<h1 className={styles.heading}>{heading}</h1>
			<div className={styles.line}></div>
		</div>
	);
}

export default Heading;
