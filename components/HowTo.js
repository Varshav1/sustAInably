import React, { useEffect, useState } from "react";
import styles from "./../styles/HowTo.module.css";

const HowTo = (props) => {
  const [searchField, setSearchField] = useState("");
  const items = [
    {
      name: "Paper/Cardboard",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#pap",
      image:
        "https://images.unsplash.com/photo-1603484477859-abe6a73f9366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      name: "Plastics",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#pla",
      image:
        "https://images.unsplash.com/photo-1571727153934-b9e0059b7ab2?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Glass",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#gla",
      image:
        "https://plus.unsplash.com/premium_photo-1724697321773-a86c14998ec2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2xhc3MlMjBib3R0bGVzfGVufDB8fDB8fHww",
    },
    {
      name: "Aluminum",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#aluminum",
      image:
        "https://images.unsplash.com/photo-1617565084935-4e63d2a1b241?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Batteries",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#batteries",
      image:
        "https://images.unsplash.com/photo-1608224873587-81ee37394b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0dGVyaWVzfGVufDB8fDB8fHww",
    },
    {
      name: "Electronics",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#electronics",
      image:
        "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Food",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#food",
      image:
        "https://images.unsplash.com/photo-1553787434-45e1d245bfbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHdhc3RlfGVufDB8fDB8fHww",
    },
    {
      name: "Lawn Materials",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#lawn",
      image:
        "https://images.unsplash.com/photo-1527475549522-94b2a376ce13?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Used Oil",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#oil",
      image:
        "https://images.unsplash.com/photo-1627436712678-960862eac951?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2lsfGVufDB8fDB8fHww",
    },
    {
      name: "Household Hazardous Waste",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#hhw",
      image:
        "https://plus.unsplash.com/premium_photo-1678718605794-e21935e9fda1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2Vob2xkJTIwY2xlYW5pbmclMjBzdXBwbGllc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Tires",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#tir",
      image:
        "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Metal",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#metal",
      image:
        "https://images.unsplash.com/photo-1593153041370-5ebf6b82886a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1ldGFsJTIwaXRlbXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Miscellaneous",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#miscellaneous",
      image:
        "https://images.unsplash.com/photo-1501580979865-c37d96d28bba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchField.toLowerCase()) ||
      item.description.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className={props.support ? styles.howtosupport : styles.howto}>
      <div className={styles.title}>How to recycle</div>
      <div className={styles.input}>
        <img src="search.svg" className={styles.search} />
        {searchField.length > 0 && (
          <img
            src="searchclear.svg"
            onClick={() => setSearchField("")}
            className={styles.clear}
          />
        )}
        <input
          placeholder="Search for an item"
          value={searchField}
          onChange={handleChange}
        />
      </div>
      <div className={props.support ? styles.resultssupport : styles.results}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, i) => (
            <a
              href={item.url}
              target="_blank"
              className={styles.result}
              key={i}
            >
              <div
                className={styles.image}
                style={{ backgroundImage: "url(" + item.image + ")" }}
              ></div>
              <div className={styles.info}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.desc}>{item.description}</div>
              </div>
            </a>
          ))
        ) : (
          <a
            className={styles.noresult}
            target="_blank"
            href="https://www.recyclenow.com/recycle-an-item"
          >
            <div className={styles.no}>Couldn't find any items</div>
            <div className={styles.no2}>
              Click to search for more items on recyclenow.com
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default HowTo;
