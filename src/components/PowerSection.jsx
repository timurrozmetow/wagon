
import React from "react";
import CountUp from "react-countup";
import "./PowerSection.css";
import { FaCogs, FaTrain, FaIndustry, FaUsers } from "react-icons/fa";

const stats = [
    { icon: <FaCogs />, end: 70000, label: "Annual Wagon Repairs" },
    { icon: <FaTrain />, end: 22700, label: "Freight Wagons Produced" },
    { icon: <FaIndustry />, end: 63300, label: "Tons of Equipment" },
    { icon: <FaUsers />, end: 1500, label: "Employees" },
  ];
  
  const PowerSection = () => {
    return (
      <section id="power" className="power-section">
        <div className="power-container">
          <h2>Our Production Capacity</h2>
          <div className="power-stats">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-icon">{stat.icon}</div>
                <CountUp end={stat.end} duration={3} className="stat-number" />
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
export default PowerSection;
