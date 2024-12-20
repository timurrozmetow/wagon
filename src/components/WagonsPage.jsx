import React from "react";
import "./WagonsPage.css";
import { useTranslation } from "react-i18next";

const WagonsPage = () => {
  const { t, i18n } = useTranslation();

  const wagonsData = [
    {
      id: 1,
      name: t("wagon1"),
      image: "wagon/w1.webp",
      specs: {
        capacity: "70" + t("ton"),
        length: "22.7" + t("m"),
        type: t("Freight"),
      },
    },
    {
      id: 2,
      name: t("wagon2"),
      image: "wagon/w2.webp",
      specs: {
        capacity: "63.3" + t("ton"),
        length: "15.5" + t("m"),
        type: t("Tank"),
      },
    },
    {
      id: 3,
      name: t("wagon3"),
      image: "wagon/w3.webp",
      specs: {
        capacity: "55" + t("ton"),
        length: "18.2" + t("m"),
        type: t("Specialized"),
      },
    },
    {
      id: 4,
      name: t("wagon4"),
      image: "wagon/w4.webp",
      specs: {
        capacity: "60" + t("ton"),
        length: "20" + t("m"),
        type: t("Freight"),
      },
    },
    {
      id: 5,
      name: t("wagon5"),
      image: "wagon/w5.webp",
      specs: {
        capacity: "65" + t("ton"),
        length: "16" + t("m"),
        type: t("Tank"),
      },
    },
    {
      id: 6,
      name: t("wagon6"),
      image: "wagon/w6.webp",
      specs: {
        capacity: "50" + t("ton"),
        length: "17" + t("m"),
        type: t("Specialized"),
      },
    },
    {
      id: 7,
      name: t("wagon7"),
      image: "wagon/w10.webp",
      specs: {
        capacity: "75" + t("ton"),
        length: "23" + t("m"),
        type: t("Freight"),
      },
    },
    {
      id: 8,
      name: t("wagon8"),
      image: "wagon/w8.webp",
      specs: {
        capacity: "68" + t("ton"),
        length: "18" + t("m"),
        type: t("Tank"),
      },
    },
    {
      id: 9,
      name: t("wagon9"),
      image: "wagon/w9.webp",
      specs: {
        capacity: "53" + t("ton"),
        length: "19" + t("m"),
        type: t("Specialized"),
      },
      
    },
    {
      id: 10,
      name: t("wagon10"),
      image: "wagon/sa.webp",
      specs: {
        capacity: "70" + t("ton"),
        length: "13" + t("m"),
        type: t("Specialized"),
      },
      
    }
  ];

  return (
    <section className="wagons-page">
      <h1>{t("wagons")}</h1>
      <div className="wagons-grid">
        {wagonsData.map((wagon) => (
          <div className="wagon-card" key={wagon.id}>
            <img src={wagon.image} alt={wagon.name} className="wagon-image" />
            <div className="wagon-info">
              <h2>{wagon.name}</h2>
              <p>{t("wagons1")}: {wagon.specs.capacity}</p>
              <p>{t("wagons2")}: {wagon.specs.length}</p>
              <p>{t("wagons3")}: {wagon.specs.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WagonsPage;
