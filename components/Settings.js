import React from "react";
import styles from "./../styles/Settings.module.css";

const Settings = (props) => {
	return (
		<div className={styles.settings}>
			<div className={styles.nav}>
				<img src="arrow-back.svg" onClick={() => props.setSettings(false)}/>
				<span className={styles.header}>Settings</span>
			</div>
			<div className={styles.all}>
				<div className={styles.item} onClick={() => props.setReset(true)}><span>region updating</span> <img src="enter.svg"/></div>
				<div className={styles.item} onClick={() => props.setOn(true)}><span>onboaring intructions</span> <img src="enter.svg"/></div>
			</div>
		</div>
	)
}

export default Settings;