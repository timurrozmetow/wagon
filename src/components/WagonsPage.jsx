import React from "react";
import "./WagonsPage.css";

const wagonsData = [
    {
      id: 1,
      name: "Freight Wagon Model A",
      image: "wagon/w1.jpg",
      specs: {
        capacity: "70 tons",
        length: "22.7 m",
        type: "Freight",
      },
    },
    {
      id: 2,
      name: "Tank Wagon Model B",
      image: "wagon/w2.jpg",
      specs: {
        capacity: "63.3 tons",
        length: "15.5 m",
        type: "Tank",
      },
    },
    {
      id: 3,
      name: "Specialized Wagon Model C",
      image: "wagon/w3.jpg",
      specs: {
        capacity: "55 tons",
        length: "18.2 m",
        type: "Specialized",
      },
    },
    {
      id: 4,
      name: "Freight Wagon Model D",
      image: "wagon/w4.jpg",
      specs: {
        capacity: "60 tons",
        length: "20 m",
        type: "Freight",
      },
    },
    {
      id: 5,
      name: "Tank Wagon Model E",
      image: "wagon/w5.jpg",
      specs: {
        capacity: "65 tons",
        length: "16 m",
        type: "Tank",
      },
    },
    {
      id: 6,
      name: "Specialized Wagon Model F",
      image: "wagon/w6.jpg",
      specs: {
        capacity: "50 tons",
        length: "17 m",
        type: "Specialized",
      },
    },
    {
      id: 7,
      name: "Freight Wagon Model G",
      image: "wagon/w7.jpg",
      specs: {
        capacity: "75 tons",
        length: "23 m",
        type: "Freight",
      },
    },
    {
      id: 8,
      name: "Tank Wagon Model H",
      image: "wagon/w8.jpg",
      specs: {
        capacity: "68 tons",
        length: "18 m",
        type: "Tank",
      },
    },
    {
      id: 9,
      name: "Specialized Wagon Model I",
      image: "wagon/w9.jpg",
      specs: {
        capacity: "53 tons",
        length: "19 m",
        type: "Specialized",
      },
    },
    {
      id: 10,
      name: "Freight Wagon Model J",
      image: "wagon/w10.jpg",
      specs: {
        capacity: "72 tons",
        length: "21.5 m",
        type: "Freight",
      },
    },
  ];
  
  const WagonsPage = () => {
    return (
      <section className="wagons-page">
        <h1>Railway Wagons</h1>
        <div className="wagons-grid">
          {wagonsData.map((wagon) => (
            <div className="wagon-card" key={wagon.id}>
              <img src={wagon.image} alt={wagon.name} className="wagon-image" />
              <div className="wagon-info">
                <h2>{wagon.name}</h2>
                <p>Capacity: {wagon.specs.capacity}</p>
                <p>Length: {wagon.specs.length}</p>
                <p>Type: {wagon.specs.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  

export default WagonsPage;
