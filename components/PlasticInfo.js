import React, { useEffect, useState } from "react";
import styles from "./../styles/PlasticInfo.module.css"

const PlasticInfo = (props) => {
	const [info, setInfo] = useState({
		title:"How to recycle",
		subtitle:"According to recyclenow.com",
		steps: [
			"Rinse out the container",
			"Keep lids and labels on",
			"Flatten to save space",
			"Place it in a clear recycling bag or trashcan."
		],
		no: true,
		nolist: [
			"Plastic bottles containing chemicals (ex. antifreeze)",
			"Makeup packaging",
			"Plastic bags and film"
		]
	});

	useEffect(() => {
		if (props.type === 1 || props.type === 2 || props.type === 5) {
			setInfo({
					title:"How to recycle",
					subtitle:"According to recyclenow.com",
					steps: [
						"Rinse out the container",
						"Keep lids and labels on",
						"Flatten to save space",
						"Follow your local city council's guidance on recycling"
					],
					no: true,
					nolist: [
						"Plastic bottles containing chemicals (ex. antifreeze)",
						"Makeup packaging",
						"Plastic bags and film"
					]
				})
		} else if (props.type === 3) {
			setInfo({
				title:"What to do",
				subtitle:"According to recyclenow.com",
				steps: [
					"Dispose of smaller items (ex. blister packs for medication) in a trashcan",
					"Larger things (ex. pipes, shower curtains) can go to residential recycling centers"
				],
				no: false,
				nolist: [
					
				]
			})
		}	else if (props.type === 4) {
			setInfo({
				title:"What to do",
				subtitle:"According to recyclenow.com",
				steps: [
					"Donate or sell functional household items to people in need",
					"Plastic bags, bread bags, etc. can be taken to grocery stores or pharmacies near you"
				],
				no: false,
				nolist: [
					
				]
			})
		} else if (props.type === 6) {
			setInfo({
				title:"What to do",
				subtitle:"According to recyclenow.com",
				steps: [
					"Polystyrene/Styrofoam can’t be recycled and should be thrown away",
					"Avoid using it if possible or try and reuse it"
				],
				no: false,
				nolist: [
					
				]
			})
		} else if (props.type === 7) {
			setInfo({
				title:"What to do",
				subtitle:"According to recyclenow.com",
				steps: [
					"Donate or sell functional goods (ex. DVDs, sunglasses)",
					"Try to upycycle these items (ex. a suncatcher out of DVDs)."
				],
				no: false,
				nolist: [
					
				]
			})
		} else if (props.type === 8) {
			setInfo({
				title:"What to do?",
				steps: [
					"Look for the plastic resin code on your item—it’s usually inside a triangle made of arrows with a number in the center.",
					"Position the code in the middle of your photo and ensure it's clear and in focus.",
					"If there’s no resin code on your item, try searching for it on the Home page."
				],
				no: false,
				nolist: [
					
				]
			})
		}
	}, []); 
	return (
		<div className={styles.recycleinfo}>
			<div className={styles.header}>
				{info.title}
			</div>
			<div className={styles.subheader}>
				{info.subtitle}
			</div>
			<div className={styles.steps}>
				{info.steps.map((item, i) => 
					<div key={i} className={styles.step}>
						<div className={styles.number}>
							{i+1}
						</div>
						<div className={styles.text}>
							{item}
						</div>
				</div>
				)}
			</div>
			{info.no &&
			<div className={styles.last}>
				<div className={styles.header}>
					What can't be recycled? 
				</div>
				<div className={styles.subheader}>
				For more information search for your item in the Home page
				</div>
				<div className={styles.steps}>
					{info.nolist.map((item, i) => 
						<div key={i} className={styles.step}>
							<div className={styles.cross}>
							<img src="cross.svg"/>
							</div>
							<div className={styles.text}>
								{item}
							</div>
					</div>
					)}
				</div>
			</div>
			}
			<div className={styles.buttons}>
				{props.type === 8 ?
				<a href={"https://search.earth911.com/?utm_source=earth911-header"} target="_blank" className={styles.more}>
					Learn more
				</a>
				:
				<a href={"https://search.earth911.com/?utm_source=earth911-header"} target="_blank" className={styles.more}>
					Learn more
				</a>
				}
				<div className={styles.scan} onClick={() => props.handleReturn(true)}>
					<img src="scanmore.svg"/>
					Scan more
				</div>
			</div>
		</div>
	)
}

export default PlasticInfo;