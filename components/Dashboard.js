import React, { useEffect, useState } from "react";
import styles from "./../styles/Dashboard.module.css";
import HowTo from "./HowTo";

const Dashboard = (props) => {
  const [support, setSupport] = useState(true);

  

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("support") != null) {
        setSupport(false);
      }
    }
  }, []);

  const handleSupport = (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    setSupport(false);
    localStorage.setItem("support", false);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.nav}>
        <div className={styles.header}>Dashboard</div>
      </div>
      {props.num > 0 ? (
        <div className={styles.callout} onClick={() => props.setView(true)}>
          <img src="decoration.svg" />
          <div className={styles.pretitle}>You recycled</div>
          <div className={styles.title}>
            {props.num} plastic item{props.num > 1 && "s"}
          </div>
        </div>
      ) : (
        <div className={styles.callout} onClick={() => props.setView(true)}>
          <img src="decoration.svg" />
          <div className={styles.pretitle}>Start recycling</div>
          <div className={styles.title}>Scan a plastic item</div>
        </div>
      )}
      <HowTo support={support} />
      <div className={styles.button} onClick={() => props.setView(true)}>
        <img src="scanmore.svg" />
        Scan a plastic item
      </div>
    </div>
  );
};

export default Dashboard;
